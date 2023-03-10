
import React, { useState } from "react";
import './Splider.css';

const Splider = ({ data }) => {

    const [activeSlide, setActiveSlide] = useState(0);

    // console.log(data)
    // список ключей ответа
    const keys = []
    for (let key in data) {
        key !== 'success' &&
            keys.push(key)
    };
    // формирование опций для переключения
    const options = keys.map((key, i) => <option className="charts__option" value={i}>{key.split('_').join(' ')}</option>);

    const slideElements = keys.map((key, i) => {
        return (
            <img className={`slide ${activeSlide == i && 'slide_active'}`}
                src={data[key].data}
            />
        )
        // формирование массива объектов для граффиков
        // const dataChart = []
        // data[key].map((item, i) => {
        //     dataChart.push({
        //         name: dates[i],
        //         data: data[key][i].toFixed(2)
        //     })
        // })

        // return (
        //     <ChartsBar activeSlide={activeSlide} dataChart={dataChart} i={i} />
        // )
    })

    // кнопки переключения слайдов
    const onHandleNext = () => {
        const activeSlideChange = activeSlide + 1
        activeSlideChange <= keys.length - 1 ?
            setActiveSlide(activeSlideChange) :
            setActiveSlide(0)
    }
    const onHandlePrev = () => {
        const activeSlideChange = activeSlide - 1
        activeSlideChange >= 0 ?
            setActiveSlide(activeSlideChange) :
            setActiveSlide(keys.length - 1)
    }

    return (
        <div className={`charts `}>
            <select className="charts__select" onChange={(event) => setActiveSlide(event.target.value)}>
                {options}
            </select>
            <p className="charts__title">
                {keys[activeSlide].split('_').join(' ')}
            </p>
            <div className="slider">
                {slideElements}
            </div>
            <div className="charts__btns">
                <button className="charts__btn" onClick={onHandlePrev}>prev</button>
                <button className="charts__btn" onClick={onHandleNext}>next</button>
            </div>
        </div >
    )
}

export default Splider;

