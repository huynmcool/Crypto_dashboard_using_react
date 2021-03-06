import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';

const QuickTransferCard = () => {
    const [value9, setValue9] = useState(1500);
    return (
        <div className='w-full'>
            <div className="border-none border-round-lg chart-card flex flex-wrap flex-column">
                <div className='grid grid-nogutter flex-column p-5'>
                    <div className='col-12'>
                        <div className="text-0 font-bold text-xl pb-3">Qucik Transfer</div>
                    </div>
                    <div className='col-12'>
                        <div className="grid grid-nogutter pb-3 pt-3">
                            <div className="col flex justify-content-center align-items-center">
                                <Button icon="pi pi-user" className='p-button-rounded p-button-lg w-10 h-4rem' />
                            </div>
                            <div className="col flex justify-content-center align-items-center">
                                <Button icon="pi pi-user" className='p-button-rounded p-button-lg w-10 h-4rem'/>
                            </div>
                            <div className="col flex justify-content-center align-items-center">
                                <Button icon="pi pi-user" className='p-button-rounded p-button-lg w-10 h-4rem'/>
                            </div>
                            <div className="col flex justify-content-center align-items-center">
                                <Button icon="pi pi-user-plus" className='p-button-rounded p-button-lg p-button-outlined w-10 h-4rem'/>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className="grid grid-nogutter pb-3 pt-3">
                            <div className="col-3 flex justify-content-center align-items-center text-500">
                                Amount:
                            </div>
                            <div className="col flex justify-content-center">
                                <InputNumber inputId="currency-us" value={value9} onValueChange={(e) => setValue9(e.value)} mode="currency" currency="USD" locale="en-US" />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 flex justify-content-center'>
                        <Button label="Transfer Now !" icon="pi pi-send" className='w-full h-3rem'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickTransferCard