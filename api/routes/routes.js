const userControllerMethods = require ('../controllers/userControllers');

module.exports = (app) => {
  app.route('/new-user').post(userControllerMethods.createUser);
  app.route('/users/:username').get(userControllerMethods.getUser);
  app.route('/login').post(userControllerMethods.userLogin);
}