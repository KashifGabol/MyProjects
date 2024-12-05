const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb"); // Ensure this is correctly set up

// Correct template path
const templatePath = path.join(__dirname, '../templates');  // Make sure 'templates' folder is at the correct location

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);

app.get("/", (req, res) => {
    res.render("login"); // Ensure login.hbs exists in the 'templates' folder
});

app.get("/signup", (req, res) => {
    res.render("signup"); // Ensure signup.hbs exists in the 'templates' folder
});

app.post("/signup", async (req, res) => {
    const { fullname, email, password, confirmPassword } = req.body;
  
    // Simple validation
    if (password !== confirmPassword) {
      return res.render("signup", { error: "Passwords do not match" });
    }
  
    const data = {
      name: fullname,
      email: email,
      password: password,  // Consider hashing the password before saving it
    };
  
    try {
      await collection.insertMany([data]);
      res.render("home");
    } catch (err) {
      res.render("signup", { error: "Failed to sign up. Please try again." });
    }
  });
  

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
