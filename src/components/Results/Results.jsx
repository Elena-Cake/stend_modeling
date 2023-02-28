

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './Results.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import configuration from '../../constans/configurations'
import { NavLink } from 'react-router-dom';
import { newCulc } from '../../constans/newCalc';


const Results = ({ onAskConfiguration, onShowResults, onSetDataToNewCalculation }) => {
    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: '100%', height: '75vh' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

    const [selectedProducts9, setSelectedProducts9] = useState([]);


    const SelecteChange = (e) => {
        //     setSelectedProducts9([e.value, ...selectedProducts9])
        //     console.log(e.value)
    }

    // заполнение таблицы
    const [rowData, setRowData] = useState([]);

    // Each Column Definition results in one Column.
    const [columnDefs, setColumnDefs] = useState([
        { field: 'configuration', rowGroup: true, hide: true, checkboxSelection: true },
        { field: 'name' },
        { field: 'latitude' },
        { field: 'longitude' },
        { field: 'mode' },
        { field: 'voko' },
        { field: 'noko' },
        { field: 'noko_twilight' },
        { field: 'gso_survey' }
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
            headerName: 'Instruments',
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
    }, []);

    useEffect(() => {
        console.clear()
        // АПИ - запрос готовых расчетов
        // setRowData(res)
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

                ></AgGridReact>
            </div>
            <button className="button__bottom" onClick={handleAskResults}>
                <NavLink to="/culculate" className="navlink__decoration">Загрузить конфигурацию</NavLink>
            </button>
            <button className="button__bottom" onClick={handleShowResults}>
                <NavLink to="/resultsdone" className="navlink__decoration">Показать результаты расчета</NavLink>
            </button>
        </div>


    );
}

export default Results;