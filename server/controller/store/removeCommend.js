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
        let json = JSON.parse(getProduct[0][0].commends);
        
        let obj = {
            name: req.body.name,
            id: req.body.id,
            text: req.body.text,
            date:date
        }
        function fltired(e){
            return e.id != req.body.id && e.date !=req.body.date
        }

       let arr =  json.filter(fltired)

        console.log(arr)
        let updateCommend = await products.updateCommend(json,req.body.itemId)
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