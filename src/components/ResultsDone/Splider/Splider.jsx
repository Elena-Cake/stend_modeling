
import React, { useState } from "react";
import ChartsBar from "./ChartsBar/ChartsBar";
import './Splider.css';

const Splider = ({ dates, data }) => {

    const [activeSlide, setActiveSlide] = useState(0);

    // список ключей ответа
    const keys = []
    for (let key in data) {
        if (key !== 'success') { keys.push(key) }
    };
    // формирование опций для переключения
    const options = keys.map((key, i) => <option className="charts__option" value={i}>{key}</option>);

    const slideElements = keys.map((key, i) => {
        // формирование массива объектов для граффиков
        const dataChart = []
        data[key].map((item, i) => {
            dataChart.push({
                name: dates[i],
                data: data[key][i].toFixed(2)
            })
        })

        return (
            <ChartsBar activeSlide={activeSlide} dataChart={dataChart} i={i} />
        )
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

<<<<<<< HEAD
    return (<Splide hasTrack={false} aria-label="..." >
        <div className="custom-wrapper">
            <SplideTrack>
                <SplideSlide>
                    <ChartsBar />
                </SplideSlide>
                <SplideSlide>
                    <Charts />
                </SplideSlide>
                <SplideSlide>
                    <Charts />
                </SplideSlide>
            </SplideTrack>

            <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">Prev</button>
                <button className="splide__arrow splide__arrow--next">Next</button>
=======
    return (
        <div className={`charts `}>
            <select className="charts__select" onChange={(event) => setActiveSlide(event.target.value)}>
                {options}
            </select>
            <p className="charts__title">
                {keys[activeSlide]}
            </p>
            <div className="slider">
                {slideElements}
>>>>>>> 28f4063e860a72505aae21c069acd0793667ba87
            </div>
            <div className="charts__btns">
                <button className="charts__btn" onClick={onHandlePrev}>prev</button>
                <button className="charts__btn" onClick={onHandleNext}>next</button>
            </div>
        </div >
    )
}

export default Splider;

