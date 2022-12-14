import React from 'react'
import PropTypes from 'prop-types'
import { LineChart,
   Line, 
   CartesianGrid, 
   XAxis,
   YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer } from 'recharts'

const ForecastChart = ({ data }) => {
  return (
    <ResponsiveContainer height={250}  width={"95%"}>
        <LineChart
           margin={{ top: 20, bottom: 20, left: 5, rigth: 5 }}
            data={data} > 
            <XAxis dataKey="dayHour"> </XAxis>
            <YAxis />
            <CartesianGrid></CartesianGrid>
            <Tooltip />
            <Legend />
        <Line Type="monotone" dataKey="max" stroke="#FF0000" />
        <Line Type="monotone" dataKey="min" stroke="#0000FF" />  
        </LineChart>
    </ResponsiveContainer>
  )
}

ForecastChart.propTypes = { 
   data: PropTypes.arrayOf(
    PropTypes.shape({
      dayHour: PropTypes.string.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    })
   ).isRequired

}

export default ForecastChart