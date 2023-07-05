const mongoose = require("mongoose");
const { isEmail, contains } = require("validator");

const DoctorSchema = new mongoose.Schema(
    {
      name:{
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, "Must be valid email address"],
      },
      ph_no: {
        type: Number,
        required: true,
        unique: true,
      },
      specilization:{
        type: String,
        required: true
      },
      biography: {
        type: String,
        default: " ",
        maxLength: [250, "Must be at most 250 characters long"],
      },
      available:{
        type: Boolean,
        default: true
      }  
    }
   
  );
  
  
  
  module.exports = mongoose.model("Doctor", DoctorSchema);