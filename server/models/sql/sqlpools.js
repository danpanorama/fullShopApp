const pool = require("./mysql2");

const selectUser = () => {
  return pool.execute(`SELECT * FROM users `);
};

const cheakUserEmail = (email) => {
  return pool.execute(`SELECT * FROM users WHERE email = ? `, [email]);
};
const cheakUserName = (name) => {
  return pool.execute(`SELECT * FROM users WHERE name = ? `, [name]);
};

const cheakStorerName = (name) => {
  return pool.execute(
    `SELECT * FROM users WHERE name = ? AND isStore = 'yes'`,
    [name]
  );
};

// to Restore my password

const cheakUserEmailAndName = (name, email) => {
  return pool.execute(`SELECT * FROM users WHERE name = ? AND email = ? `, [
    name,
    email,
  ]);
};

const delproductbyid = (id, storeId) => {
  return pool.execute(`DELETE  FROM products where id = ? AND storeId = ?  `, [
    id,
    storeId,
  ]);
};
const delproduct = (id) => {
  return pool.execute(`DELETE  FROM products where id = ?   `, [id]);
};

const selectProductById = (id) => {
  return pool.execute(`SELECT * FROM products where storeId = ? `, [id]);
};

const getProductById = (id) => {
  return pool.execute(`SELECT * FROM products where id = ? `, [id]);
};

const getAllProduct = () => {
  return pool.execute(`SELECT * FROM products  `);
};
const insertNewitem = (name,description, cat, storeId, price, commends, likes, img) => {
  return pool.execute(
    `INSERT INTO products 
    (name,description, cat, storeId, price,commends,likes,img) 
    VALUES 
    (?, ?, ?, ?, ?,?,?,?)`,
    [name,description, cat, storeId, price, commends, likes, img]
  );
};

const insertNewUser = (name, password, email, date, isStore) => {
  return pool.execute(
    `INSERT INTO users 
    (name, password, email, date,isStore) 
    VALUES 
    (?, ?, ?, ?, ?)`,
    [name, password, email, date, isStore]
  );
};

// const insertNewItem =
// (name, password, email, date,isStore) => {
//   return pool.execute(
//     `INSERT INTO users
//     (name, password, email, date,isStore)
//     VALUES
//     (?, ?, ?, ?, ?)`,
//     [name, password, email, date,isStore]
//   );
// };

const selectUserById = (id) => {
  return pool.execute(`SELECT * FROM users  WHERE password = ? `, [id]);
};

const getUserById = (id) => {
  return pool.execute(`SELECT * FROM users  WHERE id = ? `, [id]);
};

const updateUser = (password, userName, email, phon, view, userID) => {
  return pool.execute(
    `UPDATE users 
    SET password = ?,
    name =?,email =?,
    phon=?,view=?
    WHERE number = ? `,
    [password, userName, email, phon, view, userID]
  );
};

const selectLike = (txt) => {
  return pool.execute(
    `select * from products where name Like ?
    or description Like ?
    `,
    [txt]
  );
};







const updateProduct = (name,description,cat,storeId,price,commends,likes,img,id ) => {
  return pool.execute(
    `UPDATE products 
    SET name = ?,description = ?,
    cat = ?, storeId =? ,
    price = ? ,
    commends = ?,
     likes = ?,
     img = ?
    WHERE id = ? `,
    [name,description,cat,storeId,price,commends,likes,img,id]
  );
};


const updateCommend = (commends,id ) => {
  return pool.execute(
    `UPDATE products 
    SET 
    commends = ?
   
    WHERE id = ? `,
    [commends,id]
  );
};


// const selectProduct = () => {
//   return pool.execute(`SELECT * FROM product WHERE name = ? OR cat = ? `);
// };



module.exports.selectUser = selectUser;
module.exports.selectUserById = selectUserById;
module.exports.cheakUserEmail = cheakUserEmail;
module.exports.cheakUserName = cheakUserName;
module.exports.updateUser = updateUser;
module.exports.cheakUserEmailAndName = cheakUserEmailAndName;
module.exports.insertNewUser = insertNewUser;
module.exports.cheakStorerName = cheakStorerName;
module.exports.insertNewitem = insertNewitem;
module.exports.selectProductById = selectProductById;
module.exports.delproduct = delproduct;
module.exports.getUserById = getUserById;
module.exports.getProductById = getProductById;

module.exports.getAllProduct = getAllProduct;

module.exports.updateProduct = updateProduct;

module.exports.delproductbyid = delproductbyid;


module.exports.updateCommend = updateCommend;


module.exports.selectLike = selectLike;

