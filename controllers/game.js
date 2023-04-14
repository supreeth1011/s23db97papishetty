var game = require('../models/game');
// List of all game
exports.game_list = async function(req, res) {
    try{
    thegame = await game.find();
    res.send(thegame);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// for a specific game.

exports.game_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await game.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    
// Handle game create on POST.
exports.game_create_post = async function(req, res) {
console.log(req.body)
let document = new game();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"game_type":"goat", "cost":12, "size":"large"}
document.game_name = req.body.game_name;
document.version = req.body.version;
document.price = req.body.price;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// Handle game delete form on DELETE.
exports.game_delete = function(req, res) {
res.send('NOT IMPLEMENTED: game delete DELETE ' + req.params.id);
};
//Handle game update form on PUT.
exports.game_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await game.findById(req.params.id)
        // Do updates of properties
        if (req.body.game_name)
            toUpdate.game_name = req.body.game_name;
        if (req.body.version) toUpdate.version = req.body.version;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
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