import React, { useCallback, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';

import './Configuration.css';
import { NavLink } from "react-router-dom";


import configuration from '../../../constans/configurations'


const Configuration = ({ onTelescope, onLoadPopup }) => {


    return (
        <div className="configuration">
            <h2 className="title">Конфигурация наблюдательной сети</h2>
            <button className="button__bottom" onClick={onTelescope}>Добавить НС в расчет</button>
            <div >
                table
            </div>
            <button className="button__bottom" onClick={onLoadPopup}>Запустить расчет</button>

            <NavLink to="/resultsdone"
                className="result__link-btn">
                <button className="button__bottom">Результаты</button>
            </NavLink>
        </div>
    )
}

export default Configuration; 