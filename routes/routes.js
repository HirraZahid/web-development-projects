// routes/routes.js

const express = require("express");
const router = express.Router();
const axios = require("axios");

// Mock user data (replace with your actual user data structure)
let users = [
  { id: 1, email: "user1@example.com", password: "password1", name: "User One" },
  { id: 2, email: "user2@example.com", password: "password2", name: "User Two" },
];

// GET route to render login form
router.get("/login", (req, res) => {
  res.render("login", { title: "Login" }); // Render login form without message
});

// POST route to handle login form submission
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Simulate API call to validate login (replace with your actual API call)
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      // Mock user session data (replace with actual implementation)
      req.session.user = user;

      // Redirect to dashboard or another authenticated route
      res.redirect("/dashboard");
    } else {
      // If login fails, render login form again
      res.render("login", { title: "Login" });
    }
  } catch (error) {
    console.error("Error logging in:", error.message);
    // Handle error as needed
    res.render("login", { title: "Login" });
  }
});

module.exports = router;
