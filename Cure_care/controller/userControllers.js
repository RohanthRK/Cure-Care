const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { default: mongoose } = require("mongoose");

const getUserDict = (User) => {
  return {
    username: User.username,
    userId: User._id,
  };
};


const register = async (req, res) => {
  try {
    const {username,email,password,ph_no}= req.body;
    if (!(username && email && password && ph_no))
    {throw new Error("All input required");}

    const user = await User.create({
      username: username,
      email: email,
      password: password,
      ph_no:ph_no,
    });

    return res.json(getUserDict(user));
  }
  catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const login = async(req,res) => {
  const {email,password}=req.body
  User.findOne({email:email},(err,user)=>{
      if (user){
          if(password===user.password){
              res.send({message:"Login Successful",user:user})
          }
          else{
              res.send({message:"Password didn't match"})
          }

      }else{
          res.send({message:"User not registered"})
      }
  })
};


const updateUser = async(req,res) => {
  try {
    const{userId,name} = req.body;
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User does not exist");
    }

    if (typeof name == "string")
    {
      user.name = name;
    }
    await user.save();
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};


const getUser = async (req, res) => {
  try {
    User.find(function(err,founduser){
      if(!err){
        res.send(founduser);
      }
      else{
        res.send(err);
      }
    })
    // return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};


module.exports =
{
  register,
  login,
  getUser,
  updateUser,
};