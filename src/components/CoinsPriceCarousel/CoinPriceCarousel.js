import React, { useState, useEffect } from 'react'
import { Carousel } from 'primereact/carousel';
import { Chart } from 'primereact/chart';
import { CoinPriceService } from '../../service/CoinPriceService';
import './CoinPriceCarousel.css'

const CoinPriceCarousel = () => {
    const [coinPrices, setcoinPrice] = useState([]);
    const coinTransactionsService = new CoinPriceService();

    useEffect(() => {
        coinTransactionsService.getCoinPrice().then(data => setcoinPrice(data.slice(0, 8)));
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
            <div className="m-2 p-3 border-none border-round flex flex-column grid grid-nogutter chart-card justify-content-center align-content-center align-items-center">
                {/* <img src={`assets/images/coins/svg/color/${coinPrice.coin_logo}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt='chart-card-logo' className="chart-card-logo col-12" /> */}
                <div className='pb-3 col-12 flex justify-content-center align-content-center align-items-center relative'>
                    <img src={`assets/images/coins/svg/color/${coinPrice.coin_logo}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt='chart-card-logo' className="chart-card-logo col-12 relative" />
                </div>
                <div className="col-12 flex-column -mt-5">
                    <div className='grid grid-nogutter'>
                        <div className='col flex flex-column'>
                            <span className="block text-0 font-medium text-sm mb-3">{coinPrice.coin_short} to USD</span>
                            <span className="block text-0 font-bold mb-2">{coinPrice.toUSD}</span>
                        </div>
                        <div className='col flex justify-content-end'>
                            <span className="block text-0 font-bold mb-2">{coinPrice.toUSD}</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 flex justify-content-end align-content-end align-items-end">

                </div>
                <div className='pb-3 col-12 flex bg-blue-900'>
                    <Chart type="line" data={basicData} options={basicOptions} style={{ width: '20%' }}/>
                </div>
            </div>
        );
    }

    return (
        <div class="grid grid-nogutter w-full bg-yellow-900 ">
            <div class="col-12">
                <div className="m-2">
                    <div className="card">
                        <Carousel value={coinPrices} numVisible={4} numScroll={4}
                            itemTemplate={coinPriceTemplate} indicatorsContentClassName='carousel-indicators-lmao'/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CoinPriceCarousel