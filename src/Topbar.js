import React, { useState, useEffect } from 'react'
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';

const Topbar = () => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);
    const [searchValue, setSearchValue] = useState('');
    return (

        <div class="grid grid-nogutter w-full">
            <div class="col-1 w-6 bg-yellow-500 text-white font-bold ">
                <h2>Dashboard</h2>
                <br />
                <h5>
                    <i className="pi pi-clock"></i>
                    {dateState.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    })}
                    <i className="pi pi-calendar"></i>
                    {dateState.toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
                </h5>
            </div>
            <div class="col-1 w-6 bg-blue-500 text-white font-bold flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search" />
                </span>
            </div>
        </div>

        /*  */


    )
}

export default Topbar