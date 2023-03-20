// Required to resolve environment variables
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Imports from other Files
const connectDB = require("./config/dbConn");
const corsOptions = require("./config/corsOption");
const User = require("./models/User");
const PORT = process.env.PORT || 4000;

// Secrets
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "lajlsjldalbflalfjlajdlajldjlasda";

// const
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

// First Try to connect to DB and then listen to app
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

// Routes
// Registration Route
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    console.log("Before call backend");
    const userDoc = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    console.log("Reached Here");
    res.json(userDoc);
  } catch (err) {
    res.status(422).json(err);
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await User.findOne({ email });
    console.log(userDoc);
    if (userDoc) {
      console.log(userDoc);
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (passOk) {
        jwt.sign(
          { email: userDoc.email, id: userDoc._id },
          jwtSecret,
          {},
          (err, token) => {
            if (err) throw err;
            res.cookie("token", token).json(userDoc);
          }
        );
      }
    } else {
      res.status(422).json("Password not Ok");
    }
  } catch (err) {
    res.status(422).json(err);
  }
});

// profile
app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { username, email, _id } = await User.findById(userData.id);
      console.log(username);
      res.json({ username, email, _id });
    });
  } else {
    res.json(null);
  }
});
