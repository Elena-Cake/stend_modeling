import React from "react";
import './AddNSPopup.css';

const AddNSPopup = ({ isOpen, onClose }) => {
    const classPopup = `popup popup-addNS  ${isOpen ? 'popup_opened' : ''}`
    return (
        <div className={classPopup}>
            <div className="popup__container popup__addNS">
                <button onClick={onClose}
                    className="popup__btn-close"
                    type="button"
                    aria-label="закрыть окно">
                </button>
                <form className="popup__form form__addNS" name="addNS" >
                    <h3 className="popup__title">Добавить телескоп</h3>
                    <label className="form__field">
                        <p className="form__label">название</p>
                        <input
                            className="form__input"
                            placeholder="ведите название"
                            required
                        />
                    </label>
                    <label className="form__field">
                        <p className="form__label">что-то важное</p>
                        <input
                            className="form__input"
                            placeholder="ведите что-то важное"
                            required
                        />
                    </label>
                    <button className="button__bottom form__btn">Добавить в БД</button>
                </form>
            </div>
        </div>
    )
}

export default AddNSPopup;