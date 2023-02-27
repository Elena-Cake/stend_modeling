export const newCulc = {
	start_date: "2020-01-01",
	end_date: "2020-12-31",
	catalogue: "anc",
	instruments: [
		{
			nsr: 10093,//Номер средства
			cod: "Кис2",//Название
			latitude: 43.7402600307874,//Геодезическая широта, град -90 +90
			longitude: 42.6536598478286,//Геодезическая долгота, град -180 180
			altitude: 2107.7471803287,//Высота,м 0 
			aperture: 19.2,//Апертура,см 0
			secondary_coefficient: 0.52,//Коэффициент экранирования 0 1
			pixel_scale: 6.3,//Масштаб пикселя, угл.с/px, 0
			readout_noise: 5,//Шум считывания,е 0
			fovx: 14.0,//поле зрения по X, град 0
			fovy: 9.0,//поле зрения по X, град0
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
		{
			nsr: 10316,
			cod: "Блг7",
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
	],
	sun_elevation: 18,
	detectable_snr: 3.0,
	max_exp: 7.0,
	max_track_length: 0.05,
	zenith_sky_brightness: 22
}