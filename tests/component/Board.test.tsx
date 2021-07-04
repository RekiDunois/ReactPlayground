import React from "react";
import { render } from "@testing-library/react";
import Board, { Props } from "../../src/component/Board";
import { Point } from "../../src/component/Game";
import initCheckerBoard from "../../src/service/utils";

describe("Board testing", () => {
    test("Board render", async () => {
        // 4x4 board
        const testpr: Props = {
            squares: initCheckerBoard(4, 4),
            onClick: () => { },
            row: 4,
            col: 4
        };
        const { getAllByRole } = render(<Board row={testpr.row} col={testpr.col} squares={testpr.squares} onClick={testpr.onClick} />);
        const btns = getAllByRole("button");
        expect(btns.length).toEqual(testpr.row * testpr.col);
    });
});