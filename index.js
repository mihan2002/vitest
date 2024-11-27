const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const itemRoutes = require("./routes/itemRoutes");
require("dotenv").config();

const MDB = process.env.MONGO_URI;

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/items", itemRoutes);

mongoose
  .connect(MDB)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen({ port: 5000 }, () => {
      console.log("REST API running on http://localhost:5000/");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
