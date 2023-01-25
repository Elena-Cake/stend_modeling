import React from "react";
import IntervalDate from "../IntervalDate/IntervalDate";
import './Inputs.css';

const Inputs = () => {
    return (
        <div className="inputs">
            <IntervalDate />
            <select className="inputs__select">
                <option>1</option>
                <option>2</option>
            </select>
        </div>
    )
}

export default Inputs;