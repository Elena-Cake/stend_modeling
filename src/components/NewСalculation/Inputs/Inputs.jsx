import React from "react";
import './Inputs.css';

const Inputs = () => {
    return (
        <div className="inputs">
            <h1 className="inputs__title">
                Интервал моделирования
            </h1>
            <div className="inputs__interval">
                <p className="inputs__text">c</p>
                <input className="inputs__date" type="date" />
                <p className="inputs__text">по</p>
                <input className="inputs__date" type="date" />
            </div>
            <select className="inputs__select">
                <option>1</option>
                <option>2</option>
            </select>
            <button className="button__bottom">Найти</button>
        </div>
    )
}

export default Inputs;