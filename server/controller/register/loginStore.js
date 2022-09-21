const hapijoi = require("../../auth/joiLogin");
const authbcrypt = require("../../auth/bcrypt");
const users = require("../../models/sql/sqlpools");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");


const loginstore = async (req, res, next) => {
  try {
    localStorage.setItem("isRemember", req.body.remember);

    if (req.body.name && req.body.password) {
      console.log(req.body)
      let data = req.body
      let finduser = await users.cheakUserName(data.name);

      if (finduser[0].length > 0) {

        await authbcrypt.checkPassword(
          req.body.password,
          finduser[0][0].password
        );

        let chekTokens = await jwt.makeToken({
          hash: finduser[0][0].password,
        });
console.log(finduser[0][0].isStore)

        if (finduser[0][0].isStore == "yes") {
          console.log('pass')
          res.json({
            adminInfo: finduser[0][0],
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
    } else {
      res.json({
        err: "the value in this texts box is requier!"
      });
    }
  } catch (e) {
    console.log("i am the master of store admin", e);
    // req.session.err = e.details.map((item) => item.message);
    res.json({
      err: e.message
    });
  }
};


module.exports.loginstore = loginstore;