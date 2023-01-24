import React, { useCallback, useMemo, useRef, useState } from 'react';

import './TelescopePopup.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import configuration from '../../constans/configurations'

const TelescopePopup = ({ isOpen, onClose, addNs }) => {
    const classPopup = `popup popup-telescope  ${isOpen ? 'popup_opened' : ''}`


    const containerStyle = useMemo(() => ({ width: '100%', height: '65vh' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

    const changeResStructure = (res) => {
        const rowDataGenerated = [];
        for (let key in res.configurations) {
            for (let keyInst in res.configurations[key].instruments) {
                const item = {
                    idInstruments: keyInst,
                    name: res.configurations[key].instruments[keyInst].name,
                    latitude: res.configurations[key].instruments[keyInst].latitude,
                    longitude: res.configurations[key].instruments[keyInst].longitude,
                    mode: res.configurations[key].instruments[keyInst].mode,
                    voko: res.configurations[key].instruments[keyInst].voko
                }
                rowDataGenerated.push(item)
            }
        }
        return rowDataGenerated
    }

    changeResStructure(configuration)


    function deleteBtn(params) {
        return (
            <button className="button__table button__delete">
            </button>
        );
    }

    const [rowData, setRowData] = useState(
        changeResStructure(configuration)
    ); // Set rowData to Array of Objects, one Object per Row

    // Each Column Definition results in one Column.
    const [columnDefs, setColumnDefs] = useState([
        { field: 'idInstruments' },
        { field: 'name' },
        { field: 'latitude' },
        { field: 'longitude' },
        { field: 'mode' },
        { field: '', cellRenderer: deleteBtn, resizable: false, sortable: false, width: 80, maxWidth: 80, filter: false }
    ]);
    const defaultColDef = useMemo(() => {
        return {
            flex: 0,
            minWidth: 50,
            width: 190,
            maxWidth: 250,
            sortable: true,
            resizable: true,
            filter: true,
            editable: true
        };
    }, []);
    const autoGroupColumnDef = useMemo(() => {
        return {
            headerValueGetter: (params) => `${params.colDef.headerName}`,
            minWidth: 140,
            cellRendererParams: {
                suppressCount: true,
                checkbox: true,
            },
        };
    }, []);

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
                    <div style={containerStyle}>
                        <div style={gridStyle} className="ag-theme-alpine ">
                            <AgGridReact
                                rowData={rowData}
                                columnDefs={columnDefs}
                                defaultColDef={defaultColDef}
                                autoGroupColumnDef={autoGroupColumnDef}
                                groupDisplayType={'multipleColumns'}
                                animateRows={true}
                                sideBar={true}
                                stopEditingWhenCellsLoseFocus={true}
                                groupDefaultExpanded={1}
                            ></AgGridReact>
                        </div>
                    </div>
                    <button className="button__bottom">Добавить в расчет</button>
                </div>
            </div>
        </div>
    )
}

export default TelescopePopup;