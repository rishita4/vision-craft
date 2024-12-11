import WeatherDetails from "@/comps/weatherDetails/WeatherDetails";
import {fetchApi} from '@/api/WeatherApi';
import React, { useEffect, useState } from "react";
import Footer from "@/comps/footer/Footer";
import Navbar from "@/comps/navbar/Navbar";

function Apipage() {


    const [avgDailyTemp, setavgDailyTemp] = useState(0);
  const [maxMinTemp, setmaxMinTemp] = useState({ max: 0,min: 0});
  const [tempImgSrc, settempImgSrc] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [areaName, setareaName] = useState(null);

    useEffect(()=>{
        async function getData (latitude, longitude) {
            const response = await fetchApi(latitude, longitude);
            setCurrentWeatherData(response);
            // settempImgSrc(getweatherPicture(response.current.weather[0].main))
        }
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              getData(latitude, longitude);
              setInterval(() => {
                getData(latitude, longitude);
              }, 300000);
            },
            (error) => {
              console.error("Error getting location: ", error);
            }
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
        
    }, [])

    if (!currentWeatherData) {
      return <div>Loading...</div>;
    }
    function getweatherPicture(weatherCondition){
      if(weatherCondition.toLowerCase()==='clouds')
        return "/clouds.png"
      if(weatherCondition.toLowerCase()==='rain')
        return "/rain.jpg"
      if(weatherCondition.toLowerCase()==='clear')
        return "/sun.png"
      if(weatherCondition.toLowerCase()==='wind')
        return "/wind.png"
    }
  return (
    <>
    <Navbar/>
    <div className="main">
      <div className="weather-container">
          <main className="weather-main">
            {/* <img src={tempImgSrc} alt="weather condition"></img> */}
            <div id="weather-temp" className="weather-temp">
              {currentWeatherData.current.temp}°
            </div>
            <div className="weather-condition">
              {currentWeatherData.current.weather[0].main}
            </div>
          </main>

          <section className="weather-details">
            <WeatherDetails
              label="Wind"
              value={`${currentWeatherData.current.wind_speed} mps`}
            />
            <WeatherDetails
              label="Feels like"
              value={`${currentWeatherData.current.feels_like}°`}
            />
            <WeatherDetails label="Daily Avg" value={`${avgDailyTemp}°`} />
            <WeatherDetails label="Max Temp" value={`${maxMinTemp.max}°`} />
            <WeatherDetails label="Min Temp" value={`${maxMinTemp.min}°`} />
            <WeatherDetails
              label="Sunrise"
              value={currentWeatherData.current.sunrise}
            />
            <WeatherDetails
              label="Sunset"
              value={currentWeatherData.current.sunset}
            />
          </section>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Apipage
