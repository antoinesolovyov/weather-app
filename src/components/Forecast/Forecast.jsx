import React, { useEffect, useState } from 'react'
import { formatDayName } from '../Clock/formatter'
import './Forecast.css'

const WEATHER_API_KEY = '7cd1581792cb7fa3710cd45312c6415e'
const WEATHER_API = 'https://api.openweathermap.org/data/2.5/'
const fetchWeatherForecast = (lat, lon) =>
  fetch(`${WEATHER_API}onecall?appid=${WEATHER_API_KEY}&lat=${lat}&lon=${lon}&units=metric`)
const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`

function Forecast () {
  const [timezone, setTimezone] = useState('')
  const [forecast, setForecast] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude

      const fetchData = async () => {
        const response = await fetchWeatherForecast(lat, lon)
        const json = await response.json()

        const { timezone, daily } = json
        const forecast = []
        for (let i = 0; i < 7; i++) {
          forecast[i] = {
            ...daily[i].weather[0],
            temp: daily[i].temp
          }
        }

        setTimezone(timezone)
        setForecast(forecast)
      }

      fetchData()
    })
  }, [])

  const date = new Date()

  console.log(date)
  return (
    <>
      <h2>{timezone}</h2>
      <div className='forecast'>
        <div className='cards'>
          {forecast.map((day, dayNum) => (
            <div key={dayNum} className='card'>
              <p>{formatDayName(date.setDate(date.getDate() + 1) && date)}</p>
              <img src={getIcon(day.icon)} alt={day.description} />
              <span className='temperature'>{day.temp.day.toFixed()}°</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Forecast
