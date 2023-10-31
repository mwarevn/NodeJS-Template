const login = require("./login.route");

function route(app) {
    app.get("/", (req, res, next) => {
        res.render("index");
    });

    app.use("/login", login);
}

module.exports = route;
