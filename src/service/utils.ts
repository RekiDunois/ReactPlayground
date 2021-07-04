import { Player, Point } from "../component/Game";

export function initCheckerBoard(row: number, col: number): Array<Point> {
    let result: Array<Point> = [];
    let singleRow: Array<Point> = [];
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            singleRow[c] = { x: c, y: r, value: Player.Empty }
        }
        result.push(...singleRow);
        singleRow = [];
    }
    return result;
}

export function copyPoints(Points: Point[]): Point[] {
    return Points.slice();
}