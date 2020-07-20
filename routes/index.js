const express = require('express');
const router = express.Router();

const promoCreateController = require('../controllers/promo-controller/promo-create');
const promoReadController = require('../controllers/promo-controller/promo-read');
const promoReadSingleController = require('../controllers/promo-controller/promo-read-single');
const promoUpdateController = require('../controllers/promo-controller/promo-update');
const promoDeleteController = require('../controllers/promo-controller/promo-delete');

const componentCreate = require('../controllers/component-controller/component-create');
const componentRead = require('../controllers/component-controller/component-read');
const componentReadSingle = require('../controllers/component-controller/component-read-single');
const componentUpdate = require('../controllers/component-controller/component-update');
const componentDelete = require('../controllers/component-controller/component-delete');

const codeSnippetCreate = require('../controllers/codeSnippet-controller/snippet-create');
const codeSnippetRead = require('../controllers/codeSnippet-controller/snippet-read');
const codeSnippetReadSingle = require('../controllers/codeSnippet-controller/snippet-read-single');
const codeSnippetUpdate = require('../controllers/codeSnippet-controller/snippet-updated');
const codeSnippetDelete = require('../controllers/codeSnippet-controller/snippet-delete');

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
const userPermissions = require('../controllers/user-controller/user-persmissions');

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

const termsCreate = require('../controllers/terms-controller/terms-create');
const termsRead = require('../controllers/terms-controller/terms-read');
const termsUpdate = require('../controllers/terms-controller/terms-update');
const termsDelete = require('../controllers/terms-controller/terms-delete');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({message: 'Welcome to Promo Studio'});
});


/**
 * PROMO ENDPOINTS
 */
//POST CREATE NEW PROMO
router.post('/promo/create', userAuth, userPermissions.createPermission, promoCreateController);

//GET READ ALL PROMOS
router.get('/promo/read', userAuth, userPermissions.readPermission, promoReadController);

//GET READ SINGLE PROMO
router.get('/promo/read/:id', userAuth, userPermissions.readPermission, promoReadSingleController);

//POST UPDATE PROMO
router.post('/promo/update', userAuth, userPermissions.updatePermission, promoUpdateController);

//POST DELETE PROMO
router.delete('/promo/delete', userAuth, userPermissions.deletePermission, promoDeleteController);


/**
 * COMPONENTS ENDPOINTS
 */
//POST COMPONENT CREATE
router.post('/component/create', userAuth, userPermissions.createPermission, componentCreate);

//POST COMPONENT READ
router.get('/component/read', userAuth, userPermissions.readPermission, componentRead);

//POST COMPONENT READ SINGLE
router.get('/component/read/:id', userAuth, userPermissions.readPermission, componentReadSingle);

//POST COMPONENT UPDATE
router.post('/component/update', userAuth, userPermissions.updatePermission, componentUpdate);

//POST COMPONENT DELETE
router.delete('/component/delete', userAuth, userPermissions.deletePermission, componentDelete);


/**
 * CODE-SNIPPET ENDPOINTS
 */
//POST CODE-SNIPPET CREATE
router.post('/snippet/create', userAuth, userPermissions.createPermission, codeSnippetCreate);

//GET CODE-SNIPPET READ
router.get('/snippet/read', userAuth, userPermissions.readPermission, codeSnippetRead);

//GET CODE-SNIPPET READ SINGLE
router.get('/snippet/read/:id', userAuth, userPermissions.readPermission, codeSnippetReadSingle);

//POST CODE-SNIPPET UPDATE
router.post('/snippet/update', userAuth, userPermissions.updatePermission, codeSnippetUpdate);

//DELETE CODE-SNIPPET DELETE
router.delete('/snippet/delete', userAuth, userPermissions.deletePermission, codeSnippetDelete);

/**
 * EXPERIENCE ENDPOINTS
 */
//POST EXPERIECE CREATE
router.post('/experience/create', userAuth, userPermissions.createPermission, experienceCreate);

//GET EXPERIECE READ ALL
router.get('/experience/read', userAuth, userPermissions.readPermission, experienceRead);

//GET EXPERIECE READ SINGLE
router.get('/experience/read/:id', userAuth, userPermissions.readPermission, experienceReadSingle);

//POST EXPERIECE UPDATE
router.post('/experience/update', userAuth, userPermissions.updatePermission, experienceUpdate);

//DELETE EXPERIECE DELETE
router.delete('/experience/delete', userAuth, userPermissions.deletePermission, experienceDelete);


/**
 * USER ENDPOINTS
 */
//POST CREATE NEW USER
router.post('/user/create', userAuth, userPermissions.adminPermission, userCreate);

//GET ALL USERS
router.get('/user/read', userAuth, userPermissions.adminPermission, userRead);

//POST CREATE UPDATE USER
router.post('/user/update', userAuth, userPermissions.adminPermission, userUpdate);

//POST DELETE USER
router.delete('/user/delete', userAuth, userPermissions.adminPermission, userDelete);

//GET LOGIN USER
router.post('/user/login', userLogin);


/**
 * MARKET ENDPOINTS
 */
//POST CREATE NEW MARKET
router.post('/market/create', userAuth, userPermissions.createPermission, marketCreate);

//GET READ MARKETS
router.get('/market/read', userAuth, userPermissions.readPermission, marketRead);

//GET READ SINGLE MARKET
router.get('/market/read/:id', userAuth, userPermissions.readPermission, marketReadSingle);

//POST UpDATE SINGLE MARKET
router.post('/market/update', userAuth, userPermissions.updatePermission, marketUpdate);

//POST DELETE SINGLE MARKET
router.delete('/market/delete', userAuth, userPermissions.deletePermission, marketDelete);


/**
 * PORT ENDPOINTS
 */
//POST CREATE NEW PORT
router.post('/port/create', userAuth, userPermissions.createPermission, portCreate);

//GET READ PORTS
router.get('/port/read', userAuth, userPermissions.readPermission, portRead);

//GET READ SINGLE PORT
router.get('/port/read/:id', userAuth, userPermissions.readPermission, portReadSingle);

//POST UPDATE SINGLE PORT
router.post('/port/update', userAuth, userPermissions.updatePermission, portUpdate);

//POST DELETE SINGLE PORT
router.delete('/port/delete', userAuth, userPermissions.deletePermission, portDelete);


/**
 * SHIP ENDPOINTS
 */
//POST CREATE NEW SHIP
router.post('/ship/create', userAuth, userPermissions.createPermission, shipCreate);

//GET READ SHIPS
router.get('/ship/read', userAuth, userPermissions.readPermission, shipRead);

//GET READ SINGLE SHIP
router.get('/ship/read/:id', userAuth, userPermissions.readPermission, shipReadSingle);

//POST UPDATE SINGLE SHIP
router.post('/ship/update', userAuth, userPermissions.updatePermission, shipUpdate);

//POST DELETE SINGLE SHIP
router.delete('/ship/delete', userAuth, userPermissions.deletePermission, shipDelete);


/**
 * TERMS ENDPOINTS
 */
//POST CREATE NEW TERMS
router.post('/terms/create', userAuth, userPermissions.createPermission, termsCreate);

//GET READ TERMS
router.get('/terms/read', userAuth, userPermissions.readPermission, termsRead);

//POST UPDATE TERMS
router.post('/terms/update', userAuth, userPermissions.updatePermission, termsUpdate);

//POST DELTE TERMS
router.post('/terms/delete', userAuth, userPermissions.deletePermission, termsDelete);


module.exports = router;
