const express = require('express');
const router = express.Router();
const ClientController = require('../controller/ClientController');


router.post('/',ClientController.AddClient);
router.post('/login',ClientController.authClient);
router.post('/update',ClientController.updateUser);
router.post('/changepassword', ClientController.ChangePassword);

module.exports = router;