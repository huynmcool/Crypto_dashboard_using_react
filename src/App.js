import React from 'react';
import "primeflex/primeflex.css";
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div class="grid h-screen w-screen grid-nogutter overflow-hidden">
        <div class="col-.5 bg-blue-500 text-white font-bold flex align-items-center justify-content-center border-round" >
          Left sidebar
        </div>
        <div class="col bg-yellow-500 text-white font-bold flex border-round align-items-center justify-content-center" >
          <div class="grid w-full h-full overflow-hidden align-items-center justify-content-center grid-nogutter">
            <div class="col-1  w-full h-4rem bg-red-500 text-white font-bold flex border-round align-items-center justify-content-center">
              Topbar
            </div>
            <div class="col w-full h-full bg-green-500 text-white font-bold flex border-round align-items-center justify-content-center">
              Content 2
            </div>
          </div>
        </div>
        <div class="col-3 bg-purple-500 text-white font-bold flex align-items-center justify-content-center border-round">
          Right sidebar
        </div>
      </div>
    </div>
  );
}

export default App;
