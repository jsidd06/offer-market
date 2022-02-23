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
    <h1>{stockApi.name}</h1>
    </div>
  )
}

export default HomeScreen