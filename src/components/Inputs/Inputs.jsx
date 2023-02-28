import React from "react";
import IntervalDate from "../IntervalDate/IntervalDate";
import './Inputs.css';
import Options from "./Options/Options";

const Inputs = ({ onChangeDate, isErrorDate, onChangeOptions, errorDateText, catalogNames, isErrorOptions }) => {
    return (
        <div className="inputs">
            <IntervalDate
                onChangeDate={onChangeDate}
                isErrorDate={isErrorDate}
                errorDateText={errorDateText} />
            <Options
                onChangeOptions={onChangeOptions}
                catalogNames={catalogNames}
                isErrorOptions={isErrorOptions} />

        </div>
    )
}

export default Inputs;