import React from 'react'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'
import {
    Grid,
    AppBar,
    Toolbar,
    IconButton,
    Link,
    Typography,
}  from '@mui/material'
import {Link as LinkRouter } from 'react-router-dom'
import { WiDaySunny } from 'react-icons/wi'


const AppFrame = props => {
  return (
    <Grid container    
    justify="center" >
    <AppBar position="static">
       <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="menu">
              <Link 
               component={ LinkRouter}
               to="/main"
                color="inherit" 
                 aria-label="menu">
              <IconContext.Provider value={{size:'2em'}}>
                      <WiDaySunny />
                 </IconContext.Provider>
              </Link>  
          </IconButton>
          <Typography variant="h6" color="inherit">
            Weather App
          </Typography>
      </Toolbar>
    </AppBar>
  <Grid container item
        xs={12}
        sm={11}
        md={10}
        bg={8}>
        Mi aplicacion
  </Grid>
 </Grid>
  )
}

AppFrame.propTypes = {

}

export default AppFrame