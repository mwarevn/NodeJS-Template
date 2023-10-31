const express = require("express");
const app = express();
const route = require("./routes");
const mongoose = require("mongoose");
const partials = require("express-partials");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());
app.use(express.static(__dirname + "public"));

app.use(express.urlencoded({ extended: true }));
app.use(partials());
app.listen(3000, () => {
    console.log("Application started and Listening on port 3000 ...");
    mongoose
        .connect("your_mongodb_server_url")
        .then(() => console.log("Connected to mongodb!"))
        .catch(() => console.log("Can not connect to mongodb!"));
});

route(app);
