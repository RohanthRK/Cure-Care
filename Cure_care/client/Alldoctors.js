import React from "react"
import Doctors from "./Doctors";
import Unavailable from "./Unavailable"
import docpic from "../images/p11.png"
import Navbar from "../components/Navbar";
import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import  Axios  from "axios";
 
function Alldoctors(){
    const {name} =useParams();
         const[data,setData]=useState([])       
       
     useEffect(()=>{
      Axios.get('http://localhost:5000/api/doctors/details').then(res=>{console.log("data from api",res.data)
           setData(res.data)
    }).catch(err=> console.log(err))
      },[])
      const filteredData= data.filter(item=>{
       
        return item.specilization=== name && item.available===true;
      });

      const UnfilteredData= data.filter(item=>{
       
        return item.specilization=== name && item.available===false;
      });
        
  return (
    <div>
    <Navbar />
        <h1 style={{textAlign:"center", color:"white"}}>Path To Heal</h1><br/><br/>
        <h2 style={{textAlign:"center",color:"cyan"}}>Doctors available</h2><br/><br/>
       
        { filteredData.map((index)=>{    
          return(
            <>
          <Doctors key={index.id} url={index.email} img={docpic} name={index.name}
           ph_no={index.ph_no} email={index.email} 
           specilization={index.specilization} biography={index.biography} /> 
         <br/>
          </>
      )})} 
         
         {
            UnfilteredData.map((index)=>{    
              return(
                <>
              <Unavailable key={index.id} url={index.ph_no} img={docpic} name={index.name}
               ph_no={index.ph_no} email={index.email} 
               specilization={index.specilization} biography={index.biography} /> 
             <br/>
              </>
          )})
         }

       </div>
  );
}

export default Alldoctors;