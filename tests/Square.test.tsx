import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Square, { Props } from "../src/component/Square";
import { async } from "q";

describe("Single Square testing", () => {
    test("Square", async () => {
        const clickFun = jest.fn();
        const prop: Props = {
            onClick: clickFun,
            value: '114514'
        }
        const { getByRole } = render(<Square value={prop.value} onClick={() => prop.onClick(null)} />)
        const btn = getByRole("button");
        fireEvent.click(btn ? btn : null);
        expect(clickFun).toBeCalled()
        expect(btn.textContent).toEqual(prop.value);
    });
});