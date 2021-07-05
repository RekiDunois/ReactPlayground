import { Player, Point } from "../../src/component/Game"
import { initCheckerBoard, copyPoints, copyObjects } from "../../src/service/utils";

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
    test("copy points", () => {
        const expected: Array<Point> = [
            { x: 0, y: 0, value: Player.Empty }, { x: 1, y: 0, value: Player.Empty }, { x: 2, y: 0, value: Player.Empty }, { x: 3, y: 0, value: Player.Empty }, { x: 4, y: 0, value: Player.Empty },
            { x: 0, y: 1, value: Player.Empty }, { x: 1, y: 1, value: Player.Empty }, { x: 2, y: 1, value: Player.Empty }, { x: 3, y: 1, value: Player.Empty }, { x: 4, y: 1, value: Player.Empty },
            { x: 0, y: 2, value: Player.Empty }, { x: 1, y: 2, value: Player.Empty }, { x: 2, y: 2, value: Player.Empty }, { x: 3, y: 2, value: Player.Empty }, { x: 4, y: 2, value: Player.Empty }
        ];
        const actual = copyPoints(expected);
        actual[0].value = Player.Cross;
        expect(actual).not.toEqual(expected);
    });
    test("deep copy object array", () => {
        const expected: Array<Point> = [
            { x: 0, y: 0, value: Player.Empty }, { x: 1, y: 0, value: Player.Empty }, { x: 2, y: 0, value: Player.Empty }, { x: 3, y: 0, value: Player.Empty }, { x: 4, y: 0, value: Player.Empty },
            { x: 0, y: 1, value: Player.Empty }, { x: 1, y: 1, value: Player.Empty }, { x: 2, y: 1, value: Player.Empty }, { x: 3, y: 1, value: Player.Empty }, { x: 4, y: 1, value: Player.Empty },
            { x: 0, y: 2, value: Player.Empty }, { x: 1, y: 2, value: Player.Empty }, { x: 2, y: 2, value: Player.Empty }, { x: 3, y: 2, value: Player.Empty }, { x: 4, y: 2, value: Player.Empty }
        ];
        let actual = copyObjects<Point>(expected, (newState) => { newState[0].value = Player.Cross; });
        expect(actual).not.toEqual(expected);
    });
});