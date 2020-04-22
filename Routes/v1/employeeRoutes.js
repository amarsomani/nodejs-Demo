var express = require("express");
var router = express.Router();
var employee_controller = require('../../Controller/v1/employeeController')
var bodyParser = require('body-parser')

var urlencoded = bodyParser.urlencoded({ extended: true });

router.post('/', urlencoded, employee_controller.saveEmployee)
router.get('/', employee_controller.getAllEmployees)
router.get('/:id', employee_controller.getEmployeeById)
router.put('/:id', employee_controller.updateEmployee)
router.delete('/delete/:id', employee_controller.deleteEmployee)

module.exports = router;