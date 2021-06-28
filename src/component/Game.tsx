import React from 'react';
import Board from "./Board";

export interface Props {

}

export interface History {
    squares: Array<string>;
    changePoint: number;
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
    value?: Player;
}

class Game extends React.Component<object, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null),
                    changePoint: -1
                }
            ],
            stepNumber: 0,
            listReversed: false,
            xIsNext: true
        };
    }

    handleClick(i: number) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const result = calculateWinner(squares);
        if (result !== 'not finish' || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                changePoint: i
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

    subscriptToCoordinates(move: number): Point {
        if (move < 3) {
            return ({
                x: move,
                y: 0
            });
        } else if (move < 6) {
            return ({
                x: move,
                y: 1,
            });
        } else if (move < 9) {
            return ({
                x: move,
                y: 2,
            })
        }
        return ({
            x: -1,
            y: -1
        })
    }

    buildDesc(move: number, history: Array<History>) {
        let result = ``;
        if (move) {
            const point = this.subscriptToCoordinates(history[move].changePoint);
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
                        onClick={(i: number) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>
                        <div>{status}</div>
                        {/* <button onClick={() => this.reversList(move)}></button> */}
                    </div>
                    <ol>{move}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares: Array<string>) {
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
            return squares[a];
        }
    }
    let result = 'draw';
    squares.forEach(element => {
        if (element === null)
            result = 'not finish';
    });
    return result;
}

export default Game