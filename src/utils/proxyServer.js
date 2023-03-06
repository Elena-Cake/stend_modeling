const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

const PORT = 3030

app.use(cors({
    origin: '*'
}))

app.get('/modelling_result_list', (req, res) => {

    let endpoint = 'http://modeller:9090' + '/modelling_result_list'
    console.log(endpoint)
    axios.get(endpoint).then(response => {
        res.json(response.data)
    }).catch(err => {
        res.send(err)
    })
})

app.get('/modelling_result', (req, res) => {
    let endpoint = 'http://modeller:9090' + '/modelling_result/?id=' + req.query.id
    console.log(endpoint)
    axios.get(endpoint).then(response => {
        res.json(response.data)
    }).catch(err => {
        res.send(err)
    })
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

// for start
//  node src/utils/proxyServer.js

