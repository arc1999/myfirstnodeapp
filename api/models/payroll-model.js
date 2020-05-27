var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var payrollSchema = new Schema({
    Emp_id : {
        type: Number,
        ref : 'employee',
        required : true,
    },
    Hours :{
        type: Number,
        unique : false,
        required : true
    },
    Allowance :{
        type: Number,
        unique : false,
        required : false
    },
    Deduction : {
        type: Number,
        unique : false,
        required : false
    },
    Month : {
        type: Number,
        unique : false,
        required : false
    }
});

module.exports = mongoose.model('payroll', payrollSchema);