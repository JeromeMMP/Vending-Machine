import React from "react";
import { Link } from "react-router-dom";
import "./Sardines.css"

const Sardines = () => {
    return (
        <div className="sardines">
            <div className="text-box">
                 <p> You don't eat sardines ! <Link id="s-goback"to="/">Go Back!</Link> </p>
            </div>
        </div>
    )
}

export default Sardines 