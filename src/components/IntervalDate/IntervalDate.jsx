import React from "react";
import './IntervalDate.css';


const IntervalDate = ({ onChangeDate, isErrorDate, errorDateText, dates }) => {
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
                    onChange={onChangeDate}
                    value={dates.date_start || ''} />
                <p className="inputs__text">до</p>
                <input
                    className="inputs__date"
                    type="date"
                    name="date_end"
                    onChange={onChangeDate}
                    value={dates.date_end || ''} />
            </div>
            <span className={`inputs__error ${isErrorDate && "inputs__error_visible"}`}>{errorDateText}</span>
        </div>
    )
}

export default IntervalDate;