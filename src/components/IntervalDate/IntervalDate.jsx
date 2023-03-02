import React from "react";
import './IntervalDate.css';

const IntervalDate = ({ dates }) => {
    return (
        <div className="intervaldate">
            <h1 className="title">
                Интервал моделирования
            </h1>
            <div className="inputs__interval">
                <p className="inputs__text">c</p>
                <input
                    className="inputs__date"
                    type="date"
                    name="date_start"
                    value={dates.date_start || ''}
                    readOnly />
                <p className="inputs__text">до</p>
                <input
                    className="inputs__date"
                    type="date"
                    name="date_end"
                    value={dates.date_end || ''}
                    readOnly />
            </div>
        </div>
    )
}

export default IntervalDate;