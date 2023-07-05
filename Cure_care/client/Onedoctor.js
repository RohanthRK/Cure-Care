import React from "react"
import docpic from "../images/p11.png"
import Navbar from "../components/Navbar";
import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import  Axios  from "axios";
import Spot from "./Spot";
 
function Onedoctor(){
    const {name,email} =useParams();
         const[data,setData]=useState([])       
       
     useEffect(()=>{
      Axios.get('http://localhost:5000/api/doctors/details').then(res=>{console.log("data from api",res.data)
           setData(res.data)
    }).catch(err=> console.log(err))
      },[])
      const filteredData= data.filter(item=>{
        return (item.specilization === name && item.email === email && item.available === true);
      });
        
  return (
    <div>
    <Navbar />
    <h1 style={{textAlign:"center", color:"CYAN"}}>SPOT TREATMENT</h1><br/><br/>
       
        { filteredData.map((index)=>{    
          return(
            <>
          <Spot key={index.id} url={index.email} img={docpic} name={index.name}
           ph_no={index.ph_no} email={index.email} 
           specilization={index.specilization} biography={index.biography} /> 
         <br/>
          </>
      )})} 
       </div>
  );
}

export default Onedoctor;