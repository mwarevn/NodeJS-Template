const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const route = require('./src/routes');

app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.json());
app.use(express.static(__dirname + '/src'));

app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log('Application started and Listening on port 3000 ...');
});

route(app);
