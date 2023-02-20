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

import configuration from './constans/configurations'

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

  // формирование данных для таблицы нового расчета
  const changeResStructure = (res) => {
    const rowDataGenerated = [];
    for (let key in res.configurations) {
      for (let keyInst in res.configurations[key].instruments) {
        const item = {
          idInstruments: keyInst,
          name: res.configurations[key].instruments[keyInst].name,
          latitude: res.configurations[key].instruments[keyInst].latitude,
          longitude: res.configurations[key].instruments[keyInst].longitude,
          mode: res.configurations[key].instruments[keyInst].mode,
          voko: res.configurations[key].instruments[keyInst].voko,
          noko: res.configurations[key].instruments[keyInst].noko,
          noko_twilight: res.configurations[key].instruments[keyInst].noko_twilight,
          gso_survey: res.configurations[key].instruments[keyInst].gso_survey
        }
        rowDataGenerated.push(item)
      }
    }
    return rowDataGenerated
  }

  changeResStructure(configuration)

  const [rowData, setRowData] = useState(
    changeResStructure(configuration)
  );

  // Добавить телескоп (в базу) в таблицу расчета
  function addTelescope(id, name) {
    setRowData([...rowData, { idInstruments: id, name }])
    closeAddNSPopup()
  }

  return (
    <BrowserRouter>
      <div className="App">

        <div className='header'><NavBar /></div>
        <div className='main'>
          <Routes>
            <Route path="/" element={<ResultsDone />} />
            <Route path="/culculate" element={<NewСalculation openTelescope={openAddNSPopup} loadPopup={openLoadingPopup} rowData={rowData} />} />
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
      <AddNSPopup isOpen={isAddNSPopupOpen} onClose={closeAddNSPopup} onAddTelescope={addTelescope} />

    </BrowserRouter>
  );
}

export default App;
