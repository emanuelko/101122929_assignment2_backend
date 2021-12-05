let mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: [true, 'Please enter ID']
    },
    firstName: {
        type: String,
        required: [true, 'Please enter first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter last name']
    },
    emailId: {
        type: String,
        required: [true, 'Please enter email']
    }
})

const Employee = mongoose.model("employee", EmployeeSchema)
module.exports = Employee