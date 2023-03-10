import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import './Configuration.css';

const Configuration = ({ onTelescope, rowData, onAskCulculate, isResaltDownload, selectedId, askDataToResultsDone }) => {
    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: '100%', height: '50vh' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

    const [columnDefs, setColumnDefs] = useState([
        { checkboxSelection: true, maxWidth: 50, pinned: true },
        { field: 'nsr', headerName: "Номер средства", headerTooltip: "Номер средства" },
        { field: 'cod', headerName: "Название", headerTooltip: "Название средства" },
        { field: 'locname', headerName: "Местоположение", headerTooltip: "Местоположение" },
        { field: 'latitude', headerName: "Геодезическая широта, град", headerTooltip: "Геодезическая широта в градусах", hide: true },
        { field: 'longitude', headerName: "Геодезическая долгота, град", headerTooltip: "Геодезическая долгота в градусах", hide: true },
        { field: 'altitude', headerName: "Высота, м", headerTooltip: "Высота в метрах" },
        { field: 'aperture', headerName: "Апертура, см", headerTooltip: "Апертура в см" },
        { field: 'secondary_coefficient', headerName: "Коэффициент экранирования", headerTooltip: "Коэффициент экранирования" },
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
        { field: 'min_elevation', headerName: "Минимальный угол места, град", headerTooltip: "Минимальный угол места, град" },
        { field: 'transmittivity', headerName: "Коэффициент пропускания", headerTooltip: "Коэффициент пропускания" },
        { field: 'quantum_efficiency', headerName: "Квантовая эффективность V", headerTooltip: "Квантовая эффективность V" },
        { field: 'mode', headerName: "Режим работы", headerTooltip: "Режим работы" },
        { field: 'noko_twilight', headerName: "Работа по НОКО в сумерки", headerTooltip: "Работа по НОКО в сумерки" },
        { field: 'noko', headerName: "Работа по НОКО", headerTooltip: "Работа по НОКО" },
        { field: 'gso_survey', headerName: "Работа по геостационарной области", headerTooltip: "Работа по геостационарной области" }
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


    const isFirstColumn = (params) => {
        var displayedColumns = params.columnApi.getAllDisplayedColumns();
        var thisIsFirstColumn = displayedColumns[0] === params.column;
        return thisIsFirstColumn;
    };

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            wigth: 200,
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
                if (node.selected) { selectedIds = [...selectedIds, node.data] }
            });
            onAskCulculate(selectedIds)
        }, []);
    // при нажатии запроса на показ результата
    const handleAskResult = () => {
        askDataToResultsDone(selectedId)
    }

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
                        rowSelection='multiple'
                    ></AgGridReact>
                </div>
            </div>
            <div className='container__button'>
                <button className="button__bottom" onClick={handleAskCulculate}>Запустить расчет</button>
                {isResaltDownload &&
                    <div>

                        <button
                            className="button__bottom"
                            onClick={handleAskResult}>
                            Посмотреть результаты расчета №{selectedId}
                        </button>
                    </div>}
            </div>
        </div>
    )
}

export default Configuration; 