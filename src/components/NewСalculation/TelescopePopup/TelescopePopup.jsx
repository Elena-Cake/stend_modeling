import React, { useCallback, useMemo, useRef, useState } from 'react';

import './TelescopePopup.css';


import configuration from '../../../constans/configurations'

const TelescopePopup = ({ isOpen, onClose, addNs }) => {
    const classPopup = `popup popup-telescope  ${isOpen ? 'popup_opened' : ''}`


    return (
        <div className={classPopup}>
            <div className="popup__container popup__telescope">
                <button onClick={onClose}
                    className="popup__btn-close"
                    type="button"
                    aria-label="закрыть окно">
                </button>
                <div className="popup__form" name="addPopup" >
                    <h3 className="popup__title">Телескопы</h3>
                    <button className="button__bottom" onClick={addNs}>Добавить в БД</button>
                    <div >
                        table
                    </div>
                    <button className="button__bottom">Добавить в расчет</button>
                </div>
            </div>
        </div>
    )
}

export default TelescopePopup;