import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import NewСalculation from './components/NewСalculation/NewСalculation';
import Results from './components/Results/Results';

import TelescopePopup from './components/NewСalculation/TelescopePopup/TelescopePopup';
import AddNSPopup from './components/AddNSPopup/AddNSPopup';
import LoadingPopup from './components/LoadingPopup/LoadingPopup';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResultsDone from './components/ResultsDone/ResultsDone';


function App() {

  const [isTelescopePopupOpen, setIsTelescopePopupOpen] = useState(false);
  const [isAddNSPopupOpen, setIsAddNSPopupOpen] = useState(false);
  const [isLoadingPopupOpen, setIsLoadingPopupOpen] = useState(false);

  // попап добавления из базы
  function openAddNSPopup() {
    setIsAddNSPopupOpen(true)
  }

  function closeAddNSPopup() {
    setIsAddNSPopupOpen(false)
  }

  // попап добавления в базу
  function openTelescopePopup() {
    setIsTelescopePopupOpen(true)
  }

  function closeTelescopePopup() {
    setIsTelescopePopupOpen(false)
  }

  // попап ожидания расчетов
  function openLoadingPopup() {
    setIsLoadingPopupOpen(true)
  }

  function closeLoadingPopup() {
    setIsLoadingPopupOpen(false)
  }

  return (
    <BrowserRouter>
      <div className='header'><NavBar /></div>
      <div className="App">
        <div className='main'>
          <Routes>
            <Route path="/culculate" element={<NewСalculation openTelescope={openTelescopePopup} loadPopup={openLoadingPopup} />} />
            <Route path="/results" element={<Results />} />
            <Route path="/resultsdone" element={<ResultsDone />} />
          </Routes>
        </div>
      </div>

      <TelescopePopup isOpen={isTelescopePopupOpen} onClose={closeTelescopePopup} addNs={openAddNSPopup} />
      <LoadingPopup isOpen={isLoadingPopupOpen} onClose={closeLoadingPopup} />
      <AddNSPopup isOpen={isAddNSPopupOpen} onClose={closeAddNSPopup} />

    </BrowserRouter>
  );
}

export default App;
