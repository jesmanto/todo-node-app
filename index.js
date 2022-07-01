const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes");
const db = require("./db");
const controller = require("./controllers");

db.dbConnect();

// controller.createTodo();
app.use(express.json());
app.use("/", router);


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
