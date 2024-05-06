const connection = require('../config/database');
const {
  getAllUsers,
  getUserById,
  updateUserById
} = require('../services/CRUDService');
const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  res.render('home.ejs', {
    listUsers: results
  });
}
const postCreateUser = async (req, res) => {
  let {
    email,
    name,
    city
  } = req.body;
  // connection.query(`INSERT INTO Users(email, name, city)
  //   VALUES(?, ?, ?)
  // `, [email, name, city],
  //   function (err, results) {
  //     res.send('Create user succeed!')
  //   })
  // connection.query(`SELECT * FROM Users`,
  //   function (err, results, fields) {
  //     console.log('result = ', results);
  //     console.log('field = ', fields);
  //   }
  // )
  let [results, field] = await connection.query(`INSERT INTO Users(email, name, city) VALUES(?, ?, ?)`, [email, name, city]);
  res.send('Create user succeed!')
}
const getCreatePage = (req, res) => {
  res.render('create.ejs');
}
const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render('edit.ejs', {
    userEdit: user
  });
}
const postUpdateUser = async (req, res) => {
  let {
    userId,
    email,
    name,
    city
  } = req.body;
  await updateUserById(email, name, city, userId);
  res.redirect('/');
}
module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser
}