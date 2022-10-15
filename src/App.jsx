import React from 'react'
import {BrowserRouter as Router,
    Routes,
    Route,
     } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
   <Grid container
       justify="center"
       direction="row">
       <Grid item
           xs={12}
           sm={10}
           md={10}
           lg={8}>
         <Router>
             <Routes> 
                <Route exact path="/" element={<WelcomePage/>} />
                <Route path="/main" element={<MainPage/>} />
                <Route path="/city" element={<CityPage/>} />
                <Route element={<NotFoundPage/>} />
             </Routes>
           </Router>
        </Grid>
     </Grid>
  )
}


export default App