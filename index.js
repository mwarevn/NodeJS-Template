const express = require("express");
const app = express();
const fs = require('fs')
const path = require('path')
const hbs = require('express-handlebars')

app.engine('hbs', hbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.json());
app.use(express.static(__dirname + '/src'))
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
  res.render('home')
});
