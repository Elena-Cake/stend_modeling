import React from "react";
import './AddNSPopup.css';

const AddNSPopup = ({ isOpen, onClose }) => {
    const classPopup = `popup popup-addNS  ${isOpen ? 'popup_opened' : ''}`
    return (
        <div className={classPopup}>
            <div className="popup__container">
                <button onClick={onClose}
                    className="popup__btn-close"
                    type="button"
                    aria-label="закрыть окно">
                </button>
                <form className="popup__form" name="addPopup" >
                    <h3 className="popup__title">Добавить телескоп</h3>
                    <button className="button__bottom">Добавить в БД</button>
                </form>
            </div>
        </div>
    )
}

export default AddNSPopup;