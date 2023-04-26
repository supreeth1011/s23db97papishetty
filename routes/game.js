var express = require('express');
const game_controlers= require('../controllers/game');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 


/* GET games */
router.get('/', game_controlers.game_view_all_Page );

/* GET detail game page */
router.get('/detail', game_controlers.game_view_one_Page);

/* GET create game page */
router.get('/create',secured, game_controlers.game_create_Page);

/* GET create update page */
router.get('/update',secured, game_controlers.game_update_Page);

/* GET delete game page */
router.get('/delete',secured, game_controlers.game_delete_Page);

module.exports = router;
