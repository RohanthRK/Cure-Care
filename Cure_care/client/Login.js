import React, { useState,useEffect } from "react"
import {Link, useNavigate} from "react-router-dom";
import  Axios  from "axios";


function Login() {
    
     const navigate= useNavigate()
    const [email,setUser]=useState("");
    const [password,setPass]=useState("");
    const[data,setData]=useState([])  

    useEffect(()=>{
    
      Axios.get('http://localhost:5000/api/users/details').then(res=>{
           setData(res.data)
    }).catch(err=> console.log(err))
      },[])
      const filteredData= data.filter(member=>{
        
        return member.email===email && member.password===password
      });
   const check=()=>{
       if(filteredData.length===0){
        alert("User not exist");
        navigate("/Login")    
       }
   else {             
          alert("Login successfull") ;
          navigate("/Main")
          
          }
  }

    // const check = () => {
    //     Axios.post("http://localhost:5000/api/users/login",{
    //                 email:email,
    //                 password:pass,
    //                 })
    //     .then(res => {
    //         alert(res.data.message)
    //         // setloginuser(res.data.user)
    //         if (res.data.message==="Login Successful"){
    //             navigate("/Main")
    //         }
    //     })
    // }
  return (
       <div class="body">
        <div class="center">
          <h1>Login</h1>
          <form>
            <div class="txt_field">
              <input type="text" onChange={(e)=>{setUser(e.target.value)}} name="email"  value={email}required></input>
              <span></span>
              <label>Email</label>
            </div>
           
            <div class="txt_field">
              <input type="password" onChange={(e)=>{setPass(e.target.value)}} vale={password} name="password" required></input>
              <span></span>
              <label>Password</label>
            </div>
           
            {/* <div class="pass">Forgot Password?</div> */}
           
          <button  className="finalclick"  onClick={()=>check()} >SUBMIT</button>
                <div class="signup_link">
              Not a member? <a href="/Signup">Signup</a>
            </div>
          </form>
        </div>
        </div>

  );

}

export default Login;


