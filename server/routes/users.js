var express = require('express');
var router = express.Router();
const newOrder = require("../controller/user/newOrder");
const getMyOrders = require('../controller/user/getMyOrders');
const getOrderById = require('../controller/user/getOrderById');
const pay = require('../controller/user/pay');
const { likeProduct } = require('../controller/user/likeProduct');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/getmyorders',getMyOrders.getMyOrders, function(req, res, next) {
});
router.get('/getorderbyid',getOrderById.getOrderById, function(req, res, next) {
});
router.get('/getorders',getMyOrders.getMyOrders, function(req, res, next) {
});
router.post('/neworder',newOrder.newOrder, function(req, res, next) {
  
});

router.post('/pay',pay.pay, function(req, res, next) {
  
});

router.post('/like',likeProduct, function(req, res, next) {
  
});
module.exports = router;
