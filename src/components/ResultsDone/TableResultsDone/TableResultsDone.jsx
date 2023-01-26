
import './TableResultsDone.css';
import React, { useMemo, useState, useEffect } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-indigo/theme.css";

import configuration from '../../../constans/configurations'


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
                    noko: res.configurations[key].instruments[keyInst].noko
                }
                rowDataGenerated.push(item)
            }
        }
        return rowDataGenerated
    }

    changeResStructure(configuration)


    const [products, setProducts] = useState(changeResStructure(configuration));
    const productService = new ProductService();

    console.log(products)

    // useEffect(() => {
    //     productService.getProductsSmall().then(data => setProducts(data));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <DataTable value={products} stripedRows responsiveLayout="scroll">
                    <Column field="idInstruments" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="latitude" header="latitude"></Column>
                    <Column field="longitude" header="longitude"></Column>
                </DataTable>
            </div>
        </div>
    );
}



export default TableResultsDone;