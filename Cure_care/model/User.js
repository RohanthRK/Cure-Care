const mongoose = require("mongoose");
const { isEmail, contains } = require("validator");

const UserSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
       
      },
      name:{
        type: String,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, "Must be valid email address"],
      },
      ph_no: {
        type: Number,
        required:true,
        unique:true,
      },
      password: {
        type: String,
        required: true,
      
      },
      history:{
        type: String,
        default: " ",
      },
      // date:{
      //   type: date,
      // }
    },
    { timestamps: true }
  );
  
  UserSchema.pre("save", function (next) {
   
    next();
  });
  
  module.exports = mongoose.model("User", UserSchema);