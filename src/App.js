import React from 'react';
import "primeflex/primeflex.css";
import './App.css';

import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Topbar from './Topbar';

const App = () => {
  return (
    <div className='app'>
      <div class="grid grid-nogutter h-screen w-screen">
        <div class="col-.5 text-white font-bold flex border-right-1 border-700 leftsidebar" >
          <LeftSidebar></LeftSidebar>
        </div>
        <div class="col text-white flex align-items-center justify-content-center middlecontent" >
          <div class="grid grid-nogutter w-full h-full overflow-hidden align-items-center justify-content-center m-6">
            <div class="col-1 w-full h-6rem text-white flex">
              <Topbar></Topbar>
            </div>
            <div class="col w-full h-full bg-green-500 text-white font-bold flex align-items-center justify-content-center">
              Content
            </div>
          </div>
        </div>
        <div class="col-2 text-white font-bold flex  border-left-1 border-700" id ="rightsidebar">
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
