module.exports = {
    create: (req, res) => {
        res.render('users/create');
    },
    store: (req, res) => {
        res.send(req.body);
    },
}