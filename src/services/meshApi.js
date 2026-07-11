import axios from "axios";

const API = "https://tax-ai-backend-i8h5.onrender.com/chat";

export async function askMesh(question) {
  try {
    const response = await axios.post(API, {
      question,
    });

    return response.data.answer;
  } catch (err) {
    console.error(err);
    return "Unable to connect to AI server.";
  }
}