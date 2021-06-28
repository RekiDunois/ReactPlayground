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
    return (
        <button
            className="square"
            onClick={props.onClick}>
            {content}
        </button>
    );
}

export default Square;