import React from 'react';
import "primeflex/primeflex.css";
import './App.css';

// import LeftSidebar from './components/Sidebar/LeftSidebar';
// import RightSidebar from './components/Sidebar/RightSidebar';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import CoinPriceCarousel from './components/CoinsPriceCarousel/CoinPriceCarousel';

const App = () => {
  return (
    <div className='app'>
      <div className="grid grid-nogutter">

        {/* <div className="col-1 border-right-1 border-700 h-screen bg-red-900">
          <Sidebar side={"left"}></Sidebar>
        </div> */}

        <div className="col-fixed border-right-1 border-700 h-screen bg-red-900" style={{ width: '4rem' }}>
          <Sidebar side={"left"}></Sidebar>
        </div>

        <div className="col flex justify-content-start bg-blue-900" >
          <div className="grid grid-nogutter">
            <div className="col border-left-1 border-700 p-0">
              <div className="grid grid-nogutter flex-column align-items-start">
                <div className="col-12 bg-green-900">
                  <Topbar></Topbar>
                </div>

                <div className="col-12 bg-yellow-900">
                  <CoinPriceCarousel></CoinPriceCarousel>
                </div>
              </div>
            </div>

            <div className="col-2 border-left-1 border-700 h-screen bg-pink-900 p-0">
              <Sidebar side={"right"}></Sidebar>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
