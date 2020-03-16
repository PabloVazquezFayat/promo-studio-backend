const express = require('express');
const router = express.Router();

const offerCreateController = require('../controllers/offer-controllers/offer-create');
const offerReadController = require('../controllers/offer-controllers/offer-read');
const offerReadSingleController = require('../controllers/offer-controllers/offer-read-single');
const offerUpdateController = require('../controllers/offer-controllers/offer-update');
const offerDeleteController = require('../controllers/offer-controllers/offer-delete');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({message: 'Welcome to Promo Studio'});
});

//POST CREATE NEW OFFER
router.post('/offer/create',  offerCreateController);

//GET READ ALL OFFERS
router.get('/offer/read', offerReadController);

//GET READ SINGLE OFFER
router.get('/offer/read/:id', offerReadSingleController);

//POST UPDATE OFFER
router.post('/offer/update', offerUpdateController);

//POST DELETE OFFER
router.delete('/offer/delete', offerDeleteController);


module.exports = router;
