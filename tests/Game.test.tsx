import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Game, { State, History } from '../src/component/Game';


describe('Game testing', () => {
    test('Game render', () => {
        const prop: State = {
            history: Array<History>().fill(null),
            stepNumber: 0,
            listReversed: false,
            xIsNext: true
        }
        const clickNumber = 4;
        const { getAllByRole, baseElement } = render(<Game />);
        const btn = getAllByRole('button');
        fireEvent.click(btn[clickNumber]);
        const status = baseElement.getElementsByClassName('game-status');
        expect(status[0].textContent).toEqual('Next player: ' + (prop.xIsNext ? 'O' : 'X'));
        expect(getAllByRole('list')[0].childElementCount).toEqual(prop.stepNumber + 2);
    });
});