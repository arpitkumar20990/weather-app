import React, { useState } from 'react'

const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({
        cityName: "Enter city first !!!",
        tempr: 0,
        windSpeed: 0,
        lon:0,
        lat:0,
        country : "IN"
        
    })
    
    const addCity = (e)=>{
        setCity(e.target.value)
    }

    const getdata = async ()=>{
            if(!city.trim()){
                alert("Please enter the city")
                return
            }
            const apiKey = import.meta.env.VITE_API_KEY
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

            const res = await fetch(url);
            const data = await res.json();
            if(!res.ok){
                alert("City not found")
                return
            }

            const detail = {
                cityName : data.name,
                tempr : data.main.temp-273.14,
                windSpeed : data.wind.speed,
                lon : data.coord.lon,
                lat : data.coord.lat,
                country: data.sys.country
            }

            setWeather(detail)
            setCity("")
    }

  return (
    <div className='flex flex-col items-center  sm:w-1/2 sm:h-3/4 h-screen w-full bg-blue-300 sm:rounded-2xl md:p-10 p-5'>
        <h1 className='md:text-5xl text-3xl font-bold mb-9'>Weather - App</h1>
        <div className='flex flex-col w-full justify-center self-start text-lg font-semibold items-center gap-4'>
            <input className='md:w-1/2 outline-none bg-blue-100 rounded-2xl text-black placeholder:text-gray-600 p-3' type="text" placeholder='Enter the city' value={city} onChange={addCity} />

            <button className='bg-green-600 p-3 cursor-pointer rounded-2xl hover:bg-green-700' onClick={getdata}>Check Weather</button>
        </div>

        <div className='flex flex-col w-full justify-center self-start text-xl font-semibold items-center gap-2 mt-5'>
            <h1 className='md:text-4xl text-2xl font-bold text-emerald-900 mt-3'>{weather.cityName}</h1>
            <p className='text-sm text-gray-700 mb-5'>Country Code : {weather.country}</p>
            <p>Temperature : {weather.tempr?.toFixed(2)}&deg;C </p>
            <p>Wind Speed : {weather.windSpeed} Km/h </p>
            <p className='flex flex-col sm:flex-row sm:justify-between w-3/4 items-center justify-center'><span>longitude : {weather.lon}</span> <span>latitude : {weather.lat}</span></p>
        </div>

        <div className='w-full h-10 absolute bottom-0  text-end p-3 text-lg font-semibold text-gray-700 mb-4'>
            By - Arpit Kumar
        </div>


    </div>
  )
}

export default Weather  