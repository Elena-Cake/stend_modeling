
import './Results.css';

// фильтры
// __________________________________________________________________

// import React, { useState, useEffect } from 'react';
// import { classNames } from 'primereact/utils';
// import { FilterMatchMode } from 'primereact/api';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { InputText } from 'primereact/inputtext';
// import { Dropdown } from 'primereact/dropdown';
// import { MultiSelect } from 'primereact/multiselect';
// import { TriStateCheckbox } from 'primereact/tristatecheckbox';
// import "primereact/resources/themes/lara-light-indigo/theme.css";

// export class CustomerService {

//     getCustomersSmall() {
//         return fetch('./data.json').then(res => res.json())
//             .then(d => d.data);
//     }

//     getCustomersMedium() {
//         return fetch('./data.json').then(res => res.json())
//             .then(d => d.data);
//     }

//     getCustomersLarge() {
//         return fetch('./data.json').then(res => res.json())
//             .then(d => d.data);
//     }

//     getCustomersXLarge() {
//         return fetch('./data.json').then(res => res.json())
//             .then(d => d.data);
//     }

//     getCustomers(params) {
//         const queryParams = params ? Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&') : '';
//         return fetch('https://www.primefaces.org/data/customers?' + queryParams).then(res => res.json())
//     }
// }
// const Results = () => {
//     const [customers2, setCustomers2] = useState(null);
//     const [filters2, setFilters2] = useState({
//         'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
//         'name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
//         'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
//         'representative': { value: null, matchMode: FilterMatchMode.IN },
//         'status': { value: null, matchMode: FilterMatchMode.EQUALS },
//         'verified': { value: null, matchMode: FilterMatchMode.EQUALS }
//     });
//     const [globalFilterValue2, setGlobalFilterValue2] = useState('');
//     const [loading2, setLoading2] = useState(true);
//     const representatives = [
//         { name: "Amy Elsner", image: 'amyelsner.png' },
//         { name: "Anna Fali", image: 'annafali.png' },
//         { name: "Asiya Javayant", image: 'asiyajavayant.png' },
//         { name: "Bernardo Dominic", image: 'bernardodominic.png' },
//         { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
//         { name: "Ioni Bowcher", image: 'ionibowcher.png' },
//         { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
//         { name: "Onyama Limba", image: 'onyamalimba.png' },
//         { name: "Stephen Shaw", image: 'stephenshaw.png' },
//         { name: "XuXue Feng", image: 'xuxuefeng.png' }
//     ];

//     const statuses = [
//         'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
//     ];

//     const customerService = new CustomerService();

//     useEffect(() => {
//         customerService.getCustomersLarge().then(data => {
//             setCustomers2(getCustomers(data));
//             console.log(setCustomers2(getCustomers(data)))
//             setLoading2(false)
//         });

//     }, []); // eslint-disable-line react-hooks/exhaustive-deps


//     const getCustomers = (data) => {
//         return [...data || []].map(d => {
//             d.date = new Date(d.date);
//             return d;
//         });
//     }

//     const onGlobalFilterChange2 = (e) => {
//         const value = e.target.value;
//         let _filters2 = { ...filters2 };
//         _filters2['global'].value = value;

//         setFilters2(_filters2);
//         setGlobalFilterValue2(value);
//     }

//     const renderHeader2 = () => {
//         return (
//             <div className="flex justify-content-end">
//                 <span className="p-input-icon-left">
//                     <i className="pi pi-search" />
//                     <InputText value={globalFilterValue2} onChange={onGlobalFilterChange2} placeholder="Keyword Search" />
//                 </span>
//             </div>
//         )
//     }

//     const countryBodyTemplate = (rowData) => {
//         return (
//             <React.Fragment>
//                 <img alt="flag" src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width={30} />
//                 <span className="image-text">{rowData.country.name}</span>
//             </React.Fragment>
//         );
//     }

//     const representativeBodyTemplate = (rowData) => {
//         const representative = rowData.representative;
//         return (
//             <React.Fragment>
//                 <img alt={representative.name} src={`images/avatar/${representative.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
//                 <span className="image-text">{representative.name}</span>
//             </React.Fragment>
//         );
//     }

//     const representativesItemTemplate = (option) => {
//         return (
//             <div className="p-multiselect-representative-option">
//                 <img alt={option.name} src={`images/avatar/${option.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
//                 <span className="image-text">{option.name}</span>
//             </div>
//         );
//     }

