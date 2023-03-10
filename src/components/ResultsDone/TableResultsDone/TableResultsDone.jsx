
import './TableResultsDone.css';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";

import { dataRows } from '../../../constans/changeResStructure'

const TableResultsDone = ({ rowDataTable }) => {
    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: '100%', height: '50vh' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

    console.log(rowDataTable)

    const [columnDefs, setColumnDefs] = useState([
        { field: 'idInstruments', headerName: "Номер средства", headerTooltip: "Номер средства" },
        { field: 'cod', headerName: "Название", headerTooltip: "Название средства", hide: true },
        { field: 'locname', headerName: "Местоположение", headerTooltip: "Местоположение" },
        { field: 'latitude', headerName: "Геодезическая широта, град", headerTooltip: "Геодезическая широта в градусах" },
        { field: 'longitude', headerName: "Геодезическая долгота, град", headerTooltip: "Геодезическая долгота в градусах" },
        { field: 'altitude', headerName: "Высота, м", headerTooltip: "Высота в метрах", hide: true },
        { field: 'aperture', headerName: "Апертура, см", headerTooltip: "Апертура в см", hide: true },
        { field: 'secondary_coefficient', headerName: "Коэффициент экранирования", headerTooltip: "Коэффициент экранирования", hide: true },
        { field: 'pixel_scale', headerName: "Масштаб пикселя, угл.с/px", headerTooltip: "Масштаб пикселя в угл.с/px", hide: true },
        { field: 'readout_noise', headerName: "Шум считывания, е", headerTooltip: "Шум считывания в е", hide: true },
        { field: 'fovx', headerName: "Поле зрения по X, град", headerTooltip: "Поле зрения по X в градусах", hide: true },
        { field: 'fovy', headerName: "Поле зрения по Y, град", headerTooltip: "Поле зрения по Y в градусах", hide: true },
        { field: 'frame_readout', headerName: "Время считывания кадра в буфер, с", headerTooltip: "Время считывания кадра в буфер в секундах", hide: true },
        { field: 'frame_flush', headerName: "Время сохранения кадра на ФС, с", headerTooltip: "Время сохранения кадра на ФС в секундах", hide: true },
        { field: 'task_switch_time', headerName: "Время на смену задания, с", headerTooltip: "Время на смену задания в секундах", hide: true },
        { field: 'stabilization_time', headerName: "Время на стабилизацию, с", headerTooltip: "Время на стабилизацию в секундах", hide: true },
        { field: 'mount_type', headerName: "Тип монтировки", headerTooltip: "Тип монтировки", hide: true },
        { field: 'slew_vel_alpha', headerName: "Скорость перенаведения по оси альфа, град/с", headerTooltip: "Скорость перенаведения по оси альфа, град/с", hide: true },
        { field: 'slew_vel_delta', headerName: "Скорость перенаведения по оси дельта, град/с", headerTooltip: "Скорость перенаведения по оси дельта, град/с", hide: true },
        { field: 'min_elevation', headerName: "Минимальный угол места, град", headerTooltip: "Минимальный угол места, град", hide: true },
        { field: 'transmittivity', headerName: "Коэффициент пропускания", headerTooltip: "Коэффициент пропускания", hide: true },
        { field: 'quantum_efficiency', headerName: "Квантовая эффективность V", headerTooltip: "Квантовая эффективность V", hide: true },
        { field: 'mode', headerName: "Режим работы", headerTooltip: "Режим работы", hide: true },
        { field: 'noko_twilight', headerName: "Работа по НОКО в сумерки", headerTooltip: "Работа по НОКО в сумерки", hide: true },
        { field: 'noko', headerName: "Работа по НОКО", headerTooltip: "Работа по НОКО", hide: true },
        { field: 'gso_survey', headerName: "Работа по геостационарной области", headerTooltip: "Работа по геостационарной области", hide: true }
    ]);


    const autoGroupColumnDef = useMemo(() => {
        return {
            headerValueGetter: (params) => `${params.colDef.headerName}`,
            width: 200,
            cellRendererParams: {
                suppressCount: true,
                checkbox: true,
            },
        };
    }, []);

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            wigth: 200,
            resizable: true,
        };
    }, []);

    useEffect(() => {
        console.clear()
    }, []);

    return (
        <div className="resdone__table">
            <div style={containerStyle}>
                <div style={gridStyle} className="ag-theme-alpine ">
                    <AgGridReact
                        ref={gridRef}
                        rowData={rowDataTable}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        autoGroupColumnDef={autoGroupColumnDef}
                        groupDisplayType={'multipleColumns'}
                        rowSelection='multiple'
                    ></AgGridReact>
                </div>
            </div>
        </div>
    );
}

export default TableResultsDone;