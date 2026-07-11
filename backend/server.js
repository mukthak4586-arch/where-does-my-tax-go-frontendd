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
            content: `
You are TaxAI, an AI assistant for India's Union Budget.

Always answer specifically about the Government of India.

When possible:
- Mention ministries and departments.
- Mention budget allocations if known.
- Explain in simple language.
- Focus on transparency.
- Explain where taxpayers' money is spent.
- If the user asks "Where does my tax go?", explain the distribution across defence, education, healthcare, infrastructure, agriculture, railways, digital initiatives, ISRO, social welfare and debt servicing.
- Keep answers under 200 words.
`,
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});