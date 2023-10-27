const express = require('express');
const app = express();

app.use(express.static('public'));

// Set up middleware to handle CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.listen(8000, () => {
    console.log("Server is active");
});

const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const chapGPT = async (prompt) => {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "assistant", content: prompt }],
    });
    return response["data"]["choices"][0]["message"]["content"];
};

app.get('/', async (req, res) => {
    const responseContent = await chapGPT("Make a short schedule for tommorow for a student. Do not say any anything except the schedule. Make it brief but useable. Also never make new lines.");
    res.json(responseContent);
});
