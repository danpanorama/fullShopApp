const hapijoiCreate = require("../../auth/joi");
const authbcrypt = require("../../auth/bcrypt");
const products = require("../../models/sql/sqlpools");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");

// this is create use rfunction

const addcommend = async (req, res, next) => {
    try {
        const date = await new Date();
        console.log(req.body)
        let getProduct = await products.getProductById(req.body.itemId);
        console.log(getProduct[0][0]);
        let json = JSON.parse(getProduct[0][0].commends);
        

        let obj = {
            name: req.body.name,
            id: req.body.id,
            text: req.body.text,
            date:date
        }

        json = [...json, obj]
        console.log(json);
        let updateCommend = await products.updateCommend(json,req.body.itemId)
        let returnMyProduct = await products.getProductById(req.body.itemId);

        console.log(updateCommend,returnMyProduct[0][0])
        res.json({item:returnMyProduct[0][0]})
        // if (CheckingStoreName[0].length > 0 && CheckingStoreName[0][0].isStore == 'yes') {



        //   let updateItem = await products.updateProduct(
        //     req.body.name,
        //     req.body.description,
        //     req.body.cat,
        //     req.body.storeId,
        //     req.body.price,
        //     req.body.commends,
        //     req.body.likes,
        //     req.body.img, 
        //     req.body.id,

        //   );

        //   if (updateItem) {

        //     let items = await products.getProductById(req.body.id);
        //     console.log(items[0][0])

        //     res.json({
        //       data: items[0][0]
        //     });
        //   }
        // } else {
        //   res.json({
        //     msg: 'cannot find this store'
        //   })
        // }



    } catch (e) {
        console.log("::::", e)
        res.json({
            err: "error unvalid prop" + e,
            e,
            error: e
        }).status(500);
    }
};

module.exports.addcommend = addcommend;