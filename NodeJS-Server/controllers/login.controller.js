class Controller {
    index(req, res) {
        res.render("pages/login");
    }
}

module.exports = new Controller();
