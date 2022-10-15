import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}
const forecastItemList= [
    { hour: 18, state:"sunny", temperature:17, weekDay:"Jueves" },
    { hour: 11, state:"cloudy", temperature:20, weekDay:"Viernes" },
    { hour: 16, state:"fog", temperature:15, weekDay:"Sabado" },
    { hour: 20, state:"rain", temperature:14, weekDay:"Domingo" },
    { hour: 12, state:"sunny", temperature:18, weekDay:"Lunes" },
    { hour:17, state:"rain" , temperature:16, weekDay: "Lunes" },
]
export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)
