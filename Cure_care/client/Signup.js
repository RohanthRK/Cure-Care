import React, { useState,useEffect } from "react"
import Axios from "axios"
import Redirect from "react";
import { useNavigate} from "react-router-dom";

function Signup() {
        
      const navigate = useNavigate();
       const [username,setUser]=useState("");
       const [email,setEmail]=useState("");
       const [password,setPass]=useState("");
       const [ph_no,setPhone]=useState();

        const postdata=()=>{
            Axios
            .post("http://localhost:5000/api/users/register",{
                username:username,
                email:email,
                password:password,
                ph_no:ph_no})
            .then(res=>{console.log("user added");});  
            alert("signup successfull") ;                     
             navigate('/Login');   
             window.location.reload();           
         }

  return (
       <div className="body">
        <div className="center">
          <h1>Signup</h1>
          <form>
            <div className="txt_field">
              <input  onChange={(e)=>{setUser(e.target.value)}} required={true} value={username} type="text" name="username"/>
              <span></span>
              <label>Username</label>
            </div>
            <div className="txt_field">
              <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email} required={true} name="email"/>
              <span></span>
              <label>Email</label>
            </div>
            <div className="txt_field">
              <input type="number" onChange={(e)=>{setPhone(e.target.value)}} value={ph_no} required={true} name="ph_no"/>
              <span></span>
              <label>phone no</label>
            </div>
            <div className="txt_field">
              <input type="password" onChange={(e)=>{setPass(e.target.value)}} value={password} required={true} name="password"/>
              <span></span>
              <label>Password</label>
            </div>
           
         
           <button className="finalclick"     onClick={()=>postdata()}  >SUBMIT</button>
                <div class="signup_link">
              Have an account? <a href="/Login">Login</a>
            </div>
          </form>
        </div>
        </div>

  );

}

export default Signup;


