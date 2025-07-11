import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./model/todo.js";
import router from "./routes/todoRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/todo", router);
app.use(cors());

app.get("/", (req,res) => {
    res.send("hhiiii");
})

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
};

startServer();

