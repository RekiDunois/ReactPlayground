import React from 'react';
import Board from "./Board";

export interface Props {
    row: number;
    col: number;
    winCase: number;
}

export interface History {
    squares: Array<Point>;
    changePoint: Point;
}

export interface State {
    history: Array<History>;
    stepNumber: number;
    listReversed: boolean;
    xIsNext: boolean;
}

export enum Player {
    Empty = -1,
    Circle,
    Cross,
}

export interface Point {
    x: number;
    y: number;
    value: Player;
}

class Game extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array<Point>(props.row * props.col).fill({
                        x: -1,
                        y: -1,
                        value: Player.Empty
                    }),
                    changePoint: {
                        x: -1,
                        y: -1,
                        value: Player.Empty
                    }
                }
            ],
            stepNumber: 0,
            listReversed: false,
            xIsNext: true
        };
    }

    handleClick(piece: Point) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const result = calculateWinner(squares);
        if (result !== 'not finish' || piece.value !== Player.Empty) {
            return;
        }
        piece.value = this.state.xIsNext ? Player.Cross : Player.Circle;
        squares.forEach(p => {
            if (p.x === piece.x && p.y === piece.y)
                p = piece;
        });
        this.setState({
            history: history.concat([{
                squares: squares,
                changePoint: piece
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step: number) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    buildDesc(move: number, history: Array<History>) {
        let result = ``;
        if (move) {
            const point = history[move].changePoint;
            result = `Go to move #${move} :(${point.x},${point.y})`;
        } else {
            result = 'Go to game start';
        }
        return result;
    }

    reversList(move: number) {

    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const move = history.map((step, move) => {
            const desc = this.buildDesc(move, history);
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>
                        {desc}
                    </button>
                </li>
            );
        })
        let status;
        if (winner !== 'not finish') {
            if (winner === 'draw') {
                status = winner
            } else {
                status = 'Winner: ' + winner;
            }
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i: Point) => this.handleClick(i)}
                        row={this.props.row}
                        col={this.props.col} />
                </div>
                <div className="game-info">
                    <div>
                        <div className="game-status">{status}</div>
                        {/* <button onClick={() => this.reversList(move)}></button> */}
                    </div>
                    <ol>{move}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares: Array<Point>) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        }
    }
    let result = 'draw';
    squares.forEach(element => {
        if (element.value === Player.Empty || element === undefined)
            result = 'not finish';
    });
    return result;
}

export default Game