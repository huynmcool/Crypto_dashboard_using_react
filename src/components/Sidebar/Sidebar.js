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
            <div className="surface-0 shadow-2 p-2 border-1 border-50 border-round">
                <div className="grid flex h-full">
                    <div className="col-3 flex align-items-center justify-content-center">
                        <img src={`assets/images/coins/svg/black/${recentTransactions.coin_logo}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={recentTransactions.coin_logo} className="credit-card-image" />
                    </div>
                    <div className="col w-5 p-2">
                        <span className="block text-900 font-bold">{recentTransactions.coin_name}</span>
                        <span className="block text-500 font-medium text-sm">{recentTransactions.coin_short}</span>
                    </div>
                    <div className="col flex flex-column align-items-end p-2">
                        <span className="block text-900 font-bold mb-2">{recentTransactions.amount}</span>
                        <span className="block text-500 font-small text-xs">{recentTransactions.date}</span>
                        <span className="block text-500 font-small text-xs">{recentTransactions.time}</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-nogutter h-screen flex-column rightsidebar align-content-start">
            <div className="col-12 h-3rem flex-row">
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

            <div className="col-12 p-2">
                <div className="carousel-demo">
                    <div className="card">
                        <Carousel value={recentTransactions} numVisible={3} numScroll={3}
                            itemTemplate={recentTransactionsTemplate} orientation='vertical' />
                    </div>
                </div>
            </div>

        </div>
    )
}

const LeftSidebar = () => {
    return (
        <div className="flex flex-wrap flex-column">
            <div className="p-1  m-2 border-round">
                <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mb-3"></img>
            </div>
            <div className="p-1  m-2 border-round">
                <Button icon="pi pi-th-large" />
            </div>
            <div className="p-1  m-2 border-round">
                <Button icon="pi pi-comment" />
            </div>
            <div className="p-1  m-2 border-round">
                <Button icon="pi pi-shopping-cart" />
            </div>
            <div className="p-1  m-2 border-round">
                <Button icon="pi pi-credit-card" />
            </div>
            <div className="p-1  m-2 border-round">
                <Button icon="pi pi-folder" />
            </div>
            <div className="p-1  m-2 border-round">
                <Button icon="pi pi-cog" />
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