import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import NewСalculation from './components/NewСalculation/NewСalculation';
import Results from './components/Results/Results';

import TelescopePopup from './components/NewСalculation/TelescopePopup/TelescopePopup';
import AddNSPopup from './components/NewСalculation/TelescopePopup/AddNSPopup/AddNSPopup';
import LoadingPopup from './components/LoadingPopup/LoadingPopup';

import { Navigate, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import ResultsDone from './components/ResultsDone/ResultsDone';

import configuration from './constans/configurations'
import { newCulc } from './constans/newCalc';
import { api } from './utils/api';
import InfoPopup from './components/InfoPopup/InfoPopup';

function App() {

  const navigate = useNavigate();

  const [isTelescopePopupOpen, setIsTelescopePopupOpen] = useState(false);
  const [isAddNSPopupOpen, setIsAddNSPopupOpen] = useState(false);
  const [isLoadingPopupOpen, setIsLoadingPopupOpen] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);

  // видимость иконки расчета
  const [isCulculating, setIsCulculating] = useState(false);
  // заружены ли результаты
  const [isVisibleResultsDone, setIsVisibleResultsDone] = useState(false)

  const [textPopup, setTextPopup] = useState({ text: '', isError: false });
  const [dataLogMessage, setDataLogMessage] = useState('')
  const [dataLog, setDataLog] = useState('')

  const [textInfoPopup, setTextInfoPopup] = useState({ text: '', isError: false });

  // для нового расчета
  const [resData, setResData] = useState({ instruments: [] });
  const [isResaltDownload, setIsResaltDownload] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  // для готового расчета
  const [dataResultsDone, setDataResultsDone] = useState({})

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


  // попап добавления в базу
  function openTelescopePopup() {
    setIsTelescopePopupOpen(true)
  }
  function closeTelescopePopup() {
    setIsTelescopePopupOpen(false)
  }

  // попап оповещения расчетов
  function openInfoPopup() {
    setIsInfoPopupOpen(true)
  }

  // попап ожидания расчетов
  function openLoadingPopup(text, isError) {
    setTextPopup({ text, isError })
    openLoadPopup()
  }
  function openLoadPopup() {
    setIsLoadingPopupOpen(true)
  }
  function closePopups(e) {
    setIsLoadingPopupOpen(false)
    setIsInfoPopupOpen(false)
    setIsTelescopePopupOpen(false)
    setIsAddNSPopupOpen(false)
  }

  // формирование данных для таблицы готовых расчетов
  const changeResStructure = (res) => {
    const rowDataGenerated = res.instruments;

    return rowDataGenerated
  }

  // Добавить телескоп (в базу) в таблицу расчета
  function addTelescope(
    nsr, cod, latitude, longitude,
    altitude, aperture, secondary_coefficient, pixel_scale,
    readout_noise, fovx, fovy, frame_readout,
    frame_flush, task_switch_time, stabilization_time, mount_type = 'альтазимутальная',
    slew_vel_alpha, slew_vel_delta, min_elevation, transmittivity,
    quantum_efficiency, mode = 'обзор', noko_twilight = false,
    noko = false, gso_survey = false) {
    setResData({
      ...resData,
      instruments: [...resData.instruments, {
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
      }]
    })
    closePopups()
  }

  // кнопки из резалтс
  const askDataToNewCalculation = (selectedId) => {

    // АПИ - запросить данные для конструктора
    // api.getNewCalc(selectedId)

    setIsResaltDownload(true)
    setResData(newCulc)
    setIsVisibleResultsDone(true)
    setSelectedId(selectedId)
    navigate('/', { replace: true })
  }


  const askDataToResultsDone = (selectedId) => {
    // АПИ - запросить данные для готового расчета
    // api.getResultsDone(selectedId)
    setDataResultsDone(newCulc)
    navigate('/resultsdone', { replace: true })
  }


  // получение статуса работы
  function longAPI() {
    let status
    api.getLog()
      .then((res) => {
        status = res.message == [] ? '' : res.message;
        setDataLog(status)
        console.log(status)
        if (status === 'finished') {
          setDataLogMessage('Перейдите на вкладку "Завершенные расчеты" для запроса результатов')
          openLoadingPopup('Расчет окончен!', false)
          // запросить и назначить данные во вкладку готового расчета
          // api.getResult()
          //   .then(data => {
          //     setDataResultsDone(data)
          //     setIsVisibleResultsDone(true)
          //     setIsCulculating(false)
          //   })
        } else if (status === 'aborted') {
          setTextInfoPopup({ text: 'Моделирование прервано', isError: true })
          openInfoPopup()
          setIsCulculating(false)
        } else {
          setTimeout(longAPI, 5000)
        }
      })
  }

  // апи запрос на расчет
  const startCalculate = (dataRequest) => {
    api.startCalculate(dataRequest)
      .then((data) => {
        if (data.success === 1) {
          setTextPopup({ text: 'Моделирование запущено', isError: false })
          setDataLogMessage(data.message)
          openLoadingPopup()
          longAPI()
        } else if (data.success === 0) {
          setTextPopup({ text: 'Не удалось запустить оценку', isError: true })
          setDataLogMessage(data.message)
          openLoadingPopup()
          longAPI()
        }
      })
  }


  // прервать вычисление
  const abortCulculate = (e) => {
    e.preventDefault()
    closePopups()
    setTextInfoPopup({ text: 'Моделирование прервано', isError: true })
    openInfoPopup()

    // api.abortCalculate()
    //   .then((data) => {
    //     closePopups()
    //     setTextInfoPopup({ text: 'Моделирование прервано', isError: true })
    //     openInfoPopup()
    //   }) 
  }

  return (
    <div>
      <div className="App">
        <div className='header'><NavBar isCulculating={isCulculating} openLoadPopup={openLoadPopup} /></div>
        <div className='main'>
          <Routes>
            <Route path="/" element={
              <NewСalculation
                openTelescope={openAddNSPopup}
                openloadPopup={openLoadingPopup}
                resData={resData}
                setCulculationIcon={setCulculationIcon}
                startCalculate={startCalculate}
                isResaltDownload={isResaltDownload}
                selectedIdResDone={selectedId}
                askDataToResultsDone={askDataToResultsDone}
              />}
            />
            <Route path="/results" element={
              <Results
                onSetDataToNewCalculation={askDataToNewCalculation}
                onSetDataToResultsDone={askDataToResultsDone}
              />} />
            <Route path="/resultsdone" element={<ResultsDone isVisible={isVisibleResultsDone} data={dataResultsDone} />} />
          </Routes>
        </div>
      </div>

      <TelescopePopup isOpen={isTelescopePopupOpen} onClose={closeTelescopePopup} addNs={openAddNSPopup} />
      <LoadingPopup
        isOpen={isLoadingPopupOpen}
        onClose={closePopups}
        dataLog={dataLog}
        dataLogMessage={dataLogMessage}
        textPopup={textPopup}
        abortCulculate={abortCulculate}
        isCulculating={isCulculating}
      />
      <AddNSPopup isOpen={isAddNSPopupOpen} onClose={closePopups} onAddTelescope={addTelescope} />
      <InfoPopup
        isOpen={isInfoPopupOpen}
        onClose={closePopups}
        textPopup={textInfoPopup} />
    </div>
  );
}

export default App;
