const Payroll = require('../models/payroll-model.js');
const date = require('date-and-time');

exports.createpayroll = (req, res) => {
    // Validate request
    const { empid,hours } = req.body;
    if(!empid || !hours) {
        return res.status(400).send({
            message: "fields can not be empty"
        });
    }

    // Create a Employee
    var d = new date();
    const pay = new Payroll({
        Emp_id : empid,
        Hours : hours,
        Allowance:req.body.Allowance || 0,
        Deduction:req.body.Deduction || 0,
        Month : d.getMonth() || 0,
    });

    // Save Note in the database
    emp.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Employee."
        });
    });
};