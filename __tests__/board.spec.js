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
        [-1,0]
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
});
