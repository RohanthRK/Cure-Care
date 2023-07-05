
import React from "react";
import {useState,useEffect} from "react";
import {Redirect} from "react";
import {Link}  from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";





function DoctorRegister(){
   const navigate = useNavigate();
    const[listofRegisters,setlist]=useState([]);
    const[name,setName]=useState("");
    const[ph_no,setPhone]=useState(0);
    const[email,setEmail]=useState("");
    const[specilization,setSpec]=useState("");
    const[biography,setBio]=useState("");


const posted=()=>{
     
     Axios.post("http://localhost:5000/api/doctors/register",{
         name:name,
         ph_no:ph_no,
         email:email,
         specilization: specilization,
         biography:biography,
        
          })
          .then(res=>{
          
             setlist([...listofRegisters,{ name:name,ph_no:ph_no, email:email, specilization:specilization, biography:biography}])
             console.log(listofRegisters);
             
          });
          navigate('/Main');
 }
  
 return(
     <div className="body">
        <div className="center">
            <h2>Register</h2>
     <form ><br/><br/>
    
 <div className="txt_field">
<input onChange={(e)=>{setName(e.target.value)}} required={true} value={name} type="text"   name="name"  />
<span></span>
<label>Name</label>
</div>
 <div className="txt_field">
 <input onChange={(e)=>{setPhone(e.target.value)}} required={true}  value={ph_no} type="number"  name="ph_no" />
 <span></span>
 <label>Mobile no</label>
</div>
 <div className="txt_field">
      <input onChange={(e)=>{setEmail(e.target.value)}} required={true} value={email} type="text" name="email" ></input>
      <span></span>
      <label>Email</label>
</div>
     
 <div className="txt_field">
     <input onChange={(e)=>{setSpec(e.target.value)}}  required={true} value={specilization} type="text"  name="specialization"/>
     <span></span>
     <label>Specialization</label>
</div>
 <div className="txt_field">
     <input onChange={(e)=>{setBio(e.target.value)}}  required={true} value={biography}  type="text"  name="biography" />
     <span></span>
     <label>Biography</label>
</div>

      <button className="finalclick" onClick={() => posted()}>Submit</button>
      <br/><br/>
  </form>
  </div>
  </div>
 );
}


export default DoctorRegister;