import React, {useState} from "react"
import { Link } from "react-router-dom"
//import Vegetable from "./Vegetable";



function Domain(props){
    return( 
        <div className="domain">
       <Link to={props.url} > <img   src={props.img} alt="crop type" /></Link>
     
            <h1 style={{position:"relative",textAlign:"justify"}} className="nameofcrop">{props.name}</h1>
           
        </div>
        
    )
}

export default Domain;