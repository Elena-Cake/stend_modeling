import axios from "axios";

// const BASE_URL = 'http://modeller:9090'

// для работы нужно поднять сервер из utils/proxyServer.js
const BASE_URL = 'http://localhost:3030'

export const api = {

    // запросы для таблицы результатов
    getResults() {
        return axios.get(BASE_URL + '/modelling_result_list', {

        })
            .then(res => res.data)
            .catch(err => console.log(err))
    },
    // гет запрос расчета для конструктора
    getNewCalc(id) {
        return axios.get(BASE_URL + `/modelling_result?id=${id}`)
            .then(res => res.data)
    },

    // гет запрос расчета для показа результатов
    getResultsDone(id) {
        return axios.get(BASE_URL + `/modelling_result?id=${id}`)
            .then(res => res.data)
    },

    // запросы для конструктора
    // гет запрос списка каталогов
    getCatalogNames(year) {
        return axios.get(BASE_URL + `/catalog_list?year=${year}`)
            .then(res => res.data)
    },
    // пост запрос на расчет
    startCalculate(data) {
        return axios.post(BASE_URL + '/', JSON.stringify(data))
            .then(res => res.data)
    },

    // Запросы в процессе расчета
    // Запрос лога
    getLog() {
        return axios.get(BASE_URL + '/getlog')
            .then(res => res.data)
    },
    // Запрос результата
    getResult() {
        return axios.get(BASE_URL + '')
            .then(res => res.data)
    },
    // принудительное завершение выполнения задачи
    abortCalculate() {
        return axios.get(BASE_URL + '/abort')
            .then(res => res.data)
    }
}