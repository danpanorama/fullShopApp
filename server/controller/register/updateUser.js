const hapijoi = require("../../auth/joiLogin");
const authbcrypt = require("../../auth/bcrypt");
const users = require("../../models/sql/sqlpools");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");


const updateuser = async (req, res, next) => {
  try {
    let user = await users.SelectUserById(req.body.number);

    if(user[0].length > 0){
        let checkpassword = await authbcrypt.checkPassword(
            req.body.password,
            user[0][0].password
          ).catch(e=>res.json({err:e}));

          let chekTokens = await jwt.makeToken({
            hash: user[0][0].password,
          });
         

          if(checkpassword ){
          
          
            let pass = await authbcrypt.hashPassport(req.body.newpassword);

       let newinfo =   await  users.updateUser(pass,req.body.name,req.body.email,req.body.number)


       let newuser = await users.SelectUserById(req.body.number);
        


            res.json({userInfo:newuser[0][0],
                token: chekTokens,
                number: user[0][0].number,})
          }else{
            res.json({err:'password in correct'})
          }

    }else{
        res.json({err:'something wrong'})
    }

 
  } catch (e) {
    console.log("cannot update user", e);
    // req.session.err = e.details.map((item) => item.message);
    res.json({
      err: e.message
    });
  }
};


module.exports.updateuser = updateuser;