import express from "express";
import expressApp from "./services/expressService";

import { config } from "dotenv";
config();
const startServer = async () => {
  const app = express();
  const PORT = process.env.PORT || 4000;
  await expressApp(app);
  app.listen(PORT, () => {
    console.clear();
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
