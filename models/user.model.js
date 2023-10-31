const mongoose = require("mongoose");

const User = new mongoose.Schema({});

const model = mongoose.model("user", User);

module.exports = model;
