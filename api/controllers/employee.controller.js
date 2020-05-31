const Employee = require('../models/employee-model.js');

exports.create = (req, res) => {
    // Validate request
    const { empid, name,rate } = req.body;
    console.log(empid)
    if(!empid || !name || !rate ) {
        return res.status(400).send({
            message: "fields can not be empty"
        });
    }
    // Create a Employee
    var d = new Date();
    var curmonth=d.getMonth()
    const emp = new Employee({
       id : empid,
       name : name,
       rate : rate,
       ["monthly_details." + curmonth+ ".hours"]: 0,
       ["monthly_details." + curmonth+ ".allowances"] :0,
       ["monthly_details." + curmonth+ ".deductions"] :0,
    });
console.log(emp);
    // Save Note in the database

    emp.save()
        .then(data => {
            console.log(data);
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Employee."
        });
    });
};
exports.addhours = (req, res) => {
    // Validate Request
    const  hours  = req.body.hours;
    if( !hours ) {
        return res.status(400).send({
            message: "fields can not be empty"
        });
    }
    var d = new Date();
    var curmonth=d.getMonth()
    // Find note and update it with the request body
    var query = { id: req.params.id };
    var set = {$inc: {}};
    set.$inc["monthly_details." + curmonth+ ".hours"] = hours;
    set.$inc["monthly_details." + curmonth+ ".allowances"] = req.body.allowances || 0;
    set.$inc["monthly_details." + curmonth+ ".deductions"] =  req.body.deductions || 0;
    console.log(set)
    Employee.findOneAndUpdate(query,set,{new: true})
    Employee.findOneAndUpdate(query,set,{new: true})
        .then(emp => {
            if(!emp) {
                return res.status(404).send({
                    message: "Employee not found with id " + req.params.id
                });
            }
            res.send(emp);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: err.message + req.params.id
        });
    });
};
exports.updatehours = (req, res) => {
    // Validate Request
    const hours  = req.body.hours;
    if( !hours) {
        return res.status(400).send({
            message: "fields can not be empty"
        });
    }
    var d = new Date();
    var curmonth=d.getMonth()
    // Find note and update it with the request body
    var query = { id: req.params.id };
    var set = {$set: {}};
    set.$set["monthly_details." + curmonth+ ".hours"] = hours;
    set.$set["monthly_details." + curmonth+ ".allowances"] = req.body.allowances || 0;
    set.$set["monthly_details." + curmonth+ ".deductions"] =  req.body.deductions || 0;
    console.log(set)
    Employee.findOneAndUpdate(query,set,{new: true})
    Employee.findOneAndUpdate(query,set,{new: true})
        .then(emp => {
            if(!emp) {
                return res.status(404).send({
                    message: "Employee not found with id " + req.params.id
                });
            }
            res.send(emp);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: err.message + req.params.id
        });
    });
};
exports.findAll = (req, res) => {
    Employee.find()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving employees."
        });
    });
};