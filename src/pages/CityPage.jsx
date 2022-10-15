import React from 'react'
import Grid from '@mui/material/Grid'
import CityInfo from '../component/CityInfo'
import Weather from '../component/Weather'
import WeatherDetails from '../component/WeatherDetails'
import ForecastChart from '../component/ForecastChart'
import Forecast from '../component/Forecast'



const dataExample = [ 

  {dayHour:"Jue ",
      "min": 17,
      "max": 18,
     },
  { dayHour: "Vier", 
   "min": 16,
   "max": 20, 
   },
  { dayHour: "Sab",
   "min": 16,
   "max": 15, 
   },
  { 
    dayHour: "Dom",
       "min": 14, 
       "max": 20, 
      },
  { dayHour: "Lun", 
    "min": 18,
     "max": 21, },
  { dayHour: "Lunes", 
    "min": 16, 
    "max": 18, },
]
const forecastItemListExample = [
  { hour: 18, state:"sunny", temperature:17, weekDay:"Jueves" },
  { hour: 11, state:"cloudy", temperature:20, weekDay:"Viernes" },
  { hour: 16, state:"fog", temperature:15, weekDay:"Sabado" },
  { hour: 20, state:"rain", temperature:14, weekDay:"Domingo" },
  { hour: 12, state:"sunny", temperature:18, weekDay:"Lunes" },
  { hour:17, state:"rain" , temperature: 16, weekDay: "Lunes" },
]

 const CityPage = () => {
    const city= "Tucuman"
    const country= "Argentina"
    const state= "cloudy"
    const temperature= 20
    const humidity= 39
    const wind= 18
    const data= dataExample
    const forecastItemList= forecastItemListExample
 
    return (
    <Grid container
          justify="space-around"
          direction="column"
          spacing={2}>
          <Grid item container 
               xs={12}
               justify="center"
               alignItems="flex-end">
               <CityInfo city={city} country={country} />
          </Grid>
        <Grid container item xs={12}
                  justify="center">
               <Weather state={state} temperature={temperature} />
            </Grid>
                <WeatherDetails humidity={ humidity} 
                     wind={wind}/>
            <Grid item>
               <ForecastChart data={data}/>
          </Grid>
          <Grid item>
               <Forecast forecastItemList={forecastItemList}/>
          </Grid>
    </Grid>
  )
  }


export default CityPage