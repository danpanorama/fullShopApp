
const orders = require("../../models/sql/sqlpools");

// this is create use rfunction

const newOrder = async (req, res, next) => {
    try {
        let shipping = JSON.stringify(req.body.shipping);



       let total = req.body.shipping.total+(0.17*100) + 10
       let ispaid = 'no';
       let dateoo = '00.00.00'
       let yourDate = new Date()
yourDate.toISOString().split('T')[0]
      

        let inseretNewOrder = await orders.insertNewOrder2(
            req.body.user.user.name,
            req.body.user.user.email,
            req.body.user.user.id,
            req.body.item,
            shipping,
            total,
            yourDate,
            ispaid,
            dateoo,
            ispaid,
            dateoo
          );
    
res.json({id:inseretNewOrder[0].insertId})


    } catch (e) {
        console.log("::::", e)
        res.json({
            err: "error unvalid prop" + e,
            e,
            error: e
        }).status(500);
    }
};

module.exports.newOrder = newOrder;