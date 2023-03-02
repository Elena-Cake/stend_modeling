import React, { useEffect, useState } from "react";
import Splider from "./Splider/Splider";
import './ResultsDone.css';
import TableResultsDone from "./TableResultsDone/TableResultsDone";
import IntervalDateDone from "./IntervalDate/IntervalDate";

const ResultsDone = (props) => {

    const [intervalDates, setIntervalDates] = useState({})
    const [instruments, setInstruments] = useState([])

    useEffect(() => {
        console.log(props.data)
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
                    <IntervalDateDone dates={intervalDates} />
                    <TableResultsDone instruments={instruments} />
                    <Splider data={props.data} />
                </div>}
            {!props.isVisible && <h2> Выберите расчет для загрузки на вкладке "Завершенные расчеты" или запустите новый расчет</h2>}
        </div>
    )

}

export default ResultsDone;