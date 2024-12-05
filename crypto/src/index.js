const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb"); // Ensure this is correctly set up

// Correct template path
const templatePath = path.join(__dirname, '../templates');

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);

app.get("/", (req, res) => {
    res.render("login"); // Corrected res.render usage
});

app.get("/signup", (req, res) => {
    res.render("signup"); // Corrected the path to /signup
});

app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password
    };
    await collection.insertMany([data]); // Ensure MongoDB is correctly set up
    res.render("home");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
