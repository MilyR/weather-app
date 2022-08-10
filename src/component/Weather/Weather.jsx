import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import {WiCloud} from 'react-icons/wi'
import { IconContext } from 'react-icons'
import IconState, {validValues} from '../IconState'

const Weather = ({temperature , state}) => {
  return (
    <div>
      <WiCloud/>
        <IconContext.Provider value= {{size:'5em'}}>   
         <IconState state={state} />
        </IconContext.Provider>
        <Typography display="inline" variant="h3">{temperature}</Typography>
    </div>
  )
  }

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
}

export default Weather
