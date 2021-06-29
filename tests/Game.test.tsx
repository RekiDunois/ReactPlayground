import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Game, { State, History, Props } from '../src/component/Game';
import { unmountComponentAtNode } from 'react-dom';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

describe('Game rander', () => {
    const prop: Props = {
        row: 4,
        col: 4,
        winCase: 3
    };
    const actual = (<Game row={prop.row} col={prop.col} winCase={prop.winCase} />);
    test('Checkerboard size', () => {
        const { getAllByRole, baseElement } = render(actual, container);
        const btn = baseElement.getElementsByClassName('square');
        // const btn = getAllByRole('456');
        expect(btn.length).toEqual(prop.row * prop.col);
    });
});

describe('Click piece', () => {
    const prop: Props = {
        row: 4,
        col: 4,
        winCase: 3
    };
    const state: State = {
        history: Array<History>().fill(null),
        stepNumber: 0,
        listReversed: false,
        xIsNext: true
    };
    const clickNumber = 4;
    const actual = (<Game row={prop.row} col={prop.col} winCase={prop.winCase} />);
    test('Current status', () => {
        const { getAllByRole, baseElement } = render(actual, container);
        const btn = getAllByRole('button');
        fireEvent.click(btn[clickNumber]);
        const status = baseElement.getElementsByClassName('game-status');
        expect(status[0].textContent).toEqual('Next player: ' + (state.xIsNext ? 'O' : 'X'));
    });
    test('Add History record', () => {
        const { getAllByRole, baseElement } = render(actual, container);
        const btn = getAllByRole('button');
        fireEvent.click(btn[clickNumber]);
        expect(getAllByRole('list')[0].childElementCount).toEqual(state.stepNumber + 2);
    })
});