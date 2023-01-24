
import './TableResultsDone.css';
import React, { useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


import configuration from '../../../constans/configurations'

const TableResultsDone = ({  }) => {

    const containerStyle = useMemo(() => ({ width: '100%', height: '55vh' }), []);
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
                    voko: res.configurations[key].instruments[keyInst].voko,
                    noko: res.configurations[key].instruments[keyInst].noko,
                    noko_twilight: res.configurations[key].instruments[keyInst].noko_twilight,
                    gso_survey: res.configurations[key].instruments[keyInst].gso_survey
                }
                rowDataGenerated.push(item)
            }
        }
        return rowDataGenerated
    }

    changeResStructure(configuration)


    const [rowData, setRowData] = useState(
        changeResStructure(configuration)
    ); // Set rowData to Array of Objects, one Object per Row

    // Each Column Definition results in one Column.
    const [columnDefs, setColumnDefs] = useState([
        { field: 'idInstruments', checkboxSelection: true },
        { field: 'name' },
        { field: 'latitude' },
        { field: 'longitude' },
        { field: 'mode' },
        { field: 'voko' },
        { field: 'noko' },
        { field: 'noko_twilight' },
        { field: 'gso_survey' }
    ]);


    const autoGroupColumnDef = useMemo(() => {
        return {
            headerValueGetter: (params) => `${params.colDef.headerName}`,
            minWidth: 150,
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

    return (
        <div style={containerStyle}>
        <div style={gridStyle} className="ag-theme-alpine ">
            <AgGridReact
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
    )
}

export default TableResultsDone;