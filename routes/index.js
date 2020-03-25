const express = require('express');
const router = express.Router();

const offerCreateController = require('../controllers/offer-controllers/offer-create');
const offerReadController = require('../controllers/offer-controllers/offer-read');
const offerReadSingleController = require('../controllers/offer-controllers/offer-read-single');
const offerUpdateController = require('../controllers/offer-controllers/offer-update');
const offerDeleteController = require('../controllers/offer-controllers/offer-delete');

const componentsBuilderReadController = require('../controllers/components-builder-controllers/builder-read');

const experienceCreate = require('../controllers/experience-controller/experience-create');
const experienceRead = require('../controllers/experience-controller/experience-read');
const experienceReadSingle = require('../controllers/experience-controller/experience-read-single');
const experienceUpdate = require('../controllers/experience-controller/experience-update');
const experienceDelete = require('../controllers/experience-controller/experience-delete');

const userCreate = require('../controllers/user-controller/user-create');
const userRead = require('../controllers/user-controller/user-read');
const userUpdate = require('../controllers/user-controller/user-update');
const userDelete = require('../controllers/user-controller/user-delete');
const userAuth = require('../controllers/user-controller/user-auth');
const userLogin = require('../controllers/user-controller/user-login');

const marketCreate = require('../controllers/market-controller/market-create');
const marketRead = require('../controllers/market-controller/market-read');
const marketReadSingle =require('../controllers/market-controller/market-read-single');
const marketUpdate = require('../controllers/market-controller/market-update');
const marketDelete = require('../controllers/market-controller/market-delete');

const portCreate = require('../controllers/port-controller/port-create');
const portRead = require('../controllers/port-controller/port-read');
const portReadSingle =require('../controllers/port-controller/port-read-single');
const portUpdate = require('../controllers/port-controller/port-update');
const portDelete = require('../controllers/port-controller/port-delete');

const shipCreate = require('../controllers/ship-controller/ship-create');
const shipRead = require('../controllers/ship-controller/ship-read');
const shipReadSingle =require('../controllers/ship-controller/ship-read-single');
const shipUpdate = require('../controllers/ship-controller/ship-update');
const shipDelete = require('../controllers/ship-controller/ship-delete');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({message: 'Welcome to Promo Studio'});
});


/**
 * OFFER ENDPOINTS
 */
//POST CREATE NEW OFFER
router.post('/offer/create', userAuth, offerCreateController);

//GET READ ALL OFFERS
router.get('/offer/read', userAuth, offerReadController);

//GET READ SINGLE OFFER
router.get('/offer/read/:id', userAuth, offerReadSingleController);

//POST UPDATE OFFER
router.post('/offer/update', userAuth, offerUpdateController);

//POST DELETE OFFER
router.delete('/offer/delete', userAuth, offerDeleteController);



//GET EXPERIENCE BUILDER
router.get('/components/builder', userAuth, componentsBuilderReadController);


/**
 * EXPERIENCE ENDPOINTS
 */
//GET EXPERIECE CREATE
router.post('/experience/create', userAuth, experienceCreate);

//GET EXPERIECE READ ALL
router.get('/experience/read', userAuth, experienceRead);

//GET EXPERIECE READ SINGLE
router.get('/experience/read/:id', userAuth, experienceReadSingle);

//GET EXPERIECE UPDATE
router.post('/experience/update', userAuth, experienceUpdate);

//GET EXPERIECE DELETE
router.post('/experience/delete', userAuth, experienceDelete);


/**
 * USER ENDPOINTS
 */
//POST CREATE NEW USER
router.post('/user/create', userAuth, userCreate);

//GET ALL USERS
router.get('/user/read', userAuth, userRead);

//POST CREATE UPDATE USER
router.post('/user/update', userAuth, userUpdate);

//POST DELETE USER
router.delete('/user/delete', userAuth, userDelete);

//GET LOGIN USER
router.post('/user/login', userLogin);


/**
 * MARKET ENDPOINTS
 */
//POST CREATE NEW MARKET
router.post('/market/create', userAuth, marketCreate);

//GET READ MARKETS
router.get('/market/read', userAuth, marketRead);

//GET READ SINGLE MARKET
router.get('/market/read/:id', userAuth, marketReadSingle);

//POST UpDATE SINGLE MARKET
router.post('/market/update', userAuth, marketUpdate);

//POST DELETE SINGLE MARKET
router.delete('/market/delete', userAuth, marketDelete);


/**
 * PORT ENDPOINTS
 */
//POST CREATE NEW PORT
router.post('/port/create', userAuth, portCreate);

//GET READ PORTS
router.get('/port/read', userAuth, portRead);

//GET READ SINGLE PORT
router.get('/port/read/:id', userAuth, portReadSingle);

//POST UPDATE SINGLE PORT
router.post('/port/update', userAuth, portUpdate);

//POST DELETE SINGLE PORT
router.delete('/port/delete', userAuth, portDelete);


/**
 * SHIP ENDPOINTS
 */
//POST CREATE NEW SHIP
router.post('/ship/create', userAuth, shipCreate);

//GET READ SHIPS
router.get('/ship/read', userAuth, shipRead);

//GET READ SINGLE SHIP
router.get('/ship/read/:id', userAuth, shipReadSingle);

//POST UPDATE SINGLE SHIP
router.post('/ship/update', userAuth, shipUpdate);

//POST DELETE SINGLE SHIP
router.delete('/ship/delete', userAuth, shipDelete);


module.exports = router;
