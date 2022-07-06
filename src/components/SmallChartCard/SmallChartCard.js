import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import './SmallChartCard.css'

const SmallChartCard = () => {
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
            aspectRatio: 3,
            plugins: {
                legend: {
                    display: false,
                }
            },
            scales: {
                x: {
                    display: false,
                },
                y: {
                    display: false,
                }
            },
        };

        return basicOptions

    }

    const basicOptions = getLightTheme();

    return (
        <div className='w-full relative'>
            <div className='chart-card-logo'>
                <img className="w-full h-full" src={`assets/images/coins/svg/color/btc.svg`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt='chart-card-logo' />
            </div>
            <div className="border-none border-round-lg chart-card flex flex-column p-5 h-full">
                <div className="grid grid-nogutter flex">
                    <div className="col-6">
                        <span className="block text-600 font-bold m-2">BTC to USD</span>
                        <span className="block text-0 font-bold text-2xl m-2">8422.33$</span>
                    </div>
                    <div className="col-6 flex justify-content-end flex flex-wrap">
                        <span className="block text-0 font-bold m-2 flex text-green-400">+ 5.26%</span>
                    </div>
                </div>
                <div className='flex justify-content-center'>
                    <Chart type="line" data={basicData} options={basicOptions} style={{ width: '100%' }} />
                </div>
            </div>
        </div>

    )
}

export default SmallChartCard