import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import NewСalculation from './components/NewСalculation/NewСalculation';
import Results from './components/Results/Results';

import TelescopePopup from './components/NewСalculation/TelescopePopup/TelescopePopup';
import AddNSPopup from './components/NewСalculation/TelescopePopup/AddNSPopup/AddNSPopup';
import LoadingPopup from './components/NewСalculation/LoadingPopup/LoadingPopup';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
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

  // послать номер расчета для получения коонфигурации в NewСalculation
  function onAskConfiguration(id) {
    console.log(id);
  }
  // послать номер расчета для просмотра результатов
  function onShowResults(id) {
    console.log(id);
  }

  return (
    <BrowserRouter>
      <div className="App">

        <div className='header'><NavBar /></div>
        <div className='main'>
          <Routes>
            <Route path="/" element={<ResultsDone />} />
            <Route path="/culculate" element={<NewСalculation openTelescope={openTelescopePopup} loadPopup={openLoadingPopup} />} />
            <Route path="/results" element={
              <Results
                onAskConfiguration={onAskConfiguration}
                onShowResults={onShowResults}
              />} />
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
