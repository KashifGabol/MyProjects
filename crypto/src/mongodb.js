const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/crypto")
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.log("Failed to connect", err);  // Log the actual error
});

const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  // Corrected from 'require' to 'required'
    },
    password: {
        type: String,
        required: true  // Corrected from 'require' to 'required'
    }
});

const collection = new mongoose.model("User", logInSchema);  // Use 'User' as the model name

module.exports = collection;
