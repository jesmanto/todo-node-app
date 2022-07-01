const mongoose = require("mongoose");
require('dotenv').config()
const {MONGO_URI} = process.env;

console.log(process.env)

exports.dbConnect = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("connected to mongeDB..."))
    .catch((err) => console.log("not connected to mongoDB <<<", err));
};

exports.todoSchema = new mongoose.Schema({
  title: String,
  desc: { type: String, default: "" },
  priority: { type: String, default: "" },
  completed: { type: Boolean, default: false },
  time: { type: Date, default: Date.now },
});
