var express = require('express');
var router = express.Router();
const loginstore = require('../controller/register/loginStore');
const createNewStore = require('../controller/register/createStore');
const orders = require('../controller/store/getorders')
const users = require('../controller/store/getAllUsers')
const login = require('../controller/register/login')



router.get('/', function(req, res, next) {
 
});

router.post('/login',loginstore.loginstore,  function(req, res, next) {});

router.post('/loguot',  function(req, res, next) { console.log(req.body) });
router.get('/getorders',orders.getOrders,  function(req, res, next) {  });
router.get('/getallusers',users.getAllUsers, function(req, res, next) {
  
});


router.post('/createstore',createNewStore.createNewStore , function(req, res, next) { console.log("don", req.body)});


module.exports = router;
