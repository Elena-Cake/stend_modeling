import React, { useEffect, useState } from "react";
import IntervalDate from "../IntervalDate/IntervalDate";
import './Inputs.css';
import Options from "./Options/Options";

const Inputs = ({ onChangeDate, isErrorDate, onChangeOptions,
    errorDateText, catalogNames, isErrorOptions, getCatalogs, dates, options }) => {

    return (
        <div className="inputs">
            <IntervalDate
                onChangeDate={onChangeDate}
                isErrorDate={isErrorDate}
                errorDateText={errorDateText}
                dates={dates} />
            <Options
                onChangeOptions={onChangeOptions}
                catalogNames={catalogNames}
                isErrorOptions={isErrorOptions}
                getCatalogs={getCatalogs}
                options={options} />
        </div>
    )
}

export default Inputs;