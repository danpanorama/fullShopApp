const hapijoiCreate = require("../../auth/joi");
const authbcrypt = require("../../auth/bcrypt");
const users = require("../../models/sql/sqlpools");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");

// this is create use rfunction

const createNewAccount = async (req, res, next) => {
try {
  
  const date = await new Date();
  localStorage.setItem("isRemember", req.body.remember);
  let CheckingUserName = await users.cheakUserName(req.body.name);
  if (CheckingUserName[0].length > 0) {
  return res.json({err:"user username is alredy in used"});
  
  }
  let checkingUserEmail = await users.cheakUserEmail(req.body.email);
  if (checkingUserEmail[0].length > 0) {
  return res.json({err:"user email is alredy in used"});
  
  }
  

  let data = await hapijoiCreate.createUserSchema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordreapet:req.body.passwordreapet,

  });
  
  let hash = await authbcrypt.hashPassport(data.password);
  let token = await jwt.makeToken({ hash: hash });
  let isStore = 'no'
  let insertToBigBase = await users.insertNewUser(
    data.name,
    hash,
    data.email,
    date,
    isStore

  );

  if (insertToBigBase) {
    let user = await users.cheakUserName(data.name)
    res.json({number:user[0][0].number
        ,userInfo:user[0][0],token:token
        ,remember:req.body.remember});
  }

} catch (e) {
  console.log("::::",e)
  res.json({err:"error unvalid prop" +e, e,error:e}).status(500);
}
};

module.exports.createNewAccount = createNewAccount;
