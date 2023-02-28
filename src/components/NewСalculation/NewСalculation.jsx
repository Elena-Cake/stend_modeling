import React, { useEffect, useState } from "react";

import Configuration from "./Configuration/Configuration";
import Inputs from "../Inputs/Inputs";
import './NewСalculation.css';


const NewСalculation = ({ openTelescope, openloadPopup, rowData, setCulculationIcon }) => {

    const [dates, setDates] = useState({ date_start: '', date_end: '' })
    const [options, setOptions] = useState({ sun_elevation: 6 })
    const [selectedId, setSelectedId] = useState([])

    const [errorDateText, setErrorDateText] = useState('Укажите даты')
    const [isErrorDate, setIsErrorDate] = useState(false)

    const [isErrorOptions, setIsErrorOptions] = useState(false)

    const [catalogNames, setCatalogNames] = useState([])

    function onChangeDate(e) {
        const { name, value } = e.target
        setDates({ ...dates, [name]: value })
    }

    function onChangeOptions(e) {
        const { name, value } = e.target
        setOptions({ ...options, [name]: value })
    }

    // назначение дат
    useEffect(() => {
        if (dates.date_start !== '' && dates.date_end !== '') {
            const dateStart = new Date(dates.date_start)
            const dateEnd = new Date(dates.date_end)
            if (dateStart < dateEnd) {
                if (dateStart.getFullYear() === dateEnd.getFullYear()) {
                    setIsErrorDate(false)
                    // АПИ - гет каталог___________________________________________________________________
                    console.log(dateStart.getFullYear())
                    // принятые каталоги
                    setCatalogNames(['GIAC', 'ANC'])
                } else {
                    setErrorDateText('Выберите даты в рамках одного года')
                    setIsErrorDate(true)
                }
            } else {
                setErrorDateText('Интервал дат некорректен')
                setIsErrorDate(true)
            }
        }
    }, [dates]);

    // нажатие запуска расчета
    function onAskCulculate(arrId) {
        setSelectedId(arrId)
    }

    useEffect(() => {
        if (dates.date_start === '' || dates.date_end === '') {
            setErrorDateText('Укажите даты')
            setIsErrorDate(true)
        } else if (!options.detectable_snr || !options.max_exp || !options.max_track_length || !options.sun_elevation || !options.zenith_sky_brightness) {
            setIsErrorOptions(true)
        } else {
            setIsErrorDate(false)
            setIsErrorOptions(false)
            setCulculationIcon()
            openloadPopup('Расчет запущен', false)
            const reqData = {
                ...dates,
                ...options,
                selectedId
            }
            // АПИ готового расчета
            console.log(reqData)
        }
    }, [selectedId]);

    useEffect(() => {
        setIsErrorDate(false)
    }, []);

    return (
        <div className="calculation">
            <Inputs
                onChangeDate={onChangeDate}
                isErrorDate={isErrorDate}
                errorDateText={errorDateText}
                onChangeOptions={onChangeOptions}
                catalogNames={catalogNames}
                isErrorOptions={isErrorOptions} />
            <Configuration
                onTelescope={openTelescope}
                rowData={rowData}
                onAskCulculate={onAskCulculate} />
        </div>
    )
}

export default NewСalculation; 