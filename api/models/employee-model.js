var mongoose = require('mongoose');
var Schema = mongoose.Schema;
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
    rate : {
        type: Number,
        unique : false,
        required : true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('employee', employeeSchema);