const userControllerMethods = require ('../controllers/userControllers');

const middleware = require('../middlewares/middleware');

module.exports = (app) => {
  app.route('/new-user').post(middleware.hashPassword, userControllerMethods.createUser);
  app.route('/users/:username').get(userControllerMethods.getUser);
  app.route('/login').post(middleware.authenticate ,userControllerMethods.userLogin);
};