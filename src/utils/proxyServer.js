const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

const PORT = 3030

app.use(cors({
    origin: '*'
}))

app.get(':endpoint', (req, res) => {

    let endpoint = 'http://modeller:9090' + req.params.endpoint
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

