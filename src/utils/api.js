import axios from "axios";

const instance = axios.create({
    baseURL: 'http://',
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
        return instance.get(`/${year}`)
            .then(res => res.json())
    },
    // пост запрос на расчет
    postCalculate(data) {
        return instance.post('', JSON.stringify(data))
            .then(res => res.data)
    },

    // Запросы в процессе расчета
    // Запрос лога
    getLog() {
        return instance.get('')
            .then(res => res.data)
    },
    // Запрос результата
    getResult() {
        return instance.get('')
            .then(res => res.data)
    },
    // принудительное завершение выполнения задачи
    abortCalculate() {
        return instance.get('')
            .then(res => res.data)
    }
}