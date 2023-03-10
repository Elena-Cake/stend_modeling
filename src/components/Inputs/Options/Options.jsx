import React, { useEffect, useState } from "react";
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";
import './Options.css';

const Options = ({ onChangeOptions, catalogNames, isErrorOptions, getCatalogs, options, isResaltDownload }) => {

    const [isChangeDefaultCatalog, setIsChangeDefaultCatalog] = useState(false)

    const onFirstChangeCatalogs = () => {
        setIsChangeDefaultCatalog(true)
        getCatalogs()
    }

    const catalogItems = catalogNames.map((item, i) => {
        // if (i === 0) { return <option key={i} defaultValue></option> }
        return <option key={i + 1}>{item}</option>
    })

    return (
        <div className="option">
            <div>
                {isResaltDownload &&
                    <label className="option__item">
                        <p className="form__label">Название НС</p>
                        <input
                            className="option__input"
                            readOnly
                            required
                            onChange={onChangeOptions}
                            value={options.name || ''}
                        />
                    </label>
                }
                <label className="option__select">
                    <p className="form__label">Каталог</p>
                    {!isChangeDefaultCatalog &&
                        <select
                            className="option__select option_options"
                            name="catalogue"
                            onChange={onChangeOptions}
                            onClick={onFirstChangeCatalogs}>
                            {catalogItems}
                        </select>
                    }
                    {isChangeDefaultCatalog &&
                        <select
                            className="option__select option_options"
                            name="catalogue"
                            onChange={onChangeOptions}
                            onClick={getCatalogs}>
                            <option key={0} value="" disabled selected>выберите каталог</option>
                            {catalogItems}
                        </select>
                    }
                </label>
            </div>
            <div className="option__items">
                <label className="option__select">
                    <p className="form__label">Угол погружения Солнца, град</p>
                    <select
                        className="option__select option_options"
                        name="sun_elevation"
                        onChange={onChangeOptions}>
                        <option selected={options.sun_elevation === 6}>6</option>
                        <option selected={options.sun_elevation === 12}>12</option>
                        <option selected={options.sun_elevation === 18}>18</option>
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
                        value={options.detectable_snr || ''}
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
                        value={options.max_exp || ''}
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
                        value={options.max_track_length || ''}
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
                        value={options.zenith_sky_brightness || ''}
                    />
                </label>
                <span className={`inputs__error ${isErrorOptions && "inputs__error_visible"}`}>Все поля обязательны</span>
            </div>

        </div>
    )
}

export default Options;