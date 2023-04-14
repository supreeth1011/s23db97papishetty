var game = require('../models/game');
// List of all game
exports.game_list = async function(req, res) {
    try{
    game = await game.find();
    res.send(game);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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
// VIEWS
// Handle a show all view
exports.game_view_all_Page = async function(req, res) {
    try{
    thegame = await game.find();
    res.render('game', { title: 'game Search Results', results: thegame });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };