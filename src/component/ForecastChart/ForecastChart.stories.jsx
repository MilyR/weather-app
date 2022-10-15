import React from 'react'
import ForecastChart from './ForecastChart'

export default {
    title: "ForecastChart",
    component: ForecastChart
}

const data = [ 

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
export const ForecastChartExample = () => (
    <ForecastChart data = {data}/>
)