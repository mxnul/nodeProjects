var express = require('express');

var employeeController = require('../src/employee/employeeController');
const router = express.Router();

router.route('/employee/login').post(employeeController.loginUserControllerFn);
router.route('/employee/create').post(employeeController.createemployeeControllerFn);


module.exports = router;