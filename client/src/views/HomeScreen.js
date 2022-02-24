import React, { useEffect, useState } from 'react'
import Axios from '../components/config/Axios'

function HomeScreen() {
  const [stockApi,setStockApi] = useState([])
  useEffect(() => {
  Axios.get('/home').then((response) =>{
    console.log(response.data)
    setStockApi(response.data)
  }).catch((error) => {
    console.log(error)
  })
  },[])
  return (
    <div>hi
     {stockApi.map((stock) => {
      return (
        <div>
          <h3>{stock.name}</h3>
        </div>
      )
     })}
    </div>
  )
}

export default HomeScreen