import React from 'react';
import Topbar from './Topbar';
import "primeflex/primeflex.css";
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div class="grid h-screen w-screen grid-nogutter overflow-hidden">
        <div class="col-.5 bg-blue-500 text-white font-bold flex align-items-center justify-content-center" >
          Left sidebar
        </div>
        <div class="col bg-bluegray-900 text-white font-bold flex align-items-center justify-content-center" >
          <div class="grid w-full h-full overflow-hidden align-items-center justify-content-center grid-nogutter">
            <div class="col-1  w-full h-6rem text-white font-bold flex ">
              <Topbar></Topbar>
            </div>
            <div class="col w-full h-full bg-green-500 text-white font-bold flex align-items-center justify-content-center">
              Content 2
            </div>
          </div>
        </div>
        <div class="col-3 bg-purple-500 text-white font-bold flex align-items-center justify-content-center">
          Right sidebar
        </div>
      </div>
    </div>
  );
}

export default App;
