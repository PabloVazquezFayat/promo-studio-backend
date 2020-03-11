const express = require('express');
const router = express.Router();
const basicController = require('../controllers/basic-controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({message: 'Promo Studio API is now live!'});
});

router.get('/basic', basicController);

module.exports = router;
