const router = require('express').Router();
const toDoController = require('../Controllers/toDoController');
const userController = require('../Controllers/userController');
const middleware = require('../Middleware/middleware');

router
  .route('/toDoItem')
  .post(toDoController.createToDoItem)
  .get(toDoController.getAllItems);

router.route('/register').post(userController.register);
router.route('/getUser').get(userController.getUser);
router.route('/login').post(middleware.authenticate, userController.login);

module.exports = router;
