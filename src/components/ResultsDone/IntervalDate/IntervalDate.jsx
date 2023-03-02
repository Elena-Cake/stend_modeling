import React from "react";
import './IntervalDate.css';

const IntervalDateDone = ({ dates }) => {
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
                    name="start_date"
                    value={dates.start_date || ''}
                    readOnly />
                <p className="inputs__text">до</p>
                <input
                    className="inputs__date"
                    type="date"
                    name="end_date"
                    value={dates.end_date || ''}
                    readOnly />
            </div>
        </div>
    )
}

export default IntervalDateDone;