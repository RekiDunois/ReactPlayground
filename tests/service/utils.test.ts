import { Player, Point } from "../../src/component/Game"
import initCheckerBoard from "../../src/service/utils";

describe("utils test", () => {
    test("checkerboard data init", () => {
        const expected: Array<Point> = [
            { x: 0, y: 0, value: Player.Empty }, { x: 1, y: 0, value: Player.Empty }, { x: 2, y: 0, value: Player.Empty }, { x: 3, y: 0, value: Player.Empty }, { x: 4, y: 0, value: Player.Empty },
            { x: 0, y: 1, value: Player.Empty }, { x: 1, y: 1, value: Player.Empty }, { x: 2, y: 1, value: Player.Empty }, { x: 3, y: 1, value: Player.Empty }, { x: 4, y: 1, value: Player.Empty },
            { x: 0, y: 2, value: Player.Empty }, { x: 1, y: 2, value: Player.Empty }, { x: 2, y: 2, value: Player.Empty }, { x: 3, y: 2, value: Player.Empty }, { x: 4, y: 2, value: Player.Empty }
        ];
        const result = initCheckerBoard(3, 5);
        expect(result).toEqual(expected);
    });
});