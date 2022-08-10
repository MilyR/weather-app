import React from 'react'
import PropTypes from 'prop-types'
import { WiCloud, 
    WiDayCloudy,
    WiDayFog,
    WiDaySunny,
    WiRain} from 'react-icons/wi'
import { CLOUD, CLOUDY, FOG, SUNNY, RAIN } from '../../constants/weathers'

export const validValues = [
    CLOUD,
    CLOUDY,
    FOG,
    SUNNY,
    RAIN,
]

const stateByName = {
    [CLOUD]: WiCloud,
    [CLOUDY]: WiDayCloudy,
    [FOG]: WiDayFog,
    [SUNNY]: WiDaySunny,
    [RAIN]: WiRain 
}

const IconState  = ({state}) => {
    const StateByName = stateByName[state]
    return (
        <StateByName />    
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState 