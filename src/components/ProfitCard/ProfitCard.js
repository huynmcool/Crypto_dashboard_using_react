import React from 'react'

export const ProfitCard = () => {
    return (
        <div className='w-full'>
            <div className="border-none border-round-lg chart-card flex flex-wrap flex-column">
                <div className='grid grid-nogutter flex-column p-5'>
                    <div className='col-12'>
                        <div className="text-0 font-bold text-xl pb-3">Profit</div>
                    </div>
                    <div className='col-12 flex flex-column'>
                        <div className="grid grid-nogutter pb-3 pt-3">
                            <div className="col-3 flex">
                                <div className='border-round-lg surface-700 p-2 flex justify-content-center align-content-center align-items-center'>
                                    <i className="pi pi-arrow-up text-green-500" style={{ 'fontSize': '3em' }}></i>
                                </div>
                            </div>
                            <div className="col flex justify-content-start flex flex-column">
                                <span className="block text-0 font-bold m-2 flex text-green-400 text-2xl">$ 1872.75</span>
                                <span className="block text-0 m-2 flex text-500">Income</span>
                            </div>
                        </div>
                        <div className="grid grid-nogutter pt-3 border-top-1 border-500">
                            <div className="col-3 flex">
                                <div className='border-round-lg surface-700 p-2 flex justify-content-center align-content-center align-items-center'>
                                    <i className="pi pi-arrow-down text-red-500" style={{ 'fontSize': '3em' }}></i>
                                </div>
                            </div>
                            <div className="col flex justify-content-start flex flex-column">
                                <span className="block text-0 font-bold m-2 flex text-red-400 text-2xl">$ 895.52</span>
                                <span className="block text-0 m-2 flex text-500">Expenses</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
