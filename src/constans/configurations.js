// yeap
const configuration = {
	success: true,
	configurations: {
		119: {
			start_date: "2020-01-01",
			end_date: "2020-12-31",
			instruments: {
				10301: {
					cod: "Кис2",//Название
					locname: "Кисловодск",
					latitude: 43.7402600307874,//Геодезическая широта, град -90 +90
					longitude: 42.6536598478286,//Геодезическая долгота, град -180 180
					altitude: 2107.7471803287,//Высота,м 0 
					aperture: 19.2,//Апертура,см 0
					secondary_coefficient: 0.52,//Коэффициент экранирования 0 1
					pixel_scale: 6.3,//Масштаб пикселя, угл.с/px, 0
					readout_noise: 5,//Шум считывания,е 0
					fovx: 14.0,//Поле зрения по X, град 0
					fovy: 9.0,//Поле зрения по Y, град0
					frame_readout: 0.5,//Время считывания кадра в буфер,с 0
					frame_flush: 5.0,//Время сохранения кадра на ФС,с 0
					task_switch_time: 6,//Время на смену задания,с 0
					stabilization_time: 10,//Время на стабилизацию,с 0
					mount_type: "экваториальная",//Тип монтировки (альтазимутальная/экваториальная)
					slew_vel_alpha: 1.8,//Скорость перенаведения по оси альфа, град/с 0
					slew_vel_delta: 1.8,//Скорость перенаведения по оси дельта, град/с 0
					min_elevation: 10,//Минимальный угол места, град 0 90
					transmittivity: 0.5,//Коэффициент пропускания 0 1 
					quantum_efficiency: 0.8,//Квантовая эффективность V 0 1 
					mode: "обзор",//Режим работы (обзор/ЦУ)
					noko_twilight: false,//Работа по НОКО в сумерки
					noko: false,//Работа по НОКО
					gso_survey: true//Работа по геостационарной области
				},
				10316: {
					cod: "Блг7",
					locname: "Благовещенск",
					latitude: 50.1265854,
					longitude: 127.7223353,
					altitude: 161.172,
					aperture: 65.0,
					secondary_coefficient: 0.33,
					pixel_scale: 1.59,
					readout_noise: 5,
					fovx: 2.7,
					fovy: 2.7,
					frame_readout: 7,
					frame_flush: 0,
					task_switch_time: 6,
					stabilization_time: 10,
					mount_type: "альтазимутальная",
					slew_vel_alpha: 4,
					slew_vel_delta: 4,
					min_elevation: 10,
					transmittivity: 0.5,
					quantum_efficiency: 0.8,
					mode: "ЦУ",
					noko_twilight: false,
					noko: false,
					gso_survey: false
				}
			}
		}
		,
		125: {
			start_date: "2020-01-01",
			end_date: "2020-12-31",
			instruments: {
				10093: {//Номер средства
					cod: "Кис2",//Название
					locname: "Кисловодск",
					latitude: 43.7402600307874,//Геодезическая широта, град -90 +90
					longitude: 42.6536598478286,//Геодезическая долгота, град -180 180
					altitude: 2107.7471803287,//Высота,м 0 
					aperture: 19.2,//Апертура,см 0
					secondary_coefficient: 0.52,//Коэффициент экранирования 0 1
					pixel_scale: 6.3,//Масштаб пикселя, угл.с/px, 0
					readout_noise: 5,//Шум считывания,е 0
					fovx: 14.0,//Поле зрения по X, град 0
					fovy: 9.0,//Поле зрения по Y, град0
					frame_readout: 0.5,//Время считывания кадра в буфер,с 0
					frame_flush: 5.0,//Время сохранения кадра на ФС,с 0
					task_switch_time: 6,//Время на смену задания,с 0
					stabilization_time: 10,//Время на стабилизацию,с 0
					mount_type: "экваториальная",//Тип монтировки (альтазимутальная/экваториальная)
					slew_vel_alpha: 1.8,//Скорость перенаведения по оси альфа, град/с 0
					slew_vel_delta: 1.8,//Скорость перенаведения по оси дельта, град/с 0
					min_elevation: 10,//Минимальный угол места, град 0 90
					transmittivity: 0.5,//Коэффициент пропускания 0 1 
					quantum_efficiency: 0.8,//Квантовая эффективность V 0 1 
					mode: "обзор",//Режим работы (обзор/ЦУ)
					noko_twilight: false,//Работа по НОКО в сумерки
					noko: false,//Работа по НОКО
					gso_survey: true//Работа по геостационарной области
				},
				10316: {
					cod: "Блг7",
					locname: "Благовещенск",
					latitude: 50.1265854,
					longitude: 127.7223353,
					altitude: 161.172,
					aperture: 65.0,
					secondary_coefficient: 0.33,
					pixel_scale: 1.59,
					readout_noise: 5,
					fovx: 2.7,
					fovy: 2.7,
					frame_readout: 7,
					frame_flush: 0,
					task_switch_time: 6,
					stabilization_time: 10,
					mount_type: "альтазимутальная",
					slew_vel_alpha: 4,
					slew_vel_delta: 4,
					min_elevation: 10,
					transmittivity: 0.5,
					quantum_efficiency: 0.8,
					mode: "ЦУ",
					noko_twilight: false,
					noko: false,
					gso_survey: false
				},
				10095: {//Номер средства
					cod: "Кис2",//Название
					locname: "Кисловодск",
					latitude: 43.7402600307874,//Геодезическая широта, град -90 +90
					longitude: 42.6536598478286,//Геодезическая долгота, град -180 180
					altitude: 2107.7471803287,//Высота,м 0 
					aperture: 19.2,//Апертура,см 0
					secondary_coefficient: 0.52,//Коэффициент экранирования 0 1
					pixel_scale: 6.3,//Масштаб пикселя, угл.с/px, 0
					readout_noise: 5,//Шум считывания,е 0
					fovx: 14.0,//Поле зрения по X, град 0
					fovy: 9.0,//Поле зрения по Y, град0
					frame_readout: 0.5,//Время считывания кадра в буфер,с 0
					frame_flush: 5.0,//Время сохранения кадра на ФС,с 0
					task_switch_time: 6,//Время на смену задания,с 0
					stabilization_time: 10,//Время на стабилизацию,с 0
					mount_type: "экваториальная",//Тип монтировки (альтазимутальная/экваториальная)
					slew_vel_alpha: 1.8,//Скорость перенаведения по оси альфа, град/с 0
					slew_vel_delta: 1.8,//Скорость перенаведения по оси дельта, град/с 0
					min_elevation: 10,//Минимальный угол места, град 0 90
					transmittivity: 0.5,//Коэффициент пропускания 0 1 
					quantum_efficiency: 0.8,//Квантовая эффективность V 0 1 
					mode: "обзор",//Режим работы (обзор/ЦУ)
					noko_twilight: false,//Работа по НОКО в сумерки
					noko: false,//Работа по НОКО
					gso_survey: true//Работа по геостационарной области
				}
			}
		}
	}
}

export default configuration