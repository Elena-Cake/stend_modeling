import React from "react";
import IntervalDate from "../IntervalDate/IntervalDate";
import Splider from "./Splider/Splider";
import './ResultsDone.css';
import TableResultsDone from "./TableResultsDone/TableResultsDone";

const ResultsDone = (props) => {
    return (
        <div>
            {props.isVisible &&
                <div className="resultsdone">
                    <IntervalDate />
                    <TableResultsDone />
                    <Splider />
                </div>}
            {!props.isVisible && <h2> Выберите расчет для загрузки на вкладке "Загрузить результаты" или запустите новый расчет</h2>}
        </div>
    )

}

export default ResultsDone;