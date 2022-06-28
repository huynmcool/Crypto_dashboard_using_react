import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import './BigChartCard.css'

const BigChartCard = () => {
    const [basicData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#42A5F5',
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
                    display: true,
                }
            },
            scales: {
                x: {
                    display: true,
                },
                y: {
                    display: true,
                }
            },
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
                                <span className="block text-0 font-bold text-xl">Market Overview</span>
                            </div>
                            <div className="col-6 flex justify-content-end">
                                <span className="block text-0 font-bold flex text-green-400">+ 5.26%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-12'>
                        <Chart className='' type="line" data={basicData} options={basicOptions} style={{ width: '100%',height:'100%'}} />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default BigChartCard