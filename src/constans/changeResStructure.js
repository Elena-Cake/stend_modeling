import configuration from './configurations'

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


export const dataRows = changeResStructure(configuration)

