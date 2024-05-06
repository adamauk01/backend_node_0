const express = require('express');
const router = express.Router();
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage
} = require('../controllers/homeController.js');
router.get('/', getHomePage);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage)
router.post('/create-user', postCreateUser)
module.exports = router;