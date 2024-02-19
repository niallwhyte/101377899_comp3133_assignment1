const mongoose = require("mongoose");

const Employee = mongoose.model("Employee", {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    salary: { type: Number, required: true },

});

module.exports = { Employee };