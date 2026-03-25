import { generateReply } from "../services/aiService.js";

export const handleChat = async (req, res) => {
  const { message } = req.body;

  const data = await generateReply(message);

  res.json({
    original: message,
    ...data,
  });
};