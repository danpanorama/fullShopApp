const hapijoiCreate = require("../../auth/joi");
const authbcrypt = require("../../auth/bcrypt");
const products = require("../../models/sql/sqlpools");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");


const pay = async (req, res, next) => {
    try {
        console.log(req.body.id)
        let yourDate = new Date()
        yourDate.toISOString().split('T')[0]


        let getOrder = await products.getMyOrderByOrderId(req.body.id);

        if (getOrder[0].length > 0) {

            let ispaid = 'yes'

            let updateItem = await products.updateOrderPay(
                ispaid,  yourDate, req.body.id

            );

            if (updateItem) {

                let items = await products.getMyOrderByOrderId(req.body.id);
                console.log(items[0][0])

                res.json({
                    data: items[0][0]
                });
            }
        } else {
            res.json({
                msg: 'cannot find this store'
            })
        }



    } catch (e) {
        console.log("::::", e)
        res.json({
            err: "error unvalid prop" + e,
            e,
            error: e
        }).status(500);
    }
};

module.exports.pay = pay;