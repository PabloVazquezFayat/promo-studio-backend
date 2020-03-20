const express = require('express');
const router = express.Router();

const offerCreateController = require('../controllers/offer-controllers/offer-create');
const offerReadController = require('../controllers/offer-controllers/offer-read');
const offerReadSingleController = require('../controllers/offer-controllers/offer-read-single');
const offerUpdateController = require('../controllers/offer-controllers/offer-update');
const offerDeleteController = require('../controllers/offer-controllers/offer-delete');

const componentsBuilderReadController = require('../controllers/components-builder-controllers/builder-read');

const registerUser = require('../controllers/auth-controller/register-user-contoller');
const authenticateUser = require('../controllers/auth-controller/authenticate-user-controller');
const loginUser = require('../controllers/auth-controller/login-user-controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({message: 'Welcome to Promo Studio'});
});

//POST CREATE NEW OFFER
router.post('/offer/create', authenticateUser, offerCreateController);

//GET READ ALL OFFERS
router.get('/offer/read', authenticateUser, offerReadController);

//GET READ SINGLE OFFER
router.get('/offer/read/:id', authenticateUser, offerReadSingleController);

//POST UPDATE OFFER
router.post('/offer/update', authenticateUser, offerUpdateController);

//POST DELETE OFFER
router.delete('/offer/delete', authenticateUser, offerDeleteController);

//GET EXPERIENCE BUILDER
router.get('/components/builder', authenticateUser, componentsBuilderReadController);

//POST CREATE NEW USER
router.post('/user/create', authenticateUser, registerUser);

//GET LOGIN USER 
router.post('/user/login', loginUser);


module.exports = router;
