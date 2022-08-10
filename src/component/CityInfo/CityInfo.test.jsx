import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' //SUT: Subject under testing (objeto del testeo)

test("CityInfo renders", async () => {
    // AAA
    // Arange
    const city = "Tucuman" 
    const country = "Argentina"
    // Render: renderiza el componente y retorna una serie de funciones de utilidad
    // En este caso utilizamos finAllByRole
    const { findAllByRole } = render (<CityInfo city= {city} country= {country} />)
    //Assert
    const cityAndCountryComponents = await findAllByRole("heading")
    expect(cityAndCountryComponents[0]).toHaveTextContent(city) 
    expect(cityAndCountryComponents[1]).toHaveTextContent(country) 

  
       
})