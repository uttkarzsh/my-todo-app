import { todo } from "./../model/todo.js";

export const getAllTasks = async (req,res) => {
    const todos = await todo.find();
    res.json(todos);
}

export const addTask = async (req,res) => {
    await todo.create({description: req.body.description});
    res.json({msg: "added"});
}
export const updateTask = async (req,res) => {
    const task = await todo.findById(req.params.id);
    task.completed = !task.completed;
    const updatedTask = await task.save();
    res.json(updatedTask);
}

export const deleteTask = async (req,res) => {
    await todo.findByIdAndDelete(req.params.id);
    res.json({msg: "deleted"});
}