import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    input:{type:String, requird:true}
},{timestamps:true})

const Todo = mongoose.models.todo || mongoose.model("todo",TodoSchema)

export default Todo