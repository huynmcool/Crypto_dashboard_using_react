import React, { useState, useEffect } from 'react'
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { CreditCardService } from '../../service/CreditCardsService';
import { RecentTransactionsService } from '../../service/RecentTransactionsService';
import './Sidebar.css'

const RightSidebar = () => {

    const [creditCards, setCreditCards] = useState([]);
    const [recentTransactions, setRecentTransactions] = useState([]);
    const creditCardService = new CreditCardService();
    const recentTransactionsService = new RecentTransactionsService();

    useEffect(() => {
        creditCardService.getCreditCards().then(data => setCreditCards(data.slice(0, 6)));
        recentTransactionsService.getRecentTransactions().then(data => setRecentTransactions(data.slice(0, 6)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const creditCardTemplate = (creditCard) => {
        return (
            <div className="credit-card-item-content p-0 m-0">
                <div className="mb-3">
                    <img src={`assets/images/credit-cards/${creditCard.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={creditCard.name} className="credit-card-image" />
                </div>
            </div>

        );
    }

    const recentTransactionsTemplate = (recentTransactions) => {
        return (
            <div className="grid grid-nogutter h-auto">
                <div className="col-3 flex align-items-center justify-content-center">
                    <img className='w-10' src={`assets/images/coins/svg/white/${recentTransactions.coin_logo}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={recentTransactions.coin_logo} />
                </div>
                <div className="col flex flex-column align-items-start justify-content-center m-2">
                    <span className="block text-white text-lg font-bold">{recentTransactions.coin_name}</span>
                    <span className="block text-500 font-medium text-sm">{recentTransactions.coin_short}</span>
                </div>
                <div className="col flex flex-column align-items-end justify-content-center m-2">
                    <span className="block text-white text-xl font-bold mb-2">{recentTransactions.amount}</span>
                    <span className="block text-500 font-small text-sm">{recentTransactions.date}</span>
                    <span className="block text-500 font-small text-sm">{recentTransactions.time}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-nogutter flex-column rightsidebar align-content-start p-4 pt-6">

            <div className="col-12 mb-6">
                <div className="grid grid-nogutter">
                    <div className="col flex align-items-center justify-content-start">
                        <Button icon="pi pi-bell" className='p-button-rounded p-button-outlined p-button-lg w-5 h-4rem' />
                    </div>
                    <div className="col flex align-items-center justify-content-end">
                        <Button icon="pi pi-user" className='p-button-rounded p-button-outlined p-button-lg w-5 h-4rem'/>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="grid grid-nogutter w-full flex-column">
                    <div className="col-12 flex mb-3">
                        <div className="grid grid-nogutter w-full">
                            <div className="col text-white font-bold text-xl flex align-items-center justify-content-start">
                                Your Cards
                            </div>
                            <div className="col flex align-items-center justify-content-end">
                                <Button icon="pi pi-plus-circle" className='p-button-rounded p-button-outlined'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="carousel-demo">
                            <div className="card">
                                <Carousel
                                    value={creditCards}
                                    numVisible={1} numScroll={1}
                                    itemTemplate={creditCardTemplate}
                                    contentClassName="credit-card-carousel-content"
                                    containerClassName="credit-card-carousel-container"
                                    indicatorsContentClassName="credit-card-carousel-indicator" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <span className='text-white font-bold text-xl flex mt-3 mb-3'> Recent Transactions</span>
                <Carousel
                    className='h-full'
                    value={recentTransactions}
                    numVisible={3} numScroll={3}
                    itemTemplate={recentTransactionsTemplate}
                    circular
                    autoplayInterval={5000}
                    contentClassName="recent-transactions-carousel-content"
                    containerClassName="recent-transactions-carousel-container"
                    indicatorsContentClassName="recent-transactions-carousel-indicator"
                    orientation='vertical' />
            </div>

        </div>
    )
}

const LeftSidebar = () => {
    return (
        <div className='leftsidebar grid grid-nogutter flex-column h-full align-items-center border-right-1 border-700 pt-6'>
            <div className='col-12 flex justify-content-center'><img alt="logo" src="assets/images/web-logo/small-logo.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className="mb-6" style={{ width: '50%' }}></img></div>
            <div className='col-12 flex justify-content-center mb-6'>
                <Button icon="pi pi-th-large" className="p-button-lg w-6 p-button-text" />
            </div>
            <div className='col-12 flex justify-content-center mb-6'>
                <Button icon="pi pi-comment" className="p-button-lg w-6 p-button-text" />
            </div>
            <div className='col-12 flex justify-content-center mb-6'>
                <Button icon="pi pi-shopping-cart" className="p-button-lg w-6 p-button-text" />
            </div>
            <div className='col-12 flex justify-content-center mb-6'>
                <Button icon="pi pi-credit-card" className="p-button-lg w-6 p-button-text" />
            </div>
            <div className='col-12 flex justify-content-center mb-6'>
                <Button icon="pi pi-folder" className="p-button-lg w-6 p-button-text" />
            </div>
            <div className='col-12 flex justify-content-center mb-6'>
                <Button icon="pi pi-cog" className="p-button-lg w-6 p-button-text" />
            </div>
        </div>
    )
}

const Sidebar = (obj) => {
    switch (obj.side) {
        case "left":
            return (<LeftSidebar></LeftSidebar>)
        case "right":
            return (<RightSidebar></RightSidebar>)
        default:
            return (
                <h2>Bye swithc</h2>
            )
    }
}

export default Sidebar