import React from "react";
import { Link } from "react-router-dom";
import CocaCola from "./Pictures/Coca-cola.png"
import "./Drinks.css"
const Drinks = () => {
    return (
        <div className="drinks-container container">

            <img src={CocaCola} alt="Cocacola-can" className="CocaCola" />
                <div className="drinks-card">
                        <p>OMG LOTS OF SUGAR!</p> 
                        <Link to="/">Go Back!</Link>
                </div>
            <img src={CocaCola} alt="Cocacola-can" className="CocaCola"/>
        </div>

    ) 
}

export default Drinks 