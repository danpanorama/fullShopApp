var express = require('express');
var router = express.Router();
const createNewUser = require('../controller/register/createUser');
const createNewStore = require('../controller/register/createStore');
const updateUser = require('../controller/register/updateUser')

const login = require('../controller/register/login')



router.get('/', function(req, res, next) {
 
});

router.post('/login',login.logedin,  function(req, res, next) {});

router.post('/loguot',  function(req, res, next) { console.log(req.body) });

router.post('/createuser',createNewUser.createNewAccount , function(req, res, next) { console.log("don", req.body)});

router.post('/updateuser',updateUser.updateuser,  function(req, res, next) { 

 });


module.exports = router;
