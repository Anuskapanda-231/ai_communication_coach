import express from 'express';
import cors from 'cors';
import chatRoutes from './routes/chatRoutes.js'; // <-- import your router

const app = express();

app.use(cors());
app.use(express.json());

// Use the router instead of hardcoding the route
app.use('/api/chat', chatRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Coach Server running on http://localhost:${PORT}`);
});
