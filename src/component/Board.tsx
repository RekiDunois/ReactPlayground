import * as React from 'react'
import { Player, Point } from './Game';
import Square from './Square';

export interface Props {
    squares: Array<Point>;
    onClick: Function;
    row?: number;
    col?: number;
}

class Board extends React.Component<Props, object> {
    renderSingleSquare(i: number, r: number, c: number) {
        let p = this.props.squares[i];
        if ((p.x || p.y) === -1) {
            p = {
                x: c,
                y: r,
                value: Player.Empty
            }
        }
        return <Square
            point={p}
            onClick={() => this.props.onClick(i)} />;
    }

    renderSquares(row: number, colo: number) {
        let squares: Array<JSX.Element> = [];
        let rows: Array<JSX.Element> = [];
        let current = 0;
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < colo; c++) {
                squares[current] = this.renderSingleSquare(current, r, c);
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
                {this.renderSquares(this.props.row ? this.props.row : 3, this.props.col ? this.props.col : 3)}
            </div>
        );
    }
}

export default Board