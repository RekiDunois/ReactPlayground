import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Square, { Props } from "../src/component/Square";
import { Player } from "../src/component/Game";

describe("Single Square testing", () => {
    test("Square", async () => {
        const clickFun = jest.fn();
        const prop: Props = {
            onClick: clickFun,
            point: { x: 0, y: 0, value: Player.Empty }
        }
        const { getByRole } = render(<Square point={prop.point} onClick={() => prop.onClick(null)} />)
        const btn = getByRole("button");
        fireEvent.click(btn ? btn : null);
        expect(clickFun).toBeCalled()
        expect(btn.textContent).toEqual(prop.point.value.toString());
    });
});