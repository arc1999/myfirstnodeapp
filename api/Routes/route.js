var emp = require('../controllers/employee.controller.js');

module.exports = function(router) {
    router.post('/create', emp.create);
    router.post('/createpay/:id', emp.addhours);
    router.put('/createpay/:id', emp.updatehours);
    router.get('/view', emp.findAll);
}