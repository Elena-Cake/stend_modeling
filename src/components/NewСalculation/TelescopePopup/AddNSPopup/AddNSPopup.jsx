import React from "react";
import './AddNSPopup.css';

import { useFormAndValidation } from "../../../../hooks/useFormAndValidation";



const AddNSPopup = ({ isOpen, onClose, onAddTelescope }) => {
    const classPopup = `popup popup-addNS  ${isOpen ? 'popup_opened' : ''}`
    const { values, handleChange, resetForm } = useFormAndValidation()

    function handleAddTelescope(e) {
        e.preventDefault();
        onAddTelescope(
            values.nsr, values.cod,
            values.latitude, values.longitude,
            values.altitude, values.aperture,
            values.secondary_coefficient, values.pixel_scale,
            values.readout_noise, values.fovx,
            values.fovy, values.frame_readout,
            values.frame_flush, values.task_switch_time,
            values.stabilization_time, values.mount_type,
            values.slew_vel_alpha, values.slew_vel_delta,
            values.min_elevation, values.transmittivity,
            values.quantum_efficiency, values.mode,
            values.noko_twilight, values.noko,
            values.gso_survey)
        e.target.reset()
    }

    return (
        <div className={classPopup}>
            <div className="popup__container popup__addNS">
                <button onClick={onClose}
                    className="popup__btn-close"
                    type="button"
                    aria-label="закрыть окно">
                </button>
                <form className="popup__form_add form__addNS" name="addNS" onSubmit={handleAddTelescope}>
                    <h3 className="popup__title">Добавить телескоп</h3>
                    <label className="form__field">
                        <p className="form__label">Номер средства</p>
                        <input
                            name="nsr"
                            className="form__input"
                            placeholder="ведите номер средства"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Название</p>
                        <input
                            name="cod"
                            className="form__input"
                            placeholder="ведите название"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Геодезическая широта, град</p>
                        <input
                            name="latitude"
                            className="form__input"
                            placeholder="ведите широту в градусах"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Геодезическая долгота, град</p>
                        <input
                            name="longitude"
                            className="form__input"
                            placeholder="ведите долготу в градусах"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Высота, м</p>
                        <input
                            name="altitude"
                            className="form__input"
                            placeholder="ведите высоту в метрах"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Апертура, см</p>
                        <input
                            name="aperture"
                            className="form__input"
                            placeholder="ведите апертуру в см"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Коэффициент экранирования</p>
                        <input
                            name="secondary_coefficient"
                            className="form__input"
                            placeholder="ведите коэффициент экранирования"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Масштаб пикселя, угл.с/px</p>
                        <input
                            name="pixel_scale"
                            className="form__input"
                            placeholder="ведите масштаб пикселя"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Шум считывания, е</p>
                        <input
                            name="readout_noise"
                            className="form__input"
                            placeholder="ведите шум считывания"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Поле зрения по X, град</p>
                        <input
                            name="fovx"
                            className="form__input"
                            placeholder="ведите поле зрения по X"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Поле зрения по Y, град</p>
                        <input
                            name="fovy"
                            className="form__input"
                            placeholder="ведите поле зрения по Y"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Время считывания кадра в буфер, с</p>
                        <input
                            name="frame_readout"
                            className="form__input"
                            placeholder="ведите время считывания кадра в буфер"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Время сохранения кадра на ФС, с</p>
                        <input
                            name="frame_flush"
                            className="form__input"
                            placeholder="ведите время сохранения кадра на ФС"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Время на смену задания, с</p>
                        <input
                            name="task_switch_time"
                            className="form__input"
                            placeholder="ведите время на смену задания"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Время на стабилизацию, с</p>
                        <input
                            name="stabilization_time"
                            className="form__input"
                            placeholder="ведите время на стабилизацию"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    {/* ____________select______________ */}
                    <label className="form__field">
                        <p className="form__label">Тип монтировки</p>
                        <select name="stabilization_time"
                            className="form__input"
                            onChange={handleChange}>
                            <option>альтазимутальная</option>
                            <option>экваториальная</option>
                        </select>
                    </label>
                    <label className="form__field">
                        <p className="form__label">Скорость перенаведения по оси альфа, град/с</p>
                        <input
                            name="slew_vel_alpha"
                            className="form__input"
                            placeholder="ведите cкорость перенаведения по оси альфа"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Скорость перенаведения по оси дельта, град/с</p>
                        <input
                            name="slew_vel_delta"
                            className="form__input"
                            placeholder="ведите скорость перенаведения по оси дельта"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Минимальный угол места, град</p>
                        <input
                            name="min_elevation"
                            className="form__input"
                            placeholder="ведите минимальный угол места"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Коэффициент пропускания</p>
                        <input
                            name="transmittivity"
                            className="form__input"
                            placeholder="ведите коэффициент пропускания"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">Квантовая эффективность, V</p>
                        <input
                            name="quantum_efficiency"
                            className="form__input"
                            placeholder="ведите квантовую эффективность"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    {/* _________select___________ */}
                    <label className="form__field">
                        <p className="form__label">Режим работы</p>
                        <select name="mode"
                            className="form__input"
                            onChange={handleChange}>
                            <option>обзор</option>
                            <option>ЦУ</option>
                        </select>
                    </label>
                    {/* _________checkbox___________ */}
                    <label className="form__field">
                        <p className="form__label">Работа по НОКО в сумерки</p>
                        <input
                            name="noko_twilight"
                            type="checkbox"
                            className="form__input"
                            onChange={handleChange}
                        />
                    </label>
                    {/* _________checkbox___________ */}
                    <label className="form__field">
                        <p className="form__label">Работа по НОКО</p>
                        <input
                            name="noko"
                            className="form__input"
                            type="checkbox"
                            onChange={handleChange}
                        />
                    </label>
                    {/* _________checkbox___________ */}
                    <label className="form__field">
                        <p className="form__label">Работа по геостационарной области</p>
                        <input
                            name="gso_survey"
                            className="form__input"
                            type="checkbox"
                            onChange={handleChange}
                        />
                    </label>
                    <div>
                        <button className="button__bottom form__btn">Добавить в расчет</button>
                        <button className="button__bottom form__btn">Добавить из базы</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddNSPopup;