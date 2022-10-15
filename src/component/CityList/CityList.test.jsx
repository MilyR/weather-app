import React from 'react'
import { render , fireEvent} from '@testing-library/react'
import CityList from './CityList'

const cities = [
    {city: "Tucuman", country: "Argentina" },
    {city: "Bogota", country: "Colombia" },
    {city: "Madrid", country: "España" },
    {city: "Ciudad de Mexico", country: "Mexico" }, 
  ]

test("CityList renders" , async () => {

  const fnClickOnItem = jest.fn()

  const{ findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

  const items = await findAllByRole("button")

  expect(items).toHaveLength(4)
})

test ("CityList click on item", async () => {
   const fnClickOnItem = jest.fn()
   
   const{ findAllByRole } = render(<CityList cities ={cities} onClickCity={fnClickOnItem} />)

   const items = await findAllByRole("button")
  
   fireEvent.click(items[0])

   expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})
