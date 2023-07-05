import React from "react"
import {Link} from "react-router-dom"

function Spot(props){
  return (
    <>
    <Link to={props.url}>
        <div className="farmer-box">
           <div >
                
                    <img className="photo" src={props.img} alt="farmer pic"   />
               
                <div className="detail">
                        Name: {props.name}<br/>
                        Email: {props.email}<br/>
                        Contact: {props.ph_no}<br/>
                        Specialization: {props.specilization}<br/>
                        Biography: {props.biography}<br/><br/>
                        
                        <Link to="/payment"> <button className="finalclick">Video call</button></Link> 
                        <br/><br/>
                        <Link to="/Chat"> <button className="finalclick">Chat Box</button></Link> 
                </div>

                
        </div>
        </div>
        </Link>
    </>
  );
}

export default Spot;