const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      required: true
    },
    issue: {
      type: String,
    },
    date:{
      type: Date,
      required:true,
    },
    time:{
      type: String,
      reuired: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversation", AppointmentSchema);