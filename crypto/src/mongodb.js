import { connect, Schema, model } from "mongoose";

connect("mongodb://localhost:27017/crypto")
.then(() => {
    console.log("mongoDB connected");
})
.catch((err) => {
    console.log("Failed to connect", err);  // Log the actual error
});

const logInSchema = new Schema({
    name: {
        type: String,
        required: true  // Corrected from 'require' to 'required'
    },
    password: {
        type: String,
        required: true  // Corrected from 'require' to 'required'
    }
});

const collection = new model("User", logInSchema);  // Use 'User' as the model name

export default collection;
