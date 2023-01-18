import React from "react";
import Configuration from "./Configuration/Configuration";
import Inputs from "./Inputs/Inputs";
import './NewСalculation.css';


const NewСalculation = () => {
    return (
        <div className="calculation">
            <Inputs />
            <Configuration />
        </div>
    )
}

export default NewСalculation; 