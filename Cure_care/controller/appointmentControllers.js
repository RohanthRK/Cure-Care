const Appointment = require("../models/Appointment");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");

const getAppointmentDict = (Appointment) => {
  return {
    name: Appointment.name,
    userId: Appointment._id,
  };
};

const register = async (req, res) => {
  try {
    const {name,issue,date,time}= req.body;
    if (!(name && issue && date && time))
    {throw new Error("All input required");}

    const appointment = await Appointment.create({
      name: name,
      issue: issue,
      date: date,
      time:time,
    });

    return res.json(getAppointmentDict(appointment));
  }
  catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// const login = async(req,res) => {
//   const {email,password}=req.body
//   User.findOne({email:email},(err,user)=>{
//       if (user){
//           if(password===user.password){
//               res.send({message:"Login Successful",user:user})
//           }
//           else{
//               res.send({message:"Password didn't match"})
//           }

//       }else{
//           res.send({message:"User not registered"})
//       }
//   })
// };


// const updateUser = async(req,res) => {
//   try {
//     const{userId,name} = req.body;
//     const user = await User.findById(userId);

//     if (!user) {
//       throw new Error("User does not exist");
//     }

//     if (typeof name == "string")
//     {
//       user.name = name;
//     }
//     await user.save();
//     return res.status(200).json({ success: true });
//   } catch (err) {
//     return res.status(400).json({ error: err.message });
//   }
// };


// const getUser = async (req, res) => {
//   try {
//     const username = req.params.username;
//     const user = await User.findOne({ username }).select("-password");

//     if (!user) {
//       throw new Error("User does not exist");
//     }

//     const data = {user};

//     return res.status(200).json(data);
//   } catch (err) {
//     return res.status(400).json({ error: err.message });
//   }
// };


module.exports =
{
  register,
//   login,
//   getUser,
//   updateUser,
};