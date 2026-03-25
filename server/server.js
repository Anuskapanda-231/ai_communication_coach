import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// --- THE COACHING ROUTE ---
app.post('/api/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;

    // This is where you tell the AI how to behave for your hackathon idea
    // If you are using an API (Gemini/OpenAI), you send this as the 'System Prompt'
    const coachingInstruction = `
      You are an AI Communication Coach. Analyze: "${userMessage}"
      Respond in exactly this format:
      Corrected: [Fix grammar/spelling]
      Improved: [Rewrite for confidence/professionalism]
      Coaching Tip: [One short tip on speaking better]
    `;

    // FOR NOW: Let's send a mock response to test the connection.
    // Replace the logic below with your actual Gemini/OpenAI API call later.
    const mockReply = `Corrected: ${userMessage}
Improved: [ This is a improved version].
Coaching Tip: Use 'this....' instead of 'that....' to sound more professional.`;

    res.json({ reply: mockReply });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Coach Server running on http://localhost:${PORT}`);
});