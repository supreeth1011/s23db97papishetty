var game = require('../models/game');
// List of all games
exports.game_list = function(req, res) {
res.send('NOT IMPLEMENTED: game list');
};
// for a specific game.
exports.game_detail = function(req, res) {
res.send('NOT IMPLEMENTED: game detail: ' + req.params.id);
};
// Handle game create on POST.
exports.game_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: game create POST');
};
// Handle game delete form on DELETE.
exports.game_delete = function(req, res) {
res.send('NOT IMPLEMENTED: game delete DELETE ' + req.params.id);
};
// Handle game update form on PUT.
exports.game_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: game update PUT' + req.params.id);
};
