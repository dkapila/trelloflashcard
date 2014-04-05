// GET home page.
exports.index = function(req, res) {
    res.render('index', {
        trello_app_key: req.app.get('conf').trello_app_key,
        title: 'Trello Flash Card'
    });
}
