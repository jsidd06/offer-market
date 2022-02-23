import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomeScreen from '../../views/HomeScreen'
function RouteScreen() {
  return (
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
      </Routes>
  )
}

export default RouteScreen