import React from 'react';
import "primeflex/primeflex.css";
import './App.css';

// import LeftSidebar from './components/Sidebar/LeftSidebar';
// import RightSidebar from './components/Sidebar/RightSidebar';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import SmallChartCard from './components/SmallChartCard/SmallChartCard';
import CoinPriceCarousel from './components/CoinsPriceCarousel/CoinPriceCarousel';

const App = () => {
  return (
    <div className='app'>
      <div class="grid grid-nogutter h-screen w-screen">
        <div class="col-.5 text-white font-bold flex border-right-1 border-700 leftsidebar" >
          {/* <Sidebar side={'left'}></Sidebar> */}
          {/* <LeftSidebar></LeftSidebar> */}
          <Sidebar side={"left"}></Sidebar>
        </div>
        <div class="col text-white flex align-items-center justify-content-center middlecontent" >
          <div class="grid grid-nogutter w-full h-full overflow-hidden align-items-center justify-content-center m-6">
            <div class="col-1 w-full h-6rem text-white flex">
              <Topbar></Topbar>
            </div>
            <div class="col w-full h-full bg-green-500 text-white font-bold flex">

              <div className='grid grid-nogutter flex-column w-full h-full align-items-center justify-content-center'>
                <div className='col-12 h-full'>
                  {/* <SmallChartCard /> */}
                  <CoinPriceCarousel></CoinPriceCarousel>
                </div>

              </div>

            </div>
          </div>
        </div>
        <div class="col-2 text-white font-bold flex border-left-1 border-700" id="rightsidebar">
          {/* <RightSidebar></RightSidebar> */}
          <Sidebar side={"right"}></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
