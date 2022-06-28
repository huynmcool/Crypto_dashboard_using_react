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

            <div className="credit-card-item-content">
                <div className="mb-3">
                    <img src={`assets/images/credit-cards/${creditCard.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={creditCard.name} className="credit-card-image" />
                </div>
            </div>

        );
    }

    const recentTransactionsTemplate = (recentTransactions) => {
        return (
            <div className="grid grid-nogutter surface-0 shadow-2 border-1 border-50 border-round ml-6 mr-6">
                <div className="col-3 flex align-items-center justify-content-center">
                    <img className='w-8' src={`assets/images/coins/svg/black/${recentTransactions.coin_logo}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={recentTransactions.coin_logo} />
                </div>
                <div className="col">
                    <span className="block text-900 font-bold">{recentTransactions.coin_name}</span>
                    <span className="block text-500 font-medium text-sm">{recentTransactions.coin_short}</span>
                </div>
                <div className="col flex flex-column align-items-end">
                    <span className="block text-900 font-bold mb-2">{recentTransactions.amount}</span>
                    <span className="block text-500 font-small text-xs">{recentTransactions.date}</span>
                    <span className="block text-500 font-small text-xs">{recentTransactions.time}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-nogutter flex-column rightsidebar align-content-start">

            <div className="col-12 h-3rem flex-row mt-6 mb-6">
                <div className="grid grid-nogutter w-full">
                    <div className="col-5 p-1 m-2 border-round">
                        <Button icon="pi pi-bell" />
                    </div>
                    <div className="col p-1  mt-2 ml-2 mb-2 mr-1 border-round flex justify-content-end">
                        <Button icon="pi pi-user" />
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="grid grid-nogutter w-full flex-column">
                    <div className="col-12">
                        <div className="grid grid-nogutter w-full">
                            <div className="col p-1  m-2 border-round text-xl text-white">
                                Your Cards
                            </div>
                            <div className="col p-1  m-2 border-round relative flex align-items-center justify-content-center">
                                <div className='absolute right-0 '>
                                    <Button icon="pi pi-plus-circle" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="carousel-demo">
                            <div className="card">
                                <Carousel value={creditCards} numVisible={1} numScroll={1}
                                    itemTemplate={creditCardTemplate} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <Carousel className='w-full' value={recentTransactions} numVisible={3} numScroll={3}
                    itemTemplate={recentTransactionsTemplate} orientation='vertical' />
            </div>

        </div>
    )
}

const LeftSidebar = () => {
    return (

        <div className='grid grid-nogutter flex-column h-full align-items-center border-right-1 border-700 pt-6'>
            <div className='col-12 flex justify-content-center'><img alt="logo" src="assets/images/web-logo/small-logo.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className="mb-6" style={{ width: '100%' }}></img></div>
            <div className='col-12 flex justify-content-center mb-6'>
                <Button icon="pi pi-th-large" className="p-button-lg w-6"/>
            </div>
            <div className='col-12 flex justify-content-center mb-6'>
                <Button icon="pi pi-comment" className="p-button-lg w-6"/>
            </div>
            <div className='col-12 flex justify-content-center mb-6'>
                <Button icon="pi pi-shopping-cart" className="p-button-lg w-6"/>
            </div>
            <div className='col-12 flex justify-content-center mb-6'>
                <Button icon="pi pi-credit-card" className="p-button-lg w-6"/>
            </div>
            <div className='col-12 flex justify-content-center mb-6'>
                <Button icon="pi pi-folder" className="p-button-lg w-6"/>
            </div>
            <div className='col-12 flex justify-content-center mb-6'>
                <Button  icon="pi pi-cog" className="p-button-lg w-6"/>
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