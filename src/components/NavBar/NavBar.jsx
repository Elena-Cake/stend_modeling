import React from "react";
import './NavBar.css';

import { NavLink } from "react-router-dom";

const NavBar = (isCulculating, openLoadPopup) => {

    const openLoadingPopup = () => {
        openLoadPopup()
    }
    return (
        <div className="navbar">
            <NavLink to="/culculate"
                className={(state) => state.isActive ?
                    `navbar__btn navbar__btn_active` : "navbar__btn"}>
                Новый расчет
            </NavLink>
            <NavLink to="/results"
                className={(state) => state.isActive ?
                    `navbar__btn navbar__btn_active` : "navbar__btn"}>
                Загрузить результаты
            </NavLink>
            <NavLink to="/resultsdone"
                className={(state) => state.isActive ?
                    `navbar__btn navbar__btn_active` : "navbar__btn"}>
                Последний расчет
            </NavLink>
            <button className={`navbar__calc ${isCulculating && "navbar__calc_visible"}`} onClick={openLoadingPopup}></button>
        </div>
    )
}

export default NavBar;