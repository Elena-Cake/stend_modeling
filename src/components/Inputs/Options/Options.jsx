import React from "react";
import './Options.css';

const Options = ({ }) => {
    return (
        <div className="option">
            <label className="option__select">
                <p className="form__label">Каталог</p>
                <select className="option__select option_options">
                    <option>1</option>
                    <option>2</option>
                </select>
            </label>
            <div className="option__items">
                <label className="option__select">
                    <p className="form__label">Угол погружения Солнца, град</p>
                    <select className="option__select option_options" name="sun_elevation">
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
                        placeholder="ведите номер средства"
                        required
                    />
                </label>
                <label className="option__item">
                    <p className="form__label">Максимальная экспозиция, с</p>
                    <input
                        name="max_exp"
                        className="option__input"
                        placeholder="ведите номер средства"
                        required
                    />
                </label>
                <label className="option__item">
                    <p className="form__label">Относительная длина трека (по полю зрения)</p>
                    <input
                        name="max_track_length"
                        className="option__input"
                        placeholder="ведите номер средства"
                        required
                    />
                </label>
                <label className="option__item">
                    <p className="form__label">Фон неба в зените, зв.вел/угл.с^2</p>
                    <input
                        name="zenith_sky_brightness"
                        className="option__input"
                        placeholder="ведите номер средства"
                        required
                    />
                </label>
            </div>
        </div>
    )
}

export default Options;