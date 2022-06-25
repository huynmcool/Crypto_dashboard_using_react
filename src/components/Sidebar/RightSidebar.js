import React, { useState, useEffect } from 'react'
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { CreditCardService } from '../../service/CreditCardsService';
import { RecentTransactionsService } from '../../service/RecentTransactionsService';

const RightSidebar = () => {

    const [creditCards, setCreditCards] = useState([]);
    const [recentTransactions, setRecentTransactions] = useState([]);
    const creditCardService = new CreditCardService();
    const recentTransactionsService = new RecentTransactionsService();

    useEffect(() => {
        creditCardService.getCreditCardsSmall().then(data => setCreditCards(data.slice(0, 6)));
        recentTransactionsService.getRecentTransactions().then(data => setRecentTransactions(data.slice(0, 6)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const creditCardTemplate = (creditCard) => {
        return (
            <div className="credit-card-item">
                <div className="credit-card-item-content">
                    <div className="mb-3">
                        <img src={`assets/images/credit-cards/${creditCard.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={creditCard.name} className="credit-card-image" />
                    </div>
                </div>
            </div>
        );
    }

    const recentTransactionsTemplate = (recentTransactions) => {
        return (
            <div className="surface-0 shadow-2 p-2 border-1 border-50 border-round">
                <div className="grid flex h-full">
                    <div className="col-2 flex align-items-center justify-content-center w-2">
                        <img src={`assets/images/coins/svg/black/${recentTransactions.coin_logo}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={recentTransactions.coin_logo} className="credit-card-image w-12" />
                    </div>
                    <div className="col-3 w-5">
                        <span className="block text-900 font-bold mb-2">{recentTransactions.coin_name}</span>
                        <span className="block text-500 font-medium text-sm">{recentTransactions.coin_short}</span>
                    </div>
                    <div className="col flex-column">
                        <span className="block text-900 font-bold mb-2">{recentTransactions.amount}</span>
                        <span className="block text-500 font-medium text-xs">{recentTransactions.date} {recentTransactions.time}</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div class="grid grid-nogutter w-full flex-col m-2 rightsidebar align-content-start">
            <div class="col-12 h-3rem flex-row">
                <div class="grid grid-nogutter w-full flex-col">
                    <div class="col-5 p-1  m-2 border-round">
                        <Button icon="pi pi-bell" />
                    </div>
                    <div class="col p-1  mt-2 ml-2 mb-2 mr-1 border-round flex justify-content-end">
                        <Button icon="pi pi-user" />
                    </div>
                </div>
            </div>

            <div class="col-12 mt-6 h-10rem mb-6">
                <div class="grid grid-nogutter w-full flex-col">

                    <div class="col-12">
                        <div class="grid grid-nogutter w-full flex-col">
                            <div class="col p-1  m-2 border-round text-xl">
                                Your Cards
                            </div>
                            <div class="col p-1  m-2 border-round relative flex align-items-center justify-content-center">
                                <div className='absolute right-0 '>
                                    <Button icon="pi pi-plus-circle" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div className="carousel-demo">
                            <div className="card">
                                <Carousel value={creditCards} numVisible={1} numScroll={1}
                                    itemTemplate={creditCardTemplate} indicatorsContentClassName="carousel-indicator" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12">
                {/* <div className="grid flex-column m-1">
                    <div className='col block font-bold text-xl'>
                        Recent transactions
                    </div>
                    <div className="col p-1">
                        <div className="surface-0 shadow-2 p-2 border-1 border-50 border-round">
                            <div className="grid flex h-full">
                                <div className="col-2 flex align-items-center justify-content-center w-2">
                                    <img src={`assets/images/coins/svg/black/btc.svg`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt="Bitcoin logo" className="credit-card-image w-12" />
                                </div>
                                <div className="col-3 w-5">
                                    <span className="block text-900 font-bold mb-2">Bitcoin</span>
                                    <span className="block text-500 font-medium text-sm">BTC</span>
                                </div>
                                <div className="col flex-column">
                                    <span className="block text-900 font-bold mb-2">$2.100</span>
                                    <span className="block text-500 font-medium text-xs">Today 11:30 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col p-1">
                        <div className="surface-0 shadow-2 p-2 border-1 border-50 border-round">
                            <div className="grid flex">
                                <div className="col-2 flex align-items-center justify-content-center w-2">
                                    <img src={`assets/images/coins/svg/black/eth.svg`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt="Bitcoin logo" className="credit-card-image w-12" />
                                </div>
                                <div className="col-3 w-5">
                                    <span className="block text-900 font-bold mb-2">Ethereum</span>
                                    <span className="block text-500 font-medium text-sm">ETH</span>
                                </div>
                                <div className="col flex-column">
                                    <span className="block text-900 font-bold mb-2">$2.100</span>
                                    <span className="block text-500 font-medium text-xs">Today 11:30 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col p-1">
                        <div className="surface-0 shadow-2 p-2 border-1 border-50 border-round">
                            <div className="grid flex">
                                <div className="col-2 flex align-items-center justify-content-center w-2">
                                    <img src={`assets/images/coins/svg/black/ltc.svg`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt="Bitcoin logo" className="credit-card-image w-12" />
                                </div>
                                <div className="col-3 w-5">
                                    <span className="block text-900 font-bold mb-2">Litecoin</span>
                                    <span className="block text-500 font-medium text-sm">LTC</span>
                                </div>
                                <div className="col flex-column">
                                    <span className="block text-900 font-bold mb-2">$2.100</span>
                                    <span className="block text-500 font-medium text-xs">Today 11:30 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}
                <div className="carousel-demo">
                    <div className="card">
                        <Carousel value={recentTransactions} numVisible={3} numScroll={3}
                            itemTemplate={recentTransactionsTemplate} indicatorsContentClassName="carousel-indicator" orientation='vertical' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RightSidebar