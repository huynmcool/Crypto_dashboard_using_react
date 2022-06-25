import React, { useState, useEffect } from 'react'
import { Carousel } from 'primereact/carousel';
import { Chart } from 'primereact/chart';
import { CoinPriceService } from '../../service/CoinPriceService';
import './CoinPriceCarousel.css'

const CoinPriceCarousel = () => {
    const [coinPrices, setcoinPrice] = useState([]);
    const coinTransactionsService = new CoinPriceService();

    useEffect(() => {
        coinTransactionsService.getCoinPrice().then(data => setcoinPrice(data.slice(0, 6)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const coinPriceTemplate = (coinPrice) => {
        const basicData = {
            labels: coinPrice.labels,
            datasets: [
                {
                    label: 'Coin Price',
                    data: coinPrice.datasets,
                    fill: false,
                    borderColor: '#42A5F5',
                    tension: .4
                }
            ]
        };

        const getLightTheme = () => {
            let basicOptions = {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2,
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
            <div className="grid">
                <div className="col-11 m-2">
                    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Orders</span>
                                <Chart type="line" data={basicData} options={basicOptions} style={{ width: '90%' }} />
                                <div className="text-900 font-medium text-xl">152</div>
                            </div>
                            <div className="flex align-items-center justify-content-center border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <img src={`assets/images/coins/svg/color/${coinPrice.coin_logo}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt='chart-card-logo' />
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">24 new </span>
                        <span className="text-500">since last visit</span>
                    </div>
                </div>
            </div>
            // <div className="p-3 border-none border-round flex relative chart-card m-2">
            //     <img src={`assets/images/coins/svg/color/${coinPrice.coin_logo}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt='chart-card-logo' className="chart-card-logo relative" />
            //     <div className='pb-3 relative'>
            //         <div className="grid grid-nogutter flex">
            //             <div className="col-6">
            //                 <span className="block text-600 font-bold text-sm m-2">{coinPrice.coin_short} to USD</span>
            //                 <span className="block text-0 font-bold text-xl m-2">{coinPrice.toUSD}$</span>
            //             </div>
            //             <div className="col-6 flex justify-content-end flex">
            //                 <span className="block text-0 font-bold m-2 flex">+ 5.26%</span>
            //             </div>
            //         </div>
            //         <Chart type="line" data={basicData} options={basicOptions} style={{ width: '90%' }} />
            //     </div>
            // </div>
        );
    }

    return (
        <div class="grid grid-nogutter w-full m-2 align-content-start">
            <div class="col-12">
                <div className="carousel-demo m-2">
                    <div className="card">
                        <Carousel value={coinPrices} numVisible={3} numScroll={3}
                            itemTemplate={coinPriceTemplate} indicatorsContentClassName="carousel-indicator" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CoinPriceCarousel