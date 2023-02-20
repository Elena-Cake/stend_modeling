import React, { useState } from "react";
import {
    BarChart, Bar, XAxis,
    YAxis, CartesianGrid, Tooltip, Legend,
    Brush
} from 'recharts';

const data = [
    {
        name: '1',
        uv: 4000,
        amt: 2400,
    },
    {
        name: '2',
        uv: 3000,
        amt: 2210,
    },
    {
        name: '3',
        uv: 2000,
        amt: 2290,
    },
    {
        name: '4',
        uv: 2780,
        amt: 2000,
    },
    {
        name: '5',
        uv: 1890,
        amt: 2181,
    },
    {
        name: '6',
        uv: 2390,
        amt: 2500,
    },
    {
        name: '7',
        uv: 3490,
        amt: 2100,
    },
];



const ChartsBar = ({ activeSlide, dataChart, i }) => {

    return (
        <div key={i} className={`slide ${activeSlide == i && 'slide_active'}`}>
            <BarChart
                width={700}
                height={520}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" label={{ value: "dates" }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Brush dataKey="name" height={30} stroke="#8884d8" />
                <Bar dataKey="data" fill="#8884d8" />
            </BarChart>
        </div>
    )
}

export default ChartsBar;
