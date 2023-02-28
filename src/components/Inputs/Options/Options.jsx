import React, { useState } from "react";
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";
import './Options.css';

const Options = ({ onChangeOptions, catalogNames, isErrorOptions }) => {

    const catalogItems = catalogNames.map((item, i) => {
        if (i === 0) { return <option >{item}</option> }
        return <option selected >{item}</option>
    })

    return (
        <div className="option">
            <label className="option__select">
                <p className="form__label">Каталог</p>
                <select className="option__select option_options" name="catalog" onChange={onChangeOptions}>
                    {catalogItems}
                </select>
            </label>
            <div className="option__items">
                <label className="option__select">
                    <p className="form__label">Угол погружения Солнца, град</p>
                    <select className="option__select option_options" name="sun_elevation" onChange={onChangeOptions}>
                        <option>6</option>
                        <option>12</option>
                        <option>18</option>
                    </select>
                </label>
                <label className="option__item">
                    <p className="form__label">Предельное ОСШ</p>
                    <input
                        name="detectable_snr"
                        className="option__input"
                        placeholder="ведите ОСШ"
                        required
                        onChange={onChangeOptions}
                    />
                </label>
                <label className="option__item">
                    <p className="form__label">Максимальная экспозиция, с</p>
                    <input
                        name="max_exp"
                        className="option__input"
                        placeholder="ведите экспозицию"
                        required
                        onChange={onChangeOptions}
                    />
                </label>
                <label className="option__item">
                    <p className="form__label">Относительная длина трека (по полю зрения)</p>
                    <input
                        name="max_track_length"
                        className="option__input"
                        placeholder="ведите длину"
                        required
                        onChange={onChangeOptions}
                    />
                </label>
                <label className="option__item">
                    <p className="form__label">Фон неба в зените, зв.вел/угл.с^2</p>
                    <input
                        name="zenith_sky_brightness"
                        className="option__input"
                        placeholder="ведите фон неба"
                        required
                        onChange={onChangeOptions}
                    />
                </label>
                <span className={`inputs__error ${isErrorOptions && "inputs__error_visible"}`}>Все поля обязательны</span>
            </div>

        </div>
    )
}

export default Options;