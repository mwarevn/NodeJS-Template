const login = require("./login.route");

function route(app) {
    app.get("/", (req, res, next) => {
        res.render("pages/index");
    });

    app.use("/login", login);
}

module.exports = route;
