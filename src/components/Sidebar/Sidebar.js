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
                    <div className="col flex flex-column justify-content-end align-content-end align-items-end">
                        <span className="block text-900 font-bold mb-2">{recentTransactions.amount}</span>
                        <span className="block text-500 font-small text-xs">{recentTransactions.date} {recentTransactions.time}</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div class="grid grid-nogutter w-full flex-column m-2 rightsidebar align-content-start">
            <div class="col-12 h-3rem flex-row">
                <div class="grid grid-nogutter w-full">
                    <div class="col-5 p-1  m-2 border-round">
                        <Button icon="pi pi-bell" />
                    </div>
                    <div class="col p-1  mt-2 ml-2 mb-2 mr-1 border-round flex justify-content-end">
                        <Button icon="pi pi-user" />
                    </div>
                </div>
            </div>

            <div class="col-12 mt-6 h-10rem mb-6">
                <div class="grid grid-nogutter w-full flex-column">
                    <div class="col-12">
                        <div class="grid grid-nogutter w-full">
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
                                    itemTemplate={creditCardTemplate}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div className="carousel-demo m-2">
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
        <div class="flex flex-column">
            <div class="p-1  m-2 border-round">
                <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mb-3"></img>
            </div>
            <div class="p-1  m-2 border-round">
                <Button icon="pi pi-th-large" />
            </div>
            <div class="p-1  m-2 border-round">
                <Button icon="pi pi-comment" />
            </div>
            <div class="p-1  m-2 border-round">
                <Button icon="pi pi-shopping-cart" />
            </div>
            <div class="p-1  m-2 border-round">
                <Button icon="pi pi-credit-card" />
            </div>
            <div class="p-1  m-2 border-round">
                <Button icon="pi pi-folder" />
            </div>
            <div class="align-self-end flex p-1  m-2 border-round">
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