//     const statusBodyTemplate = (rowData) => {
//         return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
//     }

//     const statusItemTemplate = (option) => {
//         return <span className={`customer-badge status-${option}`}>{option}</span>;
//     }

//     const verifiedBodyTemplate = (rowData) => {
//         return <i className={classNames('pi', { 'true-icon pi-check-circle': rowData.verified, 'false-icon pi-times-circle': !rowData.verified })}></i>;
//     }

//     const representativeRowFilterTemplate = (options) => {
//         return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterApplyCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" maxSelectedLabels={1} />;
//     }

//     const statusRowFilterTemplate = (options) => {
//         return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
//     }

//     const verifiedRowFilterTemplate = (options) => {
//         return <TriStateCheckbox value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} />
//     }

//     const header2 = renderHeader2();

//     return (
//         <div className="datatable-filter-demo">

//             <div className="card">
//                 <DataTable value={customers2} paginator className="p-datatable-customers" rows={10}
//                     dataKey="id" filters={filters2} filterDisplay="row" loading={loading2} responsiveLayout="scroll"
//                     globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header2} emptyMessage="No customers found.">
//                     <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
//                     <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
//                     <Column header="Agent" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }} body={representativeBodyTemplate}
//                         filter filterElement={representativeRowFilterTemplate} />
//                     <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
//                     <Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} />
//                 </DataTable>
//             </div>
//         </div>
//     );
// }

// export default Results;
// ____________________________________________________


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


const Results = ({ onSetDataToNewCalculation, onSetDataToResultsDone }) => {
    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: '100%', height: '75vh', marginBottom: '50px' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

    const changeResStructure = (configurations) => {
        const rowDataGenerated = [];
        for (let key in configurations) {
            configurations[key].instruments.map((item) => {
                const rowsData = {
                    configuration: key,
                    idInstruments: item.nsr,
                    cod: item.cod,
                    locname: item.locname,
                    latitude: item.latitude,
                    longitude: item.longitude,
                    altitude: item.altitude,
                    aperture: item.aperture,
                    secondary_coefficient: item.secondary_coefficient,
                    pixel_scale: item.pixel_scale,
                    readout_noise: item.readout_noise,
                    fovx: item.fovx,
                    fovy: item.fovy,
                    frame_readout: item.frame_readout,
                    frame_flush: item.frame_flush,
                    task_switch_time: item.task_switch_time,
                    stabilization_time: item.stabilization_time,
                    mount_type: item.mount_type,
                    slew_vel_alpha: item.slew_vel_alpha,
                    slew_vel_delta: item.slew_vel_delta,
                    min_elevation: item.min_elevation,
                    transmittivity: item.transmittivity,
                    quantum_efficiency: item.quantum_efficiency,
                    mode: item.mode,
                    noko_twilight: item.noko_twilight,
                    noko: item.noko,
                    gso_survey: item.gso_survey
                }
                rowDataGenerated.push(rowsData)
            })
        }
        return rowDataGenerated
    }

    // заполнение таблицы
    const [rowData, setRowData] = useState([]);

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
            minWidth: 280,
            cellRenderer: 'agGroupCellRenderer'
        };
    }, []);

    // загрузить в конструктор
    const handleAskResults = useCallback(() => {
        let selectedId
        gridRef.current.api.forEachNode(function (node) {
            if (node.selected) {
                selectedId = node.key
            }
        });
        onSetDataToNewCalculation(selectedId)
    }, []);

    // загрузить результаты
    const handleShowResults = useCallback(() => {
        let selectedId
        gridRef.current.api.forEachNode(function (node) {
            if (node.selected) { selectedId = node.key }
        });
        onSetDataToResultsDone(selectedId)
    }, []);

    useEffect(() => {
        console.clear()
        // АПИ - запрос готовых расчетов
        api.getResults()
            .then((res) => {
                console.log(res)
                setRowData(changeResStructure(res.configurations))
            })
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
                <button className="button__bottom" onClick={handleAskResults}>
                    Загрузить конфигурацию
                </button>
                <button className="button__bottom" onClick={handleShowResults}>
                    Показать результаты расчета
                </button>
            </div>
        </div>
    );
}

export default Results;