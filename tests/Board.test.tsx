import React from "react";
import { render } from "@testing-library/react";
import Board, { Props } from "../src/component/Board";

describe("Board testing", () => {
    test("Board render", () => {
        // 3x3 board
        const testpr: Props = {
            squares: Array<string>(),
            onClick: () => { }
        };
        const result = (<Board squares={testpr.squares} onClick={testpr.onClick} />);
        expect(result.props).toBeDefined();
        // TODO 10x10 board
        // TODO -1x-1 test
    });
});