import React from "react";
import './NavBar.css';

import { NavLink } from "react-router-dom";

const NavBar = () => {
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
        </div>
    )
}

export default NavBar;