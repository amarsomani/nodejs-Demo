var express = require("express");
var router = express.Router();
var user_controller = require('../../Controller/v1/userController')


router.get('/', user_controller.index)
router.post('/', user_controller.saveUser)
router.post('/updateUser', user_controller.saveUser)
router.delete('/delete/:id', user_controller.deleteUser)
router.get('/:id', user_controller.getUserById)


module.exports = router;