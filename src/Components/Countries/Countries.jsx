import React from "react";
import { Link } from "react-router-dom";
import "./Countries.css"

function Countries ( ) {

    

    return( 

        <div className="Countries-container"> 
            <div className="Countries-box1">
                <h1>There is a World full of ADVENTURE!</h1>
                <h1>!!! FIND YOURS !!!</h1>
            </div>
            <div className="Countries-box2">
                <img src="\IMAGES\GOPR4921.JPG" alt="" className="Countries-box2-img"></img>
                
                <form className="Countries-box2-form">
                    <select className="Countries-box2-select">
                        <option value="/Island">Island</option>
                        <option value="/Scottland">Scottland</option>
                    </select>
                    <button className="Countries-box2-button"> Find </button>
                </form>
            </div>
            <div className="Countries-box3">
                <div className="Country-selection">
                    <h1 className="Country-selection-h1">Europe</h1>
                    <Link to={"/Scottland"} className="Country-selection-link" >Scottland </Link>
                    <Link to={"/Island"} className="Country-selection-link">Island </Link>
                </div>
                <div className="Country-selection">
                    <h1 className="Country-selection-h1">Asia</h1>
                    <Link to={"/#"} className="Country-selection-link"> Test </Link>
                    <Link to={"/#"} className="Country-selection-link"> Test </Link>
                </div>
                <div className="Country-selection">
                    <h1 className="Country-selection-h1">North America</h1>
                    <Link to={"/#"} className="Country-selection-link"> Test </Link>
                    <Link to={"/#"} className="Country-selection-link"> Test </Link>
                </div>
                <div className="Country-selection">
                    <h1 className="Country-selection-h1">South America</h1>
                    <Link to={"/#"} className="Country-selection-link"> Test </Link>
                    <Link to={"/#"} className="Country-selection-link"> Test </Link>
                </div>
                <div className="Country-selection">
                    <h1 className="Country-selection-h1">Africa</h1>
                    <Link to={"/#"} className="Country-selection-link"> Test </Link>
                    <Link to={"/#"} className="Country-selection-link"> Test </Link>
                </div>
                <div className="Country-selection">
                    <h1 className="Country-selection-h1">Oceania</h1>
                    <Link to={"/#"} className="Country-selection-link"> Test </Link>
                    <Link to={"/#"} className="Country-selection-link"> Test </Link>
                </div>


            </div>
        </div>
    )
} 

export default Countries; 