import React from "react";
import logo from "../images/logo2.jpg"
 import Logo from "./Logo";


function Navbar(){
    return (
        <nav>
         <Logo img={logo} /> 
        <div class="nav-links" >
        
           <ul>                  
                <li><a href="/Main" >HOME</a></li>
                <li><a href="/Pharmacy" >PHARMACY</a></li>
                <li><a href="/DoctorRegister" >DOCTOR_REGISTER</a></li>
                {/* <li><a href="/Login" >PATIENT_LOGIN</a></li> */}
                {/* <li><a href="#" >MY CART</a></li> */}
           </ul>
        </div>
    </nav>
    );
}

export default Navbar;
