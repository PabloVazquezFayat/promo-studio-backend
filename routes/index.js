const express = require('express');
const router = express.Router();

const offerCreateController = require('../controllers/offer-controllers/offer-create');
const offerReadController = require('../controllers/offer-controllers/offer-read');
const offerUpdateController = require('../controllers/offer-controllers/offer-update');
const offerDeleteController = require('../controllers/offer-controllers/offer-delete');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({message: 'Welcome to Promo Studio'});
});

//POST CREATE NEW OFFER
router.post('/offer/create',  offerCreateController);

//GET READ ALL OFFERS
router.post('/offer/read', offerReadController);

//POST UPDATE OFFER
router.post('/offer/update', offerUpdateController);

//POST DELETE OFFER
router.get('/offer.delete', offerDeleteController);


module.exports = router;
