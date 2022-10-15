import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList= [
    { hour: 18, state:"sunny", temperature: 17, weekDay:"Jueves" },
    { hour: 11, state:"cloudy", temperature: 20, weekDay:"Viernes" },
    { hour: 16, state:"fog", temperature: 15, weekDay:"Sabado" },
    { hour: 20, state:"rain", temperature: 14, weekDay:"Domingo" },
    { hour: 12, state:"sunny", temperature: 18, weekDay:"Lunes" },
    { hour:17, state:"rain" , temperature: 16, weekDay: "Lunes" },
]

test('Forecast render' , async () => {



    const { findAllByTestId } = render(
         <Forecast 
            forecastItemList={forecastItemList} />)

    const forecastItems = await findAllByTestId ("forecast-item-container")

    expect(forecastItems).toHaveLength(6)
})