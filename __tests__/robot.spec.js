const Robot = require("../src/robot");
const Direction = require("../src/direction");

describe("should move", () => {
    const startingPoint = new Direction(1,1, "NORTH");
    it("should move 1 space in the direction it is facing", () => {
        const robot = new Robot(startingPoint);
        const endingPoint = new Direction(1,2, "NORTH");
        expect(robot.position).toMatchObject(startingPoint);
        robot.move(); 
        expect(robot.position).not.toMatchObject(startingPoint);
        expect(robot.position).toMatchObject(endingPoint);
    });
    it("should never fall", () => {

    });
});

describe("should rotate", () => {

});
