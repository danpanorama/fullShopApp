
const orders = require("../../models/sql/sqlBuy");


// get spetsiphick order

const getOrderById = async (req, res, next) => {
try {
  
console.log(req.query,":::111::")




 

  let getAllMyOrders = await orders.selectProductsOrderJoinById(req.query.id);
  
  
    res.json({data:getAllMyOrders[0]});

  



} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.getOrderById = getOrderById;
