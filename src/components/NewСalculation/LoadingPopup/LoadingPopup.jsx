import React from "react";
import './LoadingPopup.css';

const LoadingPopup = ({ isOpen, onClose }) => {
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
                    <h3 className="popup__title">Идет моделирование</h3>
                    <div className="popup__text">В данный момент идет расчет по другому запросу.
                        Вы можете прервать предыдущий расчет и запросить моделирование по
                        собранной конфигурации наблюдательной сети или дождаться
                        окончаня текущего моделирования.</div>
                    <button className="button__bottom">Прервать текущий расчет</button>
                    <button className="button__bottom">Результаты</button>
                </form>
            </div>
        </div>
    )
}

export default LoadingPopup;