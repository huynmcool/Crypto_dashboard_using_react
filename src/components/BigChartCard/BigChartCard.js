import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import { SplitButton } from 'primereact/splitbutton';
import './BigChartCard.css'

const BigChartCard = () => {
    const items = [
        {
            label: 'Daily',
            command: () => {

            }
        },
        {
            label: 'Monthly',
            command: () => {

            }
        },
        {
            label: 'Yearly',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        }
    ];
    const [basicData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#42A5F5',
                tension: .4
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: '#66BB6A',
                tension: .4
            },
            {
                label: 'Third Dataset',
                data: [12, 51, 62, 33, 21, 62, 45],
                fill: false,
                borderColor: '#FFA726',
                tension: .4
            }
        ]
    });

    const getLightTheme = () => {
        let basicOptions = {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 1.5,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: '#495057'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: '#495057'
                    }
                }
            }
        };

        return basicOptions

    }

    const basicOptions = getLightTheme();

    return (
        <div className='w-full h-full'>
            <div className="chart-card border-none border-round-lg flex flex-wrap flex-column w-full h-full">
                <div className='grid grid-nogutter flex w-full h-full p-5'>
                    <div className='col-12 mb-3'>
                        <div className="grid grid-nogutter">
                            <div className="col-6">
                                <span className="block text-0 font-bold text-2xl">Market Overview</span>
                            </div>
                            <div className="col-6 flex justify-content-end">
                                <SplitButton label="Monthly" model={items} className="p-button-secondary mr-2 mb-2"></SplitButton>
                            </div>
                        </div>
                    </div>

                    <div className='col-12'>
                        <Chart className='' type="line" data={basicData} options={basicOptions} style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default BigChartCard