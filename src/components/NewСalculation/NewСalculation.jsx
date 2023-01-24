import React from "react";

import Configuration from "../Configuration/Configuration";
import Inputs from "../Inputs/Inputs";
import './NewСalculation.css';


const NewСalculation = ({ openTelescope, loadPopup }) => {


    return (
        <div className="calculation">
            <Inputs />
            <Configuration onTelescope={openTelescope} onLoadPopup={loadPopup} />
        </div>
    )
}

export default NewСalculation; 