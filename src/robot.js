const Board = require("./board");

class Robot {
    constructor(position) {
        this.board = new Board();
        this._position = null;
        if (position) {
            this.place(position);
        }
    }
    get position() {
        if(!this._position) {
            console.warn("Report: Robot not placed yet");
        }
        return this._position;
    }
    set position(pos) {
        this._position = pos;
    }
    place({x, y, direction}) {
        if(!this.board.place(x, y, direction)) {
            return console.warn("Illegal Move X", x, "Y", y);
        }
        this.position = {x, y, direction};
    }
    report() {
        if(!this.position) {
            return false;
        }
        const {x, y, direction} = this.position;
        console.log("Report: Robot X", x, "Y", y, "Direction", direction);   
    }
    move() {
        if(!this.position) {
            return false;
        }
    }
    left() {
        if(!this.position) {
            return false;
        }
    }
    right() {
        if(!this.position) {
            return false;
        }
    }
}

module.exports = Robot;
