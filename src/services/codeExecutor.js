// src/services/codeExecutor.js
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// Create a temp folder if not exists
const tempDir = path.join(__dirname, "../../temp");
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
}

const runCodeInDocker = (language, code) => {
    console.log("inside controller");

    return new Promise((resolve, reject) => {
        const filename = `${uuidv4()}.${language === "python" ? "py" : "js"}`;
        const filepath = path.join(tempDir, filename);
        fs.writeFileSync(filepath, code);

        // Choose Docker image
        const image = language === "python" ? "python" : "node";

        console.log(filename);

        const command = `
      docker run --rm -v ${filepath}:/app/${filename} ${image} \
      ${
          language === "python"
              ? `python3 /app/${filename}`
              : `node /app/${filename}`
      }
    `;

        console.log("before execution");
        exec(command, (err, stdout, stderr) => {
            fs.unlinkSync(filepath); // delete file after execution

            if (err) {
                return reject(stderr || "Unknown error");
            }
            resolve(stdout);
        });
    });
};

module.exports = { runCodeInDocker };
