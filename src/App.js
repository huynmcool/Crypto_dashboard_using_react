import React from 'react';
import "primeflex/primeflex.css";
import './App.css';

// import LeftSidebar from './components/Sidebar/LeftSidebar';
// import RightSidebar from './components/Sidebar/RightSidebar';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import CoinPriceCarousel from './components/CoinsPriceCarousel/CoinPriceCarousel';
import SmallChartCard from './components/SmallChartCard/SmallChartCard';
import BigChartCard from './components/BigChartCard/BigChartCard';
import { ProfitCard } from './components/ProfitCard/ProfitCard';
import QuickTransferCard from './components/QuickTransferCard/QuickTransferCard';

const App = () => {
  return (
    <div className='app'>
      <div className="grid grid-nogutter h-full">

        {/* <div className="col-1 border-right-1 border-700 h-screen bg-red-900">
          <Sidebar side={"left"}></Sidebar>
        </div> */}

        <div className="col-fixed flex justify-content-center" style={{ width: "6rem" }} >
          <Sidebar side={"left"}></Sidebar>
        </div>

        <div className="col flex justify-content-start" >
          <div className="grid grid-nogutter h-full">

            <div className="col p-0">
              <div className="grid grid-nogutter align-items-start">
                <div className="col-12 p-6">
                  <Topbar></Topbar>
                </div>
                <div className="col-12 flex flex-column justify-content-start">
                  <div className="grid grid-nogutter justify-content-evenly">
                    <div className='col-4 flex justify-content-center p-6 pt-0'>
                      <SmallChartCard></SmallChartCard>
                    </div>
                    <div className='col-4 flex justify-content-center p-6 pt-0'>
                      <SmallChartCard></SmallChartCard>
                    </div>
                    <div className='col-4 flex justify-content-center p-6 pt-0'>
                      <SmallChartCard></SmallChartCard>
                    </div>
                  </div>
                  <div className="grid grid-nogutter justify-content-evenly">
                    <div className='col-8 p-6 pt-0'>
                      <BigChartCard></BigChartCard>
                    </div>
                    <div className='col-4'>
                      <div className="grid grid-nogutter">
                        <div className='col-12 flex justify-content-center p-6 pt-0'>
                          <ProfitCard></ProfitCard>
                        </div>
                        <div className='col-12 flex justify-content-center p-6 pt-0'>
                          <QuickTransferCard></QuickTransferCard>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-fixed flex border-left-1 border-700 bg-pink-900 p-0 h-full" style={{ width: "23rem" }}>
              <Sidebar side={"right"}></Sidebar>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
