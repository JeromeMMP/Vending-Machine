import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sabrita from "./Sabrita"
import lays from "./Pictures/Lays.png"
import "./snacks.css"

const Snacks = () => {
    
    const [sabrita, setSabrita] = useState([])
    const getRandom = (min=0, max=100) =>{
        return Math.random() * (max-min) + min; 
    }
    const AddCount = () => {
       
        setSabrita([...sabrita, {x:getRandom(), y:getRandom(), rotation:getRandom(0,360)}])
    }

    return(
        <div className="snacks-Container">
        <div className="snacks-card">
            <p> Bags eaten: {sabrita.length} </p>
            <button type="button" className="btn"onClick={AddCount}>nom nom nom</button>
            <Link to="/">Go Back!</Link>
        </div>
            {sabrita.map(({x,y,rotation}, idx)=>( <Sabrita img={lays} key={idx} x={x} y={y} rotation={rotation}/>))}
        </div>
    )
}

export default Snacks