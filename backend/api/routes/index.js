var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlAdmin =  require('../controllers/admin');
var ctrlStructure =  require('../controllers/structure');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// user module
router.post('/register-user', ctrlAuth.register);
router.post('/login-user', ctrlAuth.login);
router.get('/get-users', ctrlAuth.users)

//admin module
router.get('/admin-login', ctrlAdmin.login)

// structure model
router.post('/add-structure', ctrlStructure.add);
router.get('/get-structure', ctrlStructure.get);
router.get('/get-structure-dropdown', ctrlStructure.getDropdown)

module.exports = router;
