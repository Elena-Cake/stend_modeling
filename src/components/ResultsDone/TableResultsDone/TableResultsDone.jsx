
import './TableResultsDone.css';
import React, { useMemo, useState, useEffect } from 'react';

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

const TableResultsDone = ({ }) => {

    const [products, setProducts] = useState(dataRows);

    return (
        <div className="resdone__table">
            <DataTable value={products} stripedRows responsiveLayout="scroll">
                <Column field="idInstruments" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="latitude" header="latitude"></Column>
                <Column field="mode" header="mode"></Column>
                <Column field="idInstruments" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="latitude" header="latitude"></Column>
                <Column field="mode" header="mode"></Column>
            </DataTable>
        </div>
    );
}

export default TableResultsDone;