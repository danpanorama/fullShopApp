const hapijoiCreate = require("../../auth/joi");
const authbcrypt = require("../../auth/bcrypt");
const products = require("../../models/sql/sqlpools");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");

// this is create use rfunction

const removeCommend = async (req, res, next) => {
    try {
        const date = await new Date();
        let getProduct = await products.getProductById(req.body.itemId);
        console.log(getProduct[0][0],req.body.commentid)

        let json = JSON.parse(getProduct[0][0].commends);
 
        function fltired(e){ 
            
            return e.commentid !=req.body.commentid 
        }

       let arr =  json.filter(fltired)

       
        let updateCommend = await products.updateCommend(arr,req.body.itemId)
        let returnMyProduct = await products.getProductById(req.body.itemId);

        res.json({item:returnMyProduct[0][0]})
       


    } catch (e) {
        console.log("::::", e)
        res.json({
            err: "error unvalid prop" + e,
            e,
            error: e
        }).status(500);
    }
};

module.exports.removeCommend = removeCommend;