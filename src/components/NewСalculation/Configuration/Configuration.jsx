import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import './Configuration.css';
import { NavLink } from "react-router-dom";



const Configuration = ({ onTelescope, rowData, onAskCulculate }) => {
    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: '100%', height: '55vh' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);


    console.log(rowData)

    const [columnDefs, setColumnDefs] = useState([
        { field: 'nsr', checkboxSelection: true },
        { field: 'cod' },
        { field: 'latitude' },
        { field: 'longitude' },
        { field: 'altitude' },
        { field: 'aperture' },
        { field: 'secondary_coefficient' },
        { field: 'pixel_scale', hide: true },
        { field: 'readout_noise', hide: true },
        { field: 'fovx', hide: true },
        { field: 'fovy', hide: true },
        { field: 'frame_readout', hide: true },
        { field: 'frame_flush', hide: true },
        { field: 'task_switch_time', hide: true },
        { field: 'stabilization_time', hide: true },
        { field: 'mount_type', hide: true },
        { field: 'slew_vel_alpha', hide: true },
        { field: 'slew_vel_delta', hide: true },
        { field: 'min_elevation' },
        { field: 'transmittivity' },
        { field: 'quantum_efficiency' },
        { field: 'mode' },
        { field: 'noko_twilight' },
        { field: 'noko' },
        { field: 'gso_survey' }
    ]);

    const autoGroupColumnDef = useMemo(() => {
        return {
            headerValueGetter: (params) => `${params.colDef.headerName}`,
            // minWidth: 350,
            cellRendererParams: {
                suppressCount: true,
                checkbox: true,
            },
        };
    }, []);


    const isFirstColumn = (params) => {
        var displayedColumns = params.columnApi.getAllDisplayedColumns();
        var thisIsFirstColumn = displayedColumns[0] === params.column;
        return thisIsFirstColumn;
    };

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 100,
            resizable: true,
            headerCheckboxSelection: isFirstColumn,
            checkboxSelection: isFirstColumn,
        };
    }, []);

    useEffect(() => {
        console.clear()
    }, []);

    // при нажатии запроса на расчет
    const handleAskCulculate =
        useCallback(() => {
            let selectedIds = []
            gridRef.current.api.forEachNode(function (node) {
                if (node.selected) { selectedIds = [...selectedIds, node.data.idInstruments] }
            });
            onAskCulculate(selectedIds)
        }, []);


    return (
        <div className="configuration">
            <h2 className="title">Конфигурация наблюдательной сети</h2>
            <button className="button__bottom" onClick={onTelescope}>Добавить НС в расчет</button>
            <div style={containerStyle}>
                <div style={gridStyle} className="ag-theme-alpine ">
                    <AgGridReact
                        ref={gridRef}
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        autoGroupColumnDef={autoGroupColumnDef}
                        groupDisplayType={'multipleColumns'}
                        animateRows={true}
                        rowSelection='multiple'
                    ></AgGridReact>
                </div>
            </div>
            <button className="button__bottom" onClick={handleAskCulculate}>Запустить расчет</button>

        </div>
    )
}

export default Configuration; 