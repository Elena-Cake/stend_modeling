import React from "react";
import './NavBar.css';

import { NavLink } from "react-router-dom";

const NavBar = (props) => {

    return (
        <div className="navbar">
            <NavLink to="/"
                className={(state) => state.isActive ?
                    `navbar__btn navbar__btn_active` : "navbar__btn"}>
                Новый расчет
            </NavLink>
            <NavLink to="/results"
                className={(state) => state.isActive ?
                    `navbar__btn navbar__btn_active` : "navbar__btn"}>
                Завершенные расчеты
            </NavLink>
            <NavLink to="/resultsdone"
                className={(state) => state.isActive ?
                    `navbar__btn navbar__btn_active` : "navbar__btn"}>
                Результаты моделирования
            </NavLink>
            <button className={`navbar__calc ${props.isCulculating && "navbar__calc_visible"}`} onClick={props.openLoadPopup}></button>
        </div>
    )
}

export default NavBar;