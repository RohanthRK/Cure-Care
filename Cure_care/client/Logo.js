import React from "react"
import {Link} from "react-router-dom"

function Logo(props){
    return(
        <div>
            <Link to="/Main">
             <img 
             class="logo"
              src={props.img}
               alt="logo" />
               </Link>
        </div>
    );
}


export default Logo;