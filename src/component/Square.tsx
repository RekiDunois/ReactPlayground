import * as React from 'react';
import { Point } from './Game';

export interface Props {
    onClick: React.MouseEventHandler;
    point: Point;
}

function Square(props: Props) {
    return (
        <button
            className="square"
            onClick={props.onClick}>
            {props.point.value}
        </button>
    );
}

export default Square;