const Robot = require("../src/robot");
const Direction = require("../src/direction");

describe("should move", () => {

    it("should move 1 space in the direction it is facing", () => {
        const startingPoint = new Direction(1,1, "NORTH");
        const robot = new Robot(startingPoint);
        const endingPoint = new Direction(1,2, "NORTH");
        expect(robot.position).toMatchObject(startingPoint);
        robot.move(); 
        expect(robot.position).not.toMatchObject(startingPoint);
        expect(robot.position.y).toEqual(endingPoint.y);
    });

    it("should never fall", () => {
        const startingPoint = new Direction(1,4, "NORTH");
        const robot = new Robot(startingPoint);
        expect(robot.position).toMatchObject(startingPoint);
        robot.move(); 
        expect(robot.position).toMatchObject(startingPoint);
    });

    it("unless there is no position", () => {
        const robot = new Robot();
        robot.place = jest.fn();
        robot.move();
        expect(robot.place).not.toHaveBeenCalled();
    });
});

describe("should turn", () => {
    const cardinals = ["NORTH", "SOUTH", "EAST", "WEST"];
    cardinals.forEach(cardinal => {
        it(`left from ${cardinal}`, () => {
            const startingPoint = new Direction(1,4, cardinal);
            const robot = new Robot(startingPoint);
            robot.left();
            expect(robot.position.direction).not.toMatch(cardinal);
        });
        it(`right from ${cardinal}`, () => {
            const startingPoint = new Direction(1,4, cardinal);
            const robot = new Robot(startingPoint);
            robot.right();
            expect(robot.position.direction).not.toMatch(cardinal);
        });
    });
});
