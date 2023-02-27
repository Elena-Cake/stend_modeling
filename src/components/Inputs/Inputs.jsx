import React from "react";
import IntervalDate from "../IntervalDate/IntervalDate";
import './Inputs.css';
import Options from "./Options/Options";

const Inputs = ({ onChangeDate, isErrorDate }) => {
    return (
        <div className="inputs">
            <IntervalDate onChangeDate={onChangeDate} isErrorDate={isErrorDate} />
            <Options />

        </div>
    )
}

export default Inputs;