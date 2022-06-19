import React, { useState, useEffect } from 'react'
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Topbar = () => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);
    const [searchValue, setSearchValue] = useState('');
    return (

        <div class="grid grid-nogutter w-full">
            <div class="col-1 w-6 text-white font-bold flex align-items-center">
                <div className="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
                    <div>
                        <div className="font-medium text-3xl">Dashboard</div>
                        <div className="flex align-items-center flex-wrap justify-content-between">
                            <div className="mr-5 flex align-items-center justify-content-between mt-3">
                                <i className="pi pi-clock">&nbsp;</i>
                                <span>
                                    {dateState.toLocaleString('en-US', {
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        hour12: true,
                                    })}
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <i className="pi pi-calendar">&nbsp;</i>
                                <span>
                                    {dateState.toLocaleDateString('en-GB', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                    })}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-1 w-6 text-white font-bold flex justify-content-end align-items-center">
                <span className="p-input-icon-right">
                    <i className="pi pi-search" />
                    <InputText value={searchValue} className="p-inputtext-lg block" onChange={(e) => setSearchValue(e.target.value)} placeholder="Search" />
                </span>
            </div>
        </div>

        /*  */


    )
}

export default Topbar