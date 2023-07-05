import React from "react";
import Navbar from "./Navbar";
import gpay1 from "../images/gpay1.png";
import paytm1 from "../images/paytm1.png"
import phonepe1 from "../images/phonepe1.png"
import paypal1 from "../images/paypal1.png"

import net1 from "../images/net1.jpg"
import ccx from "../images/ccx.jpg"
import dc4 from "../images/dc4.jpg"

function Payment(){
    return(
        < div className="body">
        <Navbar />
    <h1 style={{textAlign:"center", color:"white"}}>Hackathon</h1><br/><br/>
       
        <br/><br/>
        <div className="box">
             <section className="ket">
             <b >< h3 style={{color:"#56c4f0"}}>Choose any payment mode</h3> </b>
                   <h4 id="lef" style={{color:"#56c4f0"}}>UPI</h4><br/><br/>
                   <span className="links">               
                 <ul>
                 <li><a href="#" ><img src=  {gpay1  }alt="google pay"/></a></li> 
                 <li> <a href="#"><img src= {paytm1  } alt="paytm"/></a></li>
                  <li><a href="#"><img src= {phonepe1 } alt="phonepe"/></a></li>
                  <li><a href="#"><img src= {paypal1}  alt="paypal"/></a></li>
                  </ul>
                </span><br/>
                <h4 id="lef" style={{color:"#56c4f0"}}> Net Banking/ Credit/ Debit Card</h4><br/><br/>
                <span className="links">               
                    <ul>
                    <li><a  href="#"><img src={net1}  alt="paytm"/></a></li> 
                    <li><a  href="#"><img src={ ccx } alt="paytm"/></a></li> 
                    <li><a  href="#"><img src= {dc4}  alt="paytm"/></a></li>                
                     </ul>
                   </span><br/>
            </section>
            <br/><br/><br/>
        
            </div>
      
        </div>
    );
}


export default Payment;