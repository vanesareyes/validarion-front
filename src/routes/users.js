const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController')

/* GET users listing. */
router.get('/new', controller.create);
router.post('/', controller.store);

module.exports = router;
