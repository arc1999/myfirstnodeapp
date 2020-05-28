var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var monthschema = new Schema({
    hours: {
        type: Number,
        default: 0
    },
    allowances: {
        type: Number,
        default: 0
    },
    deductions: {
        type: Number,
        default: 0
    }

});
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
    },
    monthly_details :[{hours: {
            type: Number,
            default: 0
        },
        allowances: {
            type: Number,
            default: 0
        },
        deductions: {
            type: Number,
            default: 0
        }}],
}, {
    timestamps: true
});
module.exports = mongoose.model('employee', employeeSchema);
//module.exports = mongoose.model('month', monthschema);