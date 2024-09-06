import React from "react";
import { Link } from "react-router-dom";
import VendingMachine from "./Pictures/Vending-Machine.png"
import "./Home.css"

const Home = () => { 
return (
    <div className=" container">
        <div className="home row">
            <div className=" greeting col">
                <h3 >Hello I am a vending machine. 
                    <br/>What would you like to eat?  </h3>
            </div>
            <img src={VendingMachine} className="vending-machine col  "/>
        
            <div className="link-list-container  col">
                <div className="list-group ">
                <Link to="/Drinks" >Drinks
                </Link>
                <Link to="/Snacks">Snacks</Link>
                <Link to="/Sardines">Fresh Sardines</Link>
            </div>
            </div>
        </div>
    </div>
)
}
export default Home