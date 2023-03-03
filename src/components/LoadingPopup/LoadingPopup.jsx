import React from "react";
import './LoadingPopup.css';

const LoadingPopup = ({
    isOpen, onClose, dataLog,
    textPopup = { text: "ой", isError: true },
    dataLogMessage = '', abortCulculate,
    isCulculating
}) => {
    const classPopup = `popup popup-loading ${isOpen ? 'popup_opened' : ''}`

    const onClosePopup = (e) => {
        e.preventDefault()
        onClose()
    }

    return (
        <div className={classPopup}>
            <div className="popup__container popup__warning">
                <button onClick={onClose}
                    className="popup__btn-close"
                    type="button"
                    aria-label="закрыть окно">
                </button>
                <form className="popup__form" name="addPopup" >
                    <h3 className={`popup__title ${textPopup.isError && 'popup__title_type_error'}`}>{textPopup.text}</h3>
                    <div className="popup__text">{dataLogMessage}</div>
                    <div className="popup__log">
                        {dataLog}
                    </div>
                    <button className=" popup__button" onClick={onClosePopup}>Продолжить</button>
                    {isCulculating &&
                        <button className=" popup__button" onClick={abortCulculate}>Прервать текущий расчет</button>}
                </form>
            </div>
        </div>
    )
}

export default LoadingPopup;

