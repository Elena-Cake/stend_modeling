import React from "react";
import IntervalDate from "../IntervalDate/IntervalDate";
import './ResultsDone.css';

const ResultsDone = () => {
    return (
        <div className="resultsdone">
            <IntervalDate />
            <div className="table">table</div>
            <div className="charts">charts</div>
        </div>
    )
}

export default ResultsDone;