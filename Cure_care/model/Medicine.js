const mongoose = require("mongoose");

const MedicineSchema = new mongoose.Schema(
    {
      name:{
        type: String,
        required: true,
      },
      available:{
        type: Boolean,
        required: true
      },
      about: {
        type: String,
        required:true,
        maxLength: [250, "Must be at most 250 characters long"],
      },  
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Medicine", MedicineSchema);