import React from 'react'
import Weather from '../Weather'
import {CLOUD, SUNNY} from '../../constants/weathers'

export default {
    title: "Weather",
    component: Weather
}

export const WeatherCloud = () => <Weather temperature={10} state={CLOUD}/>


export const WeatherSunny = () => <Weather temperature={10} state={SUNNY}/>
 