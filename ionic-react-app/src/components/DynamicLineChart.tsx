import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// @ts-ignore
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false, // This line hides the legend
        },
        title: {
            display: true,
        },
    },
    scales: {
        x: {
            display: true,
            ticks: {
                display: true, // Display the ticks (labels) on the x-axis
                color: 'rgb(130, 105, 101)' // Set the color of the ticks
            },
            grid: {
                display: false, // Hide the grid lines
            },
        },
        y: {
            display: true,
            ticks: {
                display: true, // Display the ticks (labels) on the y-axis
                color: 'rgb(130, 105, 101)' // Set the color of the ticks
            },
            grid: {
                display: false, // Hide the grid lines
            },
        }
    }
};





const labels = ['2019', '2020', '2021', '2022', '2023'];

export const data = {
    labels,
    datasets: [
        {
            data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
            borderColor: 'rgb(255, 146, 134)',
            backgroundColor: 'rgb(255, 146, 134)',
            tension: 0.4 // Add this line

        }
    ],
};

const  DynamicLineChart : React.FC = () => {
    return <Line options={options} data={data} />;
}
export default  DynamicLineChart;
