import axios from "axios";

export async function askMesh(question) {
  try {
    const response = await axios.post(
      "http://localhost:5000/chat",
      {
        question,
      }
    );

    return response.data.answer;
  } catch (error) {
    console.error(error);
    return "Unable to connect to backend.";
  }
}