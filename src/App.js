import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import NewСalculation from './components/NewСalculation/NewСalculation';
import Results from './components/Results/Results';

import TelescopePopup from './components/NewСalculation/TelescopePopup/TelescopePopup';
import AddNSPopup from './components/NewСalculation/TelescopePopup/AddNSPopup/AddNSPopup';
import LoadingPopup from './components/LoadingPopup/LoadingPopup';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import ResultsDone from './components/ResultsDone/ResultsDone';

import configuration from './constans/configurations'
import { newCulc } from './constans/newCalc';

function App() {

  const [isTelescopePopupOpen, setIsTelescopePopupOpen] = useState(false);
  const [isAddNSPopupOpen, setIsAddNSPopupOpen] = useState(false);
  const [isLoadingPopupOpen, setIsLoadingPopupOpen] = useState(false);

  const [isCulculating, setIsCulculating] = useState(false);


  const [textPopup, setTextPopup] = useState({ text: '', isError: false });
  const [dataLogMessage, setDataLogMessage] = useState('')
  const [dataLog, setDataLog] = useState('')

  // показ и сокрытие иконки расчета
  function setCulculationIcon() {
    setIsCulculating(true)
  }
  function setCulculatingOver() {
    setIsCulculating(false)
  }

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
  function openLoadingPopup(text, isError) {
    setTextPopup({ text, isError })
    openLoadPopup()
  }
  function openLoadPopup() { //!!!!!!!!!!!!!!!!err
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

  // формирование данных для таблицы готовых расчетов
  const changeResStructure = (res) => {
    const rowDataGenerated = res.instruments;

    return rowDataGenerated
  }

  // формирование данных для таблицы нового расчета
  const changeNewCalcStructure = (res) => {
    const rowDataGenerated = [];
    for (let item of res.instruments) {
      rowDataGenerated.push(item)
    }
    return rowDataGenerated
  }

  changeResStructure(newCulc)

  const [rowData, setRowData] = useState(
    changeNewCalcStructure(newCulc)
  );

  // Добавить телескоп (в базу) в таблицу расчета
  function addTelescope(
    nsr, cod, latitude, longitude,
    altitude, aperture, secondary_coefficient, pixel_scale,
    readout_noise, fovx, fovy, frame_readout,
    frame_flush, task_switch_time, stabilization_time, mount_type = 'альтазимутальная',
    slew_vel_alpha, slew_vel_delta, min_elevation, transmittivity,
    quantum_efficiency, mode = 'обзор', noko_twilight = false,
    noko = false, gso_survey = false) {
    setRowData([...rowData, {
      nsr: Number(nsr), cod,
      latitude: Number(latitude), longitude: Number(longitude),
      altitude: Number(altitude), aperture: Number(aperture),
      secondary_coefficient: Number(secondary_coefficient),
      pixel_scale: Number(pixel_scale), readout_noise: Number(readout_noise),
      fovx: Number(fovx), fovy: Number(fovy), frame_readout: Number(frame_readout),
      frame_flush: Number(frame_flush), task_switch_time: Number(task_switch_time),
      stabilization_time: Number(stabilization_time), mount_type,
      slew_vel_alpha: Number(slew_vel_alpha), slew_vel_delta: Number(slew_vel_delta),
      min_elevation: Number(min_elevation), transmittivity: Number(transmittivity),
      quantum_efficiency: Number(quantum_efficiency), mode,
      noko_twilight: noko_twilight === 'on' ? true : false,
      noko: noko === 'on' ? true : false,
      gso_survey: gso_survey === 'on' ? true : false
    }])
    closeAddNSPopup()
  }

  return (
    <BrowserRouter>
      <div className="App">

        <div className='header'><NavBar isCulculating={isCulculating} openLoadPopup={openLoadPopup} /></div>
        <div className='main'>
          <Routes>
            <Route path="/" element={<Results />} />
            <Route path="/culculate" element={
              <NewСalculation
                openTelescope={openAddNSPopup}
                openloadPopup={openLoadingPopup}
                rowData={rowData}
                setCulculationIcon={setCulculationIcon}
              />}
            />
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
      <LoadingPopup
        isOpen={isLoadingPopupOpen}
        onClose={closeLoadingPopup}
        dataLog={dataLog}
        dataLogMessage={dataLogMessage}
        textPopup={textPopup}
      />
      <AddNSPopup isOpen={isAddNSPopupOpen} onClose={closeAddNSPopup} onAddTelescope={addTelescope} />

    </BrowserRouter>
  );
}

export default App;
