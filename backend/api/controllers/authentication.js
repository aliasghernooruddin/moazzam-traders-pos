var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONresponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function (req, res) {

  // if(!req.body.name || !req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  var user = new User(req.body);

  user.setPassword(req.body.password);

  user.save(function (err, data) {
    if (data) {
      res.status(200).json({ success: true, message: "User created Successfully!" });
    }
    else {
      if (err.name === 'MongoError' && err.code === 11000) {
        // Duplicate username
        return res.status(422).json({ success: false, type: "user_exists", message: 'User already exist!' });
      }
      res.status(422).json({ success: false, type: err.name, message: 'Failed. Try again' });
    }
  });

};

module.exports.login = function (req, res) {

  // if(!req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  passport.authenticate('local', function (err, user, info) {
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if (user) {
      token = user.generateJwt();
      res.status(200)
      res.json({
        token: token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};

module.exports.users = function (req, res) {
  User.find({}, { hash: 0, salt: 0 }).exec(function (err, user) {
    res.status(200).json({ status: true, data: user });
  });
}