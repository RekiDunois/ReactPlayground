import * as React from 'react'
import Square from './Square';

export interface Props {
    squares: Array<string>;
    onClick: Function;
}

class Board extends React.Component<Props, object> {
    renderSingleSquare(i: number) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)} />;
    }

    renderSquares(row: number, colo: number) {
        let squares: Array<JSX.Element> = [];
        let rows: Array<JSX.Element> = [];
        let current = 0;
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < colo; c++) {
                squares[current] = this.renderSingleSquare(current);
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
                {this.renderSquares(3, 3)}
            </div>
        );
    }
}

export default Board