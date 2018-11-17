var fs = require("fs");

module.exports = function(file) {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(file, "utf8", function(err, contents) {
                if (err) return reject(err);
                resolve(console.log(contents));
            });
        } catch(e) {
            reject(e);
        }
    });
};
