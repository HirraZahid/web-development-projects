// index.js

require("dotenv").config();
const express = require("express");
const session = require("express-session");
const ejsLayouts = require("express-ejs-layouts");
const routes = require("./routes/routes");
const axios = require("axios"); // Import Axios for making HTTP requests

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "my secret key",
    resave: false,
    saveUninitialized: true,
  })
);

// Set up EJS
app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(express.static("public"));

// Routes
app.use("/", routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
