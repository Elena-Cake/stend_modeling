const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

const PORT = 3030
const urlencodedParser = express.urlencoded({ extended: false });
const URL_TO = 'http://modeller:9090'

app.use(cors({
    origin: '*'
}))

app.get('/modelling_result_list', (req, res) => {
    let endpoint = URL_TO + '/modelling_result_list'
    console.log(endpoint)
    axios.get(endpoint).then(response => {
        res.json(response.data)
    }).catch(err => {
        res.send(err)
    })
})

app.get('/catalog_list', (req, res) => {
    let endpoint = URL_TO + '/catalog_list?year=' + req.query.year
    console.log(endpoint)
    axios.get(endpoint).then(response => {
        res.json(response.data)
    }).catch(err => {
        res.send(err)
    })
})

app.get('/modelling_result', (req, res) => {
    let endpoint = URL_TO + '/modelling_result/?id=' + req.query.id
    console.log(endpoint)
    axios.get(endpoint).then(response => {
        res.json(response.data)
    }).catch(err => {
        res.send(err)
    })
})

app.get('/getlog', (req, res) => {
    let endpoint = URL_TO + '/getlog'
    console.log(endpoint)
    axios.get(endpoint).then(response => {
        res.json(response.data)
    }).catch(err => {
        res.send(err)
    })
})

app.post("/run_modelling", urlencodedParser, (req, res) => {
    let endpoint = URL_TO + '/run_modelling'
    console.log(endpoint)
    axios.post(endpoint, req.body)
        .then(response => {
            res.json(response.data)
        }).catch(err => {
            res.send(err)
        })
});

app.post("/abort", urlencodedParser, (req, res) => {
    let endpoint = URL_TO + '/abort'
    console.log(endpoint)
    axios.get(endpoint)
        .then(response => {
            res.json(response.data)
        }).catch(err => {
            res.send(err)
        })
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

// for start
//  node src/utils/proxyServer.js

