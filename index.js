const parser = require("./src/parser");

const [file] = process.argv.slice(2);
if (!file) {
    throw new Error("No File specified please add it after npm start");
}

parser(file);
