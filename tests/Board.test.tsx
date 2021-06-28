import React from "react";
import { render } from "@testing-library/react";
import Board, { Props } from "../src/component/Board";

describe("Board testing", () => {
    test("Board render", async () => {
        // 3x3 board
        const testpr: Props = {
            squares: Array<string>(),
            onClick: () => { }
        };
        const { getAllByRole } = render(<Board squares={testpr.squares} onClick={testpr.onClick} />);
        const btns = getAllByRole("button");
        expect(btns.length).toEqual(9);
        // TODO 10x10 board
        // TODO -1x-1 test
    });
});