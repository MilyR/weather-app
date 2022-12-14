import React from 'react'
import PropTypes from 'prop-types'
import {Grid, List, ListItem} from '@mui/material'
import CityInfo from '../CityInfo'
import Weather from '../Weather'

const renderCityAndCountry = (eventOnClickCity, cityAndCountry) => {
  console.log({cityAndCountry})
  const { city, country } = cityAndCountry
    return (
    <ListItem
     button
     key={city} 
     onClick={eventOnClickCity} >
      <Grid container
          justify="center"
          alignItems="center"
          >
            <Grid item 
          sm={8}
          xs={12}>
       <CityInfo city={city} country={country} />
      </Grid>
      <Grid item
         sm={4}
         xs={12}>
         <Weather temperature={10} state="sunny" />
         </Grid>
      </Grid>
   </ListItem>
  )
}

const CityList = ({ cities, onClickCity }) => {
  return (
    <List>
        {
          cities.map( cityAndCountry => renderCityAndCountry(onClickCity, cityAndCountry))
        }
    </List>
  )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList