const Direction = require("../src/direction");

describe("Directions should turn", () => {
    const cardinals = ["NORTH", "SOUTH", "EAST", "WEST"];
    const lefties = {
        NORTH: "WEST",
        SOUTH: "EAST",
        EAST: "NORTH",
        WEST: "SOUTH"
    };
    const righties = {
        NORTH: "EAST",
        SOUTH: "WEST",
        EAST: "SOUTH",
        WEST: "NORTH"
    };
    cardinals.forEach(cardinal => {
        it(`left from ${cardinal}`, () => {
            const startingPoint = new Direction(1,4, cardinal);
            startingPoint.left();
            expect(startingPoint.direction).not.toMatch(cardinal);
            expect(startingPoint.direction).toMatch(lefties[cardinal]);
        });
        it(`right from ${cardinal}`, () => {
            const startingPoint = new Direction(1,4, cardinal);
            startingPoint.right();
            expect(startingPoint.direction).not.toMatch(cardinal);
            expect(startingPoint.direction).toMatch(righties[cardinal]);
        });
    });
});
