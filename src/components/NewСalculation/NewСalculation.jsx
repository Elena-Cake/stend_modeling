import React, { useEffect, useState } from "react";

import Configuration from "./Configuration/Configuration";
import Inputs from "../Inputs/Inputs";
import './NewСalculation.css';


const NewСalculation = ({ openTelescope, loadPopup, rowData }) => {

    const [dates, setDates] = useState({ date_start: '', date_end: '' })
    const [selectedId, setSelectedId] = useState([])

    function onChangeDate(e) {
        const { name, value } = e.target
        setDates({ ...dates, [name]: value })
    }

    // нажатие запуска расчета
    function onAskCulculate(arrId) {
        setSelectedId(arrId)
        // loadPopup()
    }

    useEffect(() => {
        const reqData = {
            ...dates,
            selectedId
        }
        console.log(reqData)
    }, [selectedId]);


    return (
        <div className="calculation">
            <Inputs onChangeDate={onChangeDate} />
            <Configuration onTelescope={openTelescope} onLoadPopup={loadPopup} rowData={rowData} onAskCulculate={onAskCulculate} />
        </div>
    )
}

export default NewСalculation; 