import React, { useCallback, useMemo, useRef, useState } from 'react';


import './Configuration.css';
import { NavLink } from "react-router-dom";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { dataRows } from '../../../constans/changeResStructure'


const Configuration = ({ onTelescope, onLoadPopup }) => {
    const [products, setProducts] = useState(dataRows);

    const [selectedProducts9, setSelectedProducts9] = useState([]);


    const SelecteChange = (e) => {
        //     setSelectedProducts9([e.value, ...selectedProducts9])
        //     console.log(e.value)
    }

    return (
        <div className="configuration">
            <h2 className="title">Конфигурация наблюдательной сети</h2>
            <button className="button__bottom" onClick={onTelescope}>Добавить НС в расчет</button>
            <div >
                <DataTable value={products} selection={selectedProducts9} onSelectionChange={SelecteChange}
                    dataKey="id" responsiveLayout="scroll"
                    selectionPageOnly paginator rows={8} selectionMode="checkbox"
                // onRowSelect={onRowSelect} onRowUnselect={onRowUnselect}
                >
                    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                    <Column field="idInstruments" header="idInstruments"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="latitude" header="latitude"></Column>
                    <Column field="mode" header="mode"></Column>
                </DataTable>
            </div>
            <button className="button__bottom" onClick={onLoadPopup}>Запустить расчет</button>

            <NavLink to="/resultsdone"
                className="result__link-btn">
                <button className="button__bottom">Результаты</button>
            </NavLink>
        </div>
    )
}

export default Configuration; 