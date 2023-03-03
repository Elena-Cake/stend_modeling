
import './TableResultsDone.css';
import React, { useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-indigo/theme.css";

import { dataRows } from '../../../constans/changeResStructure'

class ProductService {

    getProductsSmall() {
        return fetch('data/products-small.json').then(res => res.json()).then(d => d.data);
    }

    getProducts() {
        return fetch('data/products.json').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
        return fetch('data/products-orders-small.json').then(res => res.json()).then(d => d.data);
    }
}

const TableResultsDone = ({ instruments }) => {

    const [products, setProducts] = useState(dataRows);

    useEffect(() => {
        console.clear()
    }, []);

    return (
        <div className="resdone__table">
            <DataTable value={products} stripedRows responsiveLayout="scroll">
                <Column field="idInstruments" header="Code"></Column>
                <Column field="name" header="Name"></Column>
            </DataTable>
        </div>
    );
}

export default TableResultsDone;