import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis,ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css';

const Statistics = () => {
    const chart = useLoaderData();
    const data = chart.data;
    return (
        <div className='chart-container'>
            <ResponsiveContainer width={350} height={400}>
                <BarChart width={450} height={400} data={data} className="chart-container">
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;