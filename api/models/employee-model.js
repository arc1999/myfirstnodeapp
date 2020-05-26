var mongoose = require('mongoose');
var Schema = mongoose.Schema;
autoIncrement = require('mongoose-auto-increment');
var employeeSchema = new Schema({
    id : {
        type: Number,
        unique : true,
        required : true,

    },
    name :{
        type: String,
        unique : false,
        required : true
    },
    hours : {
        type: Number,
        unique : false,
        required : true
    },
    rate : {
        type: Number,
        unique : false,
        required : true
    },
    allowances : {
        type: Number,
        unique : false,
        required : true
    },
    deduction : {
        type: Number,
        unique : false,
        required : true
    }
}, {
    timestamps: true
});

module.exports = employeeSchema;