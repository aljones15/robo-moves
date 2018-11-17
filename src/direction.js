const NORTH = "NORTH";
const SOUTH = "SOUTH";
const EAST = "EAST";
const WEST = "WEST";

class Direction {
    constructor(x, y, direction) {
        if (!x) {
            throw new Error("X must be defined ", x);
        }
        if (!y) {
            throw new Error("Y must be defined ", y);
        }
        if (!direction) {
            throw new Error("Direction must be defined ", direction);
        }
        const possibleDirections = [NORTH, SOUTH, EAST, WEST, true];
        if (!possibleDirections.includes(direction)){
            throw new Error("Direction must be one of ", possibleDirections, direction);
        }
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.NORTH = NORTH;
        this.SOUTH = SOUTH;
        this.EAST = EAST;
        this.WEST = WEST;
    }
    next(direction = this.direction) {
        switch(direction) {
        case NORTH:
            return new Direction(this.x, this.y + 1, direction);
        case SOUTH:
            return new Direction(this.x, this.y - 1, direction);
        case EAST:
            return new Direction(this.x -1, this.y, direction);
        case WEST:
            return new Direction(this.x + 1, this.y, direction);
        default:
            return this;
        }
    }
}

module.exports = Direction;
