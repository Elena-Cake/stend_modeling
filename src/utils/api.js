import axios from "axios";

const instance = axios.create({
    baseURL: 'http://modeller:9090/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

export const api = {

    // запросы для таблицы результатов
    // гет заполненя таблицы предыдущих результатов
    getResults() {
        return instance.get('')
            .then(res => res.json())
    },
    // гет запрос расчета для конструктора
    getNewCalc(id) {
        return instance.get(`/${id}`)
            .then(res => res.json())
    },
    // гет запрос расчета для показа результатов
    getResultsDone(id) {
        return instance.get(`/${id}`)
            .then(res => res.json())
    },

    // запросы для конструктора
    // гет запрос списка каталогов
    getCatalogNames(year) {
        return instance.get(`catalog_list?year=${year}`)
            .then(res => res.data)
    },
    // пост запрос на расчет
    startCalculate(data) {
        return instance.post('', JSON.stringify(data))
            .then(res => res.data)
    },

    // Запросы в процессе расчета
    // Запрос лога
    getLog() {
        return instance.get('getlog')
            .then(res => res.data)
    },
    // Запрос результата
    getResult() {
        return instance.get('')
            .then(res => res.data)
    },
    // принудительное завершение выполнения задачи
    abortCalculate() {
        return instance.get('abort')
            .then(res => res.data)
    }
}