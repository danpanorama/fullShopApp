
const products = require("../../models/sql/sqlpools");




const delItem = async (req, res, next) => {
try {
  
    if(req.body.productStoreId == req.body.storeId){

        let del = await products.delproductbyid(req.body.id,req.body.storeId);
        // res.json({msg:'delete sucssece'})
        next()


    }else{
          res.json({msg:"user not hold this product"})

    }





} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.delItem = delItem;
