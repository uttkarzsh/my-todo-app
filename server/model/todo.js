import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI)
        .then(console.log("Database connected"))
        .catch((error) =>{
            console.log(error);
        });
}

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required:true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

export const todo = new mongoose.model("Todo", todoSchema);