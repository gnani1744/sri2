const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: String,
    gender: String,
    dateOfExam: Date,
    address: String,
    email: String,
    phone: String,
    mrno: String,
    age: Number,
    chiefComplaint: String,
    powerRightEye: String,
    powerLeftEye: String,
    addPower: String, // New field
    diagnosis: String
});

module.exports = mongoose.model('Patient', patientSchema);
