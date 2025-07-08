import express from "express";
import { getAllTasks, addTask, updateTask, deleteTask } from "../controllers/todoController.js";
const router = express.Router();

router.route("/").get(getAllTasks).post(addTask);
router.route("/:id").patch(updateTask).delete(deleteTask);

export default router;