var express = require('express');
const game_controlers= require('../controllers/game');
var router = express.Router();

/* GET games */
router.get('/', game_controlers.game_view_all_Page );
module.exports = router;
