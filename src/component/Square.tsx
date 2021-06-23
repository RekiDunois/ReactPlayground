import * as React from 'react';

export interface Props {
    onClick: React.MouseEventHandler;
    value: string;
}

function Square(props: Props) {
    return (
        <button
            className="square"
            onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;