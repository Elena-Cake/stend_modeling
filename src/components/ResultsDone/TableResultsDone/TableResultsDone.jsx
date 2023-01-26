
import './TableResultsDone.css';
import React, { useMemo, useState } from 'react';


import configuration from '../../../constans/configurations'

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
                    noko: res.configurations[key].instruments[keyInst].noko,
                    noko_twilight: res.configurations[key].instruments[keyInst].noko_twilight,
                    gso_survey: res.configurations[key].instruments[keyInst].gso_survey
                }
                rowDataGenerated.push(item)
            }
        }
        return rowDataGenerated
    }

    console.log(changeResStructure(configuration))



    return (
        <div >
            table
        </div>
    )
}

export default TableResultsDone;