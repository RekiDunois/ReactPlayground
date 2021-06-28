import ReactDOM, { render } from "react-dom";
import Game, { State, History } from "../src/component/Game";


describe("Game testing", () => {
    test("Game render", () => {
        const prop: State = {
            history: Array<History>().fill(null),
            stepNumber: 0,
            listReversed: false,
            xIsNext: false
        }
        const actual = ReactDOM.render(<Game />, document.getElementById('root'));
    });
})