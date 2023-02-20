import React from "react";
import './IntervalDate.css';

const IntervalDate = ({ onChangeDate }) => {
    return (
        <div className="intervaldate">
            <h1 className="title">
                Интервал моделирования
            </h1>
            <div className="inputs__interval">
                <p className="inputs__text">c</p>
                <input className="inputs__date" type="date" name="date_start" onChange={onChangeDate} />
                <p className="inputs__text">до</p>
                <input className="inputs__date" type="date" name="date_end" onChange={onChangeDate} />
            </div>
        </div>
    )
}

export default IntervalDate;