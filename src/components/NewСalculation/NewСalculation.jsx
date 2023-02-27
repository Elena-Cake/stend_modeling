import React, { useEffect, useState } from "react";

import Configuration from "./Configuration/Configuration";
import Inputs from "../Inputs/Inputs";
import './NewСalculation.css';


const NewСalculation = ({ openTelescope, openloadPopup, rowData, setCulculationIcon }) => {

    const [dates, setDates] = useState({ date_start: '', date_end: '' })
    const [selectedId, setSelectedId] = useState([])

    const [isErrorDate, setIsErrorDate] = useState(false)

    function onChangeDate(e) {
        const { name, value } = e.target
        setDates({ ...dates, [name]: value })
    }

    // нажатие запуска расчета
    function onAskCulculate(arrId) {
        setSelectedId(arrId)
    }

    useEffect(() => {
        if (dates.date_start === '' || dates.date_end === '') {
            setIsErrorDate(true)
        } else {
            setIsErrorDate(false)
            setCulculationIcon()
            openloadPopup('Расчет запущен', false)
            const reqData = {
                ...dates,
                selectedId
            }
            console.log(reqData)
        }
    }, [selectedId]);

    useEffect(() => {
        setIsErrorDate(false)
    }, []);

    return (
        <div className="calculation">
            <Inputs onChangeDate={onChangeDate} isErrorDate={isErrorDate} />
            <Configuration onTelescope={openTelescope} rowData={rowData} onAskCulculate={onAskCulculate} />
        </div>
    )
}

export default NewСalculation; 