const router = require('express').Router();
const toDoController = require('../Controllers/toDoController');
const userController = require('../Controllers/userController');
const middleware = require('../Middleware/middleware');

router
  .route('/toDoItem')
  .post(middleware.authenticate, toDoController.createToDoItem)
  .get(middleware.authenticate, toDoController.getAllItems);
router.route('/deleteitem').post(middleware.authenticate, toDoController.deleteItem);
router.route('/markAllChecked').get(middleware.authenticate, toDoController.markAllChecked);

router.route('/register').post(userController.register);
router.route('/getUser').get(userController.getUser);
router.route('/login').post(userController.login);
router.route('/logout').get(middleware.authenticate, userController.logout);

module.exports = router;
