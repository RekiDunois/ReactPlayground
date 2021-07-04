import * as React from 'react'
import { Point } from './Game';
import Square from './Square';

export interface Props {
    squares: Array<Point>;
    onClick: Function;
    row: number;
    col: number;
}

class Board extends React.Component<Props, object> {
    renderSingleSquare(piece: Point) {
        return <Square
            point={piece}
            onClick={() => this.props.onClick(piece)} />;
    }

    renderSquares(row: number, colo: number) {
        let squares: Array<JSX.Element> = [];
        let rows: Array<JSX.Element> = [];
        let current = 0;
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < colo; c++) {
                squares[c] = this.renderSingleSquare(this.props.squares[current]);
                current++;
            }
            rows.push(
                <div className="board-row">
                    {squares}
                </div>
            );
            squares = [];
        }
        return rows;
    }

    render() {
        return (
            <div>
                {this.renderSquares(this.props.row, this.props.col)}
            </div>
        );
    }
}

export default Board