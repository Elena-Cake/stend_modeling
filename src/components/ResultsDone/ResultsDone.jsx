import React, { useEffect, useState } from "react";
import IntervalDate from "../IntervalDate/IntervalDate";
import Splider from "./Splider/Splider";
import './ResultsDone.css';
import TableResultsDone from "./TableResultsDone/TableResultsDone";

const ResultsDone = (props) => {

    console.log(props.data)
    const [intervalDates, setIntervalDates] = useState({})
    const [instruments, setInstruments] = useState([])

    useEffect(() => {
        setIntervalDates({
            end_date: props.data.end_date,
            start_date: props.data.start_date
        })
        setInstruments(props.data.instruments)
    }, [props.data])

    return (
        <div>
            {props.isVisible &&
                <div className="resultsdone">
                    <IntervalDate dates={intervalDates} />
                    <TableResultsDone instruments={instruments} />
                    {/* <Splider data={props.data} /> */}
                </div>}
            {!props.isVisible && <h2> Выберите расчет для загрузки на вкладке "Загрузить результаты" или запустите новый расчет</h2>}
        </div>
    )

}

export default ResultsDone;