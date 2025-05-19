// src/controllers/code.controller.js
const { runCodeInDocker } = require("../services/codeExecutor");

const executeCode = async (req, res) => {
    console.log("inside route");

    const { language, code } = req.body;

    if (!language || !code) {
        return res
            .status(400)
            .json({ error: "Language and code are required." });
    }

    try {
        const result = await runCodeInDocker(language, code);
        res.json({ output: result });
    } catch (error) {
        console.error("Execution error:", error);
        res.status(500).json({ error: "Code execution failed." });
    }
};

module.exports = { executeCode };
