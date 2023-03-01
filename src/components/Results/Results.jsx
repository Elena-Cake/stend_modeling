
import './Results.css';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import configuration from '../../constans/configurations'
import { NavLink } from 'react-router-dom';

import { newCulc } from '../../constans/newCalc';
import { api } from '../../utils/api';


const Results = ({ onAskConfiguration, onShowResults, onSetDataToNewCalculation, onSetDataToResultsDone }) => {
    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: '100%', height: '75vh', marginBottom: '50px' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

    const changeResStructure = (res) => {
        const rowDataGenerated = [];
        for (let key in res.configurations) {
            for (let keyInst in res.configurations[key].instruments) {
                const pathToInstrumentData = res.configurations[key].instruments[keyInst]
                const item = {
                    configuration: key,
                    idInstruments: keyInst,
                    cod: pathToInstrumentData.cod,
                    locname: pathToInstrumentData.locname,
                    latitude: pathToInstrumentData.latitude,
                    longitude: pathToInstrumentData.longitude,
                    altitude: pathToInstrumentData.altitude,
                    aperture: pathToInstrumentData.aperture,
                    secondary_coefficient: pathToInstrumentData.secondary_coefficient,
                    pixel_scale: pathToInstrumentData.pixel_scale,
                    readout_noise: pathToInstrumentData.readout_noise,
                    fovx: pathToInstrumentData.fovx,
                    fovy: pathToInstrumentData.fovy,
                    frame_readout: pathToInstrumentData.frame_readout,
                    frame_flush: pathToInstrumentData.frame_flush,
                    task_switch_time: pathToInstrumentData.task_switch_time,
                    stabilization_time: pathToInstrumentData.stabilization_time,
                    mount_type: pathToInstrumentData.mount_type,
                    slew_vel_alpha: pathToInstrumentData.slew_vel_alpha,
                    slew_vel_delta: pathToInstrumentData.slew_vel_delta,
                    min_elevation: pathToInstrumentData.min_elevation,
                    transmittivity: pathToInstrumentData.transmittivity,
                    quantum_efficiency: pathToInstrumentData.quantum_efficiency,
                    mode: pathToInstrumentData.mode,
                    noko_twilight: pathToInstrumentData.noko_twilight,
                    noko: pathToInstrumentData.noko,
                    gso_survey: pathToInstrumentData.gso_survey
                }
                rowDataGenerated.push(item)
            }
        }
        return rowDataGenerated
    }

    // заполнение таблицы
    const [rowData, setRowData] = useState(
        changeResStructure(configuration)
    );

    // Each Column Definition results in one Column.
    const [columnDefs, setColumnDefs] = useState([
        { field: 'configuration', rowGroup: true, hide: true, checkboxSelection: true },
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

    const checkbox = (params) => {
        return params.node.group === true;
    };

    const isFirstColumn = (params) => {
        var displayedColumns = params.columnApi.getAllDisplayedColumns();
        var thisIsFirstColumn = displayedColumns[0] === params.column;
        return thisIsFirstColumn;
    };

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 100,
            sortable: true,
            filter: true,
            resizable: true,
            cellRendererParams: {
                checkbox,
            },
        };
    }, []);
    const autoGroupColumnDef = useMemo(() => {
        return {
            headerName: 'Номер расчета',
            field: 'idInstruments',
            minWidth: 150,
            cellRenderer: 'agGroupCellRenderer'
        };
    }, []);

    // загрузить в конструктор
    const handleAskResults = useCallback(() => {
        let selectedId
        gridRef.current.api.forEachNode(function (node) {
            if (node.selected) { selectedId = node.key }
        });
        onAskConfiguration(selectedId)
        // АПИ - запросить данные для конструктора
        // api.getNewCalc(selectedId)
        onSetDataToNewCalculation(newCulc)
    }, []);

    // загрузить результаты
    const handleShowResults = useCallback(() => {
        let selectedId
        gridRef.current.api.forEachNode(function (node) {
            if (node.selected) { selectedId = node.key }
        });
        onShowResults(selectedId)
        // АПИ - запросить данные для готового расчета
        // api.getResultsDone(selectedId)
        onSetDataToResultsDone(newCulc)
    }, []);

    useEffect(() => {
        console.clear()
        // АПИ - запрос готовых расчетов
        // api.getResult()
        // .then((res) => setRowData(res))
    }, []);

    return (
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
                ></AgGridReact>
            </div>
            <div className='button_container'>
                <button className="button__navlink" onClick={handleAskResults}>
                    <NavLink to="/culculate" className="navlink__decoration">Загрузить конфигурацию</NavLink>
                </button>
                <button className="button__navlink" onClick={handleShowResults}>
                    <NavLink to="/resultsdone" className="navlink__decoration">Показать результаты расчета</NavLink>
                </button>
            </div>
        </div>
    );
}

export default Results;