import React, { useState, useEffect } from 'react'
import { Carousel } from 'primereact/carousel';
import { Chart } from 'primereact/chart';
import { CoinPriceService } from '../../service/CoinPriceService';
import './CoinPriceCarousel.css'
import { ProductService } from '../../service/ProductService';

const CoinPriceCarousel = () => {
    const [coinPrices, setcoinPrice] = useState([]);
    const coinTransactionsService = new CoinPriceService();
    const carouselResponsiveOptions = [
        {
            breakpoint: "1024px",
            numVisible: 3,
            numScroll: 3,
        },
        {
            breakpoint: "768px",
            numVisible: 2,
            numScroll: 2,
        },
        {
            breakpoint: "560px",
            numVisible: 1,
            numScroll: 1,
        },
    ];
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
            <div className="product-item w-18rem">
                <div className="product-item-content">
                    <div className='grid grid-nogutter flex-column'>
                        <div className='col justify-content-start align-content-start align-items-start'>
                            <img src={`assets/images/coins/svg/color/${coinPrice.coin_logo}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt='chart-card-logo' style={{ position: 'relative', width: '4rem' }} />
                        </div>
                        <div className='col-12 bg-red-900'>
                            <div className='grid grid-nogutter'>
                                <div className='col-6 flex justify-content-start pl-4'>
                                    <div className="block text-0 font-medium text-sm mb-3">{coinPrice.coin_short} to USD</div>
                                </div>
                                <div className='col-6 flex justify-content-end pr-4'>
                                    <div className="block text-0 font-medium text-sm text-green-500 mb-3">+ 5.23%</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 flex justify-content-start align-content-start align-items-start pl-4 bg-red-900'>
                            <div className="block text-0 font-medium text-xl mb-3">{coinPrice.toUSD} $</div>
                        </div>
                        <div className='col flex justify-content-center align-content-center align-items-center bg-red-900'>
                            <Chart className='flex flex-wrap' type="line" data={basicData} options={basicOptions} style={{ width: '80%' }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        // <div className="card">
        //     <Carousel className='flex flex-wrap w-20rem' value={coinPrices} numVisible={3} numScroll={3} responsiveOptions={carouselResponsiveOptions} itemTemplate={coinPriceTemplate} contentClassName={"coin-price-carousel-content"} containerClassName={"coin-price-carousel-container"}></Carousel>
        // </div>
        <div className="grid p-fluid media-demo flex flex-column w-30rem">
            <div className="col-12">
                <div className="card">
                    <Carousel className='flex flex-wrap' value={coinPrices} numVisible={3} numScroll={3} responsiveOptions={carouselResponsiveOptions} itemTemplate={coinPriceTemplate} contentClassName={"coin-price-carousel-content"} containerClassName={"coin-price-carousel-container"}></Carousel>
                </div>
            </div>
        </div>
    )
}

export default CoinPriceCarousel