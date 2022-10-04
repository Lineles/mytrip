import { Link } from "react-router-dom";

import "./Navigation.css"


function Navigation ( ) {


    return( 

        <div className="Navigation-Container"> 
                <Link to="/" className="nav-link">Home Page</Link>
                <Link to="/News" className="nav-link">News</Link>
                <Link to="/Countries" className="nav-link">Countries</Link>
                <Link to="/Shop" className="nav-link">Shop</Link>
                <Link to="/Registration" className="nav-link">Create Acc</Link>
        </div>
    )
} 

export default Navigation ; 