const Board = require("../src/board");

describe("board spec", () => {
    const allTrue = [
        [true, true, true, true, true],
        [true, true, true, true, true],
        [true, true, true, true, true],
        [true, true, true, true, true],
        [true, true, true, true, true],
    ];

    const invalidPoints = [
        [-1,0], [5,0], [0, -1], [0, 5]
    ];

    const validPoints = [
        [0,0], [0,4], [4,4], [4,0]
    ];

    it("should start all true", () => {
        const board = new Board();
        expect(board.board).toMatchObject(allTrue);
    });

    it("should map points so the origin 0,0 is south west", () => {
        const board = new Board();
        const adjustedPoint = board.adjustPoints(0,0);
        expect(adjustedPoint).toMatchObject({adjustedX: 4, adjustedY: 4});
    });

    invalidPoints.forEach(point => {
        it(`should return false for ${point}`, () => {
            const [x,y] = point;
            const board = new Board();
            expect(board.get(x,y)).toBeFalsy();
        });
        it(`should not place for ${point}`, () => {
            const [x,y] = point;
            const board = new Board();
            expect(board.place(x,y, "N")).toBeFalsy();
        });
    });
    validPoints.forEach(point => {
        it(`should return true for ${point}`, () => {
            const [x,y] = point;
            const board = new Board();
            expect(board.get(x,y)).toBeTruthy();
        });
        it(`should place for ${point}`, () => {
            const [x,y] = point;
            const board = new Board();
            expect(board.place(x,y, "N")).toBeTruthy();
            expect(board.board).not.toMatchObject(allTrue);
            board.reset();
            expect(board.board).toMatchObject(allTrue);
        });
    });
});
