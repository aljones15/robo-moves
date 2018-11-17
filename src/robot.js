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
    place(_direction) {
        const {x, y, direction} = _direction;
        if(!this.board.place(x, y, direction)) {
            console.warn("Illegal Move X ", x, "Y ", y);
            return false;
        }
        this.position = _direction;
        return true;
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
        const next = this.position.next();
        return this.place(next); 
    }
    left() {
        if(!this.position) {
            return false;
        }
        this.position = this._position.left();
    }
    right() {
        if(!this.position) {
            return false;
        }
        this.position = this._position.right();
    }
}

module.exports = Robot;
