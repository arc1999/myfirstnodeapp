const Employee = require('../models/employee-model.js');

exports.create = (req, res) => {
    // Validate request
    const { empid, name,rate } = req.body;
    if(!empid || !name || !rate ) {
        return res.status(400).send({
            message: "fields can not be empty"
        });
    }

    // Create a Employee
    const emp = new Employee({
       id : empid,
       name : name,
       rate : rate,
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