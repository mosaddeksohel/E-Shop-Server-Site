const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)

  .then(() => console.log("DB connection is Successful"))
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Backend Server is running on port ${port}!`)
);
