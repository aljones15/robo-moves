/**
 * @class Board
 * @description the board inits to all true
 * this means any falsy value indicates out of bounds
 */
class Board {
    constructor() {
        this.board = [
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
        ];
    }
    /**
     * @method adjustPoints
     * @param {Number} x
     * @param {Number} y
     * @description  
     * because javascript uses a 0 index
     * if 0,0 is south west that means 0,0 corresponds to board[4][4]
     */
    adjustPoints(x,y) {
        const adjustedX = 4 - x;
        const adjustedY = 4 - y;
        return { adjustedX, adjustedY};
    }
    /**
     * @method get
     * @param {Number} x 
     * @param {Number] y
     * @description gets an x y value
     * we also have to find the point Y first i.e. vertical then X horizontal
     */  
    get(x,y) {
        const { adjustedX, adjustedY } = this.adjustPoints(x,y );
        if (!this.board[adjustedY]) return false;
        return this.board[adjustedY][adjustedX];
    }
    place(x, y, direction){
        const place = this.get(x,y);
        if (!place) return false;
        const { adjustedX, adjustedY } = this.adjustPoints(x,y );
        this.board[adjustedY][adjustedX] = direction;
        return this.board; 
    }
    reset() {
        this.board = this.board.map(row => row.map(() => true));
    } 
}

exports.default = Board;
