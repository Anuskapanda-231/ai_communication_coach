import axios from "axios";

const API_URL = "http://localhost:5000/api"; 

const aiService = {
  sendMessage: async (message) => {
    try {
      const response = await axios.post(`${API_URL}/chat`, { message });
      return response.data; 
    } catch (error) {
      console.error("Connection Error:", error);
      return "Coach: Check your server connection.";
    }
  },
};

export default aiService;