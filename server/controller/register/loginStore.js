const hapijoi = require("../../auth/joiLogin");
const authbcrypt = require("../../auth/bcrypt");
const users = require("../../models/sql/sqlpools");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");


// this is logg in function
const loginstore = async (req, res, next) => {

  localStorage.setItem("isRemember", req.body.remember);

  if (req.body.name && req.body.password) {
    try {
      // let data = await hapijoi.loginUser(req.body);
      let data = req.body
      let finduser = await users.cheakUserName(data.name);

      if (finduser[0].length > 0) {

        let checkpassword = await authbcrypt.checkPassword(
          req.body.password,
          finduser[0][0].password
        );

        let chekTokens = await jwt.makeToken({
          hash: finduser[0][0].password,
        });


        if (finduser[0][0].isstore == true) {
          res.json({
            userInfo: finduser[0][0],
            remember: req.body.remember,
            token: chekTokens,
            number: finduser[0][0].number,
         
          })
          return;
        } else {
          res.json({
            err: "you are not an admin"
          });
        }
      } else {
        res.json({
          err: "no such user or admin"
        })
      }
    } catch (e) {
      console.log("i am the master ", e.message);
      // req.session.err = e.details.map((item) => item.message);
      res.json({
        err: e.message
      });
    }
  } else {
    res.json({
      err: "the value in this texts box is requier!"
    });
  }
};


module.exports.loginstore = loginstore;