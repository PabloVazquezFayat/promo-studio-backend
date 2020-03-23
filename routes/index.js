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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({message: 'Welcome to Promo Studio'});
});



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


module.exports = router;
