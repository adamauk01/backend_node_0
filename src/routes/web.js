const express = require('express');
const router = express.Router();
const {
  getHomePage,
  postCreateUser
} = require('../controllers/homeController.js');
router.get('/', getHomePage);
router.post('/create-user', postCreateUser)
module.exports = router;