import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
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