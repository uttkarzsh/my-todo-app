import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./model/todo.js";
import router from "./routes/todoRoutes.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/todo", router);

app.get("/", (req,res) => {
    res.send("hhiiii");
})

app.listen(port,() => {
    console.log(`Server running on http://localhost:${port}`);
})

connectDB();