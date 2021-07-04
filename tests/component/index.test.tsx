import React from "react";
import { render } from "@testing-library/react";

describe("test", () => {
    test("component", () => {
        const { getByLabelText } = render(<button aria-label="Button" />);
        expect(getByLabelText("Button")).toBeEmptyDOMElement();
    });
});