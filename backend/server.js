import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const { question } = req.body;

    const response = await axios.post(
      "https://api.meshapi.ai/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You explain India's Union Budget in simple language.",
          },
          {
            role: "user",
            content: question,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.MESH_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({
      answer: response.data.choices[0].message.content,
    });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({
      answer: "Mesh AI request failed.",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});