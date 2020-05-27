var emp = require('../controllers/employee.controller.js');
var pay = require('../controllers/payroll.controller.js');

module.exports = function(router) {
    router.post('/create', emp.create);
    router.post('/createpay', pay.createpayroll);
}