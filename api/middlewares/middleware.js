const bcrypt = require ('bcrypt');
const User = require('../models/UserModel');

const BCRYPT_COST = 11;

hashPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    throw new Error();
    return;
  }
  bcrypt
    .hash(password, BCRYPT_COST)
    .then((pass) => {
      req.password = pass;
      next();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

const authenticate = (req, res, next) => {
  const { username, password } = req.body;
  if (!username) {
    throw new Error();
    return;
  }
  User.findOne({ username }, (err, user) => {
    if (err || user === null) {
      throw new Error();
      return;
    }
    const hashedPass = user.password;
    bcrypt
      .compare(password, hashedPass)
      .then((response) => {
        if (!response) throw new Error();
        req.loggedInUser = user;
        next();
      })
      .catch((error) => {
        throw new Error();
        return;
      });
  });
};

module.exports = {
  hashPassword, 
  authenticate
};
