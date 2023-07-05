import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DoctorRegister from "./components/DoctorRegister";
import Doctors from "./components/Doctors";
import Alldoctors from "./components/Alldoctors";
import Onedoctor from "./components/Onedoctor";
import NewChat from ".//NewChat";
import Appointment from "./components/Appointment";
import Payment from "./components/Payment";



function App(){
     return(
      <div>
       <BrowserRouter>
       <Routes>
           <Route exact path="/" element={<Home/>}></Route>
           <Route exact path="/Login" element={<Login/>}></Route>
           <Route exact path="/Main" element={<Main/>}></Route>
           <Route exact path="/Signup" element={<Signup/>}></Route>
           <Route exact path="/DoctorRegister" element={<DoctorRegister/>}></Route>
           <Route exact path="/Doctors" element={<Doctors/>}></Route>
           <Route exact path="/Main/:name" element={<Alldoctors/>}></Route>
           <Route exact path="/Main/:name/:email" element={<Onedoctor/>}></Route>
           <Route exact path="/Chat" element={<NewChat/>}></Route>
           <Route exact path="/Main/:name/Appointment" element={<Appointment/>}></Route>
           <Route exact path="/Payment" element={<Payment/>}></Route>
           
           {/* <Route exact path="/Gynachologist" element={<Alldoctors/>}></Route> */}
       </Routes>     
       </BrowserRouter>
       </div>
     );
}



export default App;