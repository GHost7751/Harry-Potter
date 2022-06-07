import React from 'react';
import Header from './Layout/Header/Header';
import Home from './Layout/Home/Home';
import { Characters } from './Components/Characters/Characters';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <main>
      <Routes>
              <Route  path='/home' element={<Home />} />
              <Route  path='/characters' element={<Characters />}  />
          </Routes> 
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
