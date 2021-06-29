import * as React from 'react';
import { Player, Point } from './Game';

export interface Props {
    onClick: React.MouseEventHandler;
    point: Point;
}

function Square(props: Props) {
    let content = Player.Empty;
    if (props.point !== undefined && props.point.value !== undefined) {
        content = props.point.value;
    }
    const text = playerToString(content);
    return (
        <button
            className="square"
            onClick={props.onClick}>
            {text}
        </button>
    );
}

function playerToString(n: Player): string {
    switch (n) {
        case Player.Empty:
            return '';
        case Player.Cross:
            return 'X';
        case Player.Circle:
            return 'O'
        default:
            return '';
    }
}

export default Square;