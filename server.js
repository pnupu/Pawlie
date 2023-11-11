require('dotenv').config(); // Add this line at the top of your file

const express = require('express');
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Configure OpenAI API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // This will now use the value from .env file
});
const openai = new OpenAIApi(configuration);

app.post('/openai', async (req, res) => {
  try {
    if (!req.body.prompt) {
      return res.status(400).send('No prompt provided');
    }

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: req.body.prompt,
      max_tokens: 150
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
