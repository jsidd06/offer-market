import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouteScreen from './components/routes/Routes'
function App() {
  return (
      <BrowserRouter>
      <RouteScreen />
      </BrowserRouter>
  )
}

export default App