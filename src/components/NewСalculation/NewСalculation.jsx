import React, { useEffect, useState } from "react";

import Configuration from "./Configuration/Configuration";
import Inputs from "../Inputs/Inputs";
import './NewСalculation.css';
import { api } from "../../utils/api";


const NewСalculation = ({ openTelescope, openloadPopup, resData, setCulculationIcon, startCalculate, isResaltDownload, selectedIdResDone, askDataToResultsDone }) => {

    const [dates, setDates] = useState({ date_start: '', date_end: '' })
    const [options, setOptions] = useState({ sun_elevation: 6 })
    const [selectedId, setSelectedId] = useState([])

    const [errorDateText, setErrorDateText] = useState('Укажите даты')
    const [isErrorDate, setIsErrorDate] = useState(false)

    const [isErrorOptions, setIsErrorOptions] = useState(false)

    const [catalogNames, setCatalogNames] = useState([])

    useEffect(() => {
        setDates({ date_start: resData.start_date, date_end: resData.end_date })
        setOptions({
            name: resData.name,
            sun_elevation: resData.sun_elevation,
            detectable_snr: resData.detectable_snr,
            max_exp: resData.max_exp,
            max_track_length: resData.max_track_length,
            zenith_sky_brightness: resData.zenith_sky_brightness,
            catalog: resData.catalog
        })
        setCatalogNames([resData.catalog])
    }, [resData])

    function onChangeDate(e) {
        const { name, value } = e.target
        setDates({ ...dates, [name]: value })
    }

    function onChangeOptions(e) {
        const { name, value } = e.target
        setOptions({ ...options, [name]: value })
    }

    // назначение дат
    const getCatalogs = () => {
        if (dates.date_start !== '' && dates.date_end !== '') {
            const dateStart = new Date(dates.date_start)
            const dateEnd = new Date(dates.date_end)
            if (dateStart < dateEnd) {
                if (dateStart.getFullYear() === dateEnd.getFullYear()) {
                    setIsErrorDate(false)
                    // АПИ - гет имен каталогов
                    console.log(dateStart.getFullYear())
                    api.getCatalogNames(dateStart.getFullYear())
                        .then((data) => {
                            console.log(data)
                            setCatalogNames(data.message)
                        })

                    // принятые каталоги
                    setCatalogNames(['GIAC', 'ANC'])
                } else {
                    setCatalogNames([])
                    setErrorDateText('Выберите даты в рамках одного года')
                    setIsErrorDate(true)
                }
            } else {
                setCatalogNames([])
                setErrorDateText('Интервал дат некорректен')
                setIsErrorDate(true)
            }
        } else {
            setCatalogNames([])
            setErrorDateText('Интервал дат некорректен')
            setIsErrorDate(true)
        }
    }

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
                instruments: selectedId
            }
            // АПИ на старт расчета
            // startCalculate(reqData)
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
                isErrorOptions={isErrorOptions}
                getCatalogs={getCatalogs}
                dates={dates}
                options={options} />
            <Configuration
                onTelescope={openTelescope}
                rowData={resData.instruments}
                onAskCulculate={onAskCulculate}
                isResaltDownload={isResaltDownload}
                selectedId={selectedIdResDone}
                askDataToResultsDone={askDataToResultsDone} />
        </div>
    )
}

export default NewСalculation; 