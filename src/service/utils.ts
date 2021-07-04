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
    let result: Point[] = [];
    Points.forEach(p => {
        result.push({
            x: p.x,
            y: p.y,
            value: p.value
        });
    });
    return result;
}

export function copyObjects<T>(objects: T[]): T[] {
    type TupleToObject<K extends any[]> = { [P in keyof K]: K[P] }
    let change: TupleToObject<T[]> = objects;
    return change;
}