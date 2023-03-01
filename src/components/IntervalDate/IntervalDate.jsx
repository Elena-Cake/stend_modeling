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
                    value={dates.start_date || ''}
                    readOnly />
                <p className="inputs__text">до</p>
                <input
                    className="inputs__date"
                    type="date"
                    name="date_end"
                    value={dates.end_date || ''}
                    readOnly />
            </div>
        </div>
    )
}

export default IntervalDate;