
import './Charts.css';

import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Page A',
        uv: 4000,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        amt: 2100,
    },
];


export default class Charts extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/bar-chart-with-double-yaxis-zr232';

    render() {
        return (
            <div className='charts__container'>
                <BarChart
                    width={650}
                    height={700}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>
        );
    }
}



