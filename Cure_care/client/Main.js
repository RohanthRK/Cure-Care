import React from "react";
import Navbar from "./Navbar";
import Domain from "./Domain";
import homepic from "../images/homepic.jpg"
import dermatologist from "../images/dermatologist.jpeg"
import allergist from "../images/allergist.jpg"
import cardiologist from "../images/cardiologist.jpeg"
import endocrinologist from "../images/endocrinologist.jpeg"
import gynachologist from "../images/gynachologist.jpeg"
import pediatrician from "../images/pediatrician.jpeg"
import psychiatrist from "../images/psychiatrist.jpeg"

function Main(){
    return(
      <div>
        <br/>
       <Navbar/>
       <h1 style={{textAlign:"center", color:"white"}}>Cure Care</h1><br/><br/>
       <br/>
       <div>
        <Domain url="Dermatologist"  name="Dermatologist" img={dermatologist}/>
        <Domain url="Pediatrician"  name="Pediatrician" img={pediatrician}/>
        <Domain url="Cardiologist"  name="Cardiologist" img={cardiologist}/>
        <Domain url="Allergist" name="Allergist" img={allergist}/>
        
        <Domain url="Endocrinologist"  name="Endocrinologist" img={endocrinologist}/>
        <Domain url="Gynaechologist"  name="Gynaechologist" img={gynachologist}/>
        <Domain url="Psychiatrist"  name="Psychiatrist" img={psychiatrist}/>
       </div>



      </div>


    );

}



export default Main;