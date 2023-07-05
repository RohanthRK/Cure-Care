const Doctor = require("../models/Doctor");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { default: mongoose } = require("mongoose");

const getDoctorDict = (Doctor) => {
  return {
    name: Doctor.name,
    userId: Doctor._id,
  };
};

const register = async (req, res) => {
  try {
    const {name,ph_no,email,specilization,biography}= req.body;
    if (!(name && ph_no && email && specilization && biography))
    {throw new Error("All input required");}

    const doctor = await Doctor.create({
      name: name,
      ph_no: ph_no,
      email: email,
      specilization: specilization,
      biography: biography,
    });

    return res.json(getDoctorDict(doctor));
  }
  catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const login = async(req,res) => {
  const {email,password}=req.body
  Doctor.findOne({email:email},(err,doctor)=>{
      if (doctor){
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


const updateDoctor = async(req,res) => {
  try {
    const{userId,name} = req.body;
    const doctor = await Doctor.findById(userId);

    if (!doctor) {
      throw new Error("Doctor does not exist");
    }

    if (typeof name == "string")
    {
      doctor.name = name;
    }
    await doctor.save();
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};


const getDoctor = async (req, res) => {
  try {
    Doctor.find(function(err,founddoctor){
      if(!err){
        res.send(founddoctor);
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
  getDoctor,
  updateDoctor,
};