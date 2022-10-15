import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import CityList from './../component/CityList'

const cities = [
  {city:"Tucuman", country: "Argentina" },
  {city:"Bogota", country: "Colombia" },
  {city:"Madrid", country: "España" },
  {city:"Ciudad de Mexico", country: "Mexico" },
]

const MainPage = () => {
  const navigate = useNavigate()

  const onClickHandler = () => {
      navigate("/city")
  }

  return (
    <div>
        <h2>Lista de Ciudades</h2>
        <CityList
         cities={cities} 
         onClickCity= {onClickHandler} />
         <div> 
          <Link to="/">Ir a Welcome</Link>
        </div>
    </div>
  )
}



export default MainPage