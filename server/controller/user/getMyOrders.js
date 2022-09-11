
const orders = require("../../models/sql/sqlpools");


// this is create use rfunction

const getMyOrders = async (req, res, next) => {
try {
  
console.log(req.query,":::::")




 

  let getAllMyOrders = await orders.selectOrderById(req.query.id);
  
    console.log(getAllMyOrders[0])
    res.json({data:getAllMyOrders[0]});

  



} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.getMyOrders = getMyOrders;
