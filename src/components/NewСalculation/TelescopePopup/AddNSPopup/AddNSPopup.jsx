import React from "react";
import './AddNSPopup.css';

import { useState, useCallback } from "react";

export function useFormAndValidation() {
    const [values, setValues] = useState({});

    const handleChange = (event) => {
        const { value, name } = event.target;
        setValues({ ...values, [name]: value });
    };

    const resetForm = useCallback((newValues = {}) => {
        setValues(newValues);
    }, [setValues]);

    return { values, handleChange, resetForm, setValues };
}

const AddNSPopup = ({ isOpen, onClose, onAddTelescope }) => {
    const classPopup = `popup popup-addNS  ${isOpen ? 'popup_opened' : ''}`
    const { values, handleChange, resetForm } = useFormAndValidation()

    function handleAddTelescope(e) {
        e.preventDefault();
        onAddTelescope(values.idInstrument, values.name)
    }

    return (
        <div className={classPopup}>
            <div className="popup__container popup__addNS">
                <button onClick={onClose}
                    className="popup__btn-close"
                    type="button"
                    aria-label="закрыть окно">
                </button>
                <form className="popup__form form__addNS" name="addNS" onSubmit={handleAddTelescope}>
                    <h3 className="popup__title">Добавить телескоп</h3>
                    <label className="form__field">
                        <p className="form__label">id</p>
                        <input
                            name="idInstrument"
                            className="form__input"
                            placeholder="ведите id"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">имя</p>
                        <input
                            name="name"
                            className="form__input"
                            placeholder="ведите имя"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">что-то важное</p>
                        <input
                            name="mode"
                            className="form__input"
                            placeholder="ведите что-то важное"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <button className="button__bottom form__btn">Добавить в БД</button>
                </form>
            </div>
        </div>
    )
}

export default AddNSPopup;