const mongoose = require('mongoose');

const User = require('../models/UserModel');

const createUser = (req, res) => {
  const { username, 
    password, 
    firstName, 
    lastName, 
    email, 
    isSubscriber, 
    equipment, 
    recipes } = req.body;
  const newUser = new User({ username, 
    password, 
    firstName, 
    lastName, 
    email, 
    isSubscriber, 
    equipment, 
    recipes });
  newUser
    .save()
    .then(createdUser => res.json(createdUser))
    .catch(err => res.status(422).json(err));
}

const getUser = (req, res) => {
  const { username } = req.params;
  User.findOne({  username })
    .select()
    .exec()
    .then(user => {
      if (user === null) throw new Error();
      res.json(user);
    })
    .catch(err => res.status(422).json(err));
}

const userLogin = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username, password })
    .select()
    .exec()
    .then(user => {
      if (user === null) {
        throw new Error();
      }
      res.json(user); 
    })
    .catch(err => res.status(422).json({ error: err }));
}

module.exports = {
  createUser,
  getUser,
  userLogin
};