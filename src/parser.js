const fs = require("fs");
const Robot = require("./robot");
const Direction = require("./direction");

const matchers = new Map([
    ["place", /place\s+(\d)\s+(\d)\s+([A-z]+)/i],
    ["move", /move/i],
    ["left", /left/i],
    ["right", /right/i],
    ["report", /report/i]
]);

function runRobotRun(lines) {
    let placed = false;
    let robot = new Robot();
    lines.forEach(line => {
        console.log("executing ", line);
        if(!placed && !matchers.get("place").test(line)) {
            console.warn("tried to make a command before placing the robot on the board");
            return false;
        }
        matchers.forEach((value, key) => {
            if (value.test(line)) {
                switch(key) {
                case "place": {
                    console.log(matchers.get("place").exec(line).shift());
                    const match = matchers.get("place").exec(line);
                    match.shift();
                    const [X, Y, DIRECTION] = match;
                    console.log("place direction", DIRECTION);
                    const d = new Direction(X,Y, DIRECTION);
                    if(robot.place(d)) {
                        placed = true;
                    }
                    return true;
                }
                case "move": return robot.move();
                case "left" : return robot.left();
                case "right": return robot.right();
                case "report": return robot.report();
                default:
                    throw new Error("unrecognized command");
                } 
            }
        });
    });
    return robot;
} 

module.exports = function(file) {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(file, "utf8", function(err, contents) {
                if (err) return reject(err);
                if (!contents) return reject(new Error("File had no contents"));
                if (!matchers.get("place").test(contents)) {
                    return reject("no place command found in file");
                }
                const lines = contents.split(/\n/g);
                const robo = runRobotRun(lines);
                if (!robo) return reject("oh no something went wrong with your robot");
                resolve(robo);
            });
        } catch(e) {
            reject(e);
        }
    });
};
