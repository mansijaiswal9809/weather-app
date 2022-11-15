import React,{useContext} from 'react'
import { weatherContext } from '../Context/AppProvider'
import './Humidity.css'
import {WiHumidity} from 'react-icons/wi'
const Humidity = () => {
  const {data}=useContext(weatherContext);
  return (
    <div className='humidity_container'>
        <div className='humidity_top'>
            <div>Humidity</div>
            <div><WiHumidity size='30px'/></div>
        </div>
      <div className='humidity_mid'>{data?.main?.humidity}%</div>
      <div className='humid_bottom'>
      <div className='humid_progress'>
        <div className='white_bar'></div>
        <div className='color_bar' style={{width:`${data?.main?.humidity}%`}}></div>
      </div>
      <div className='humid_range' >
        <div>0%</div>
        <div>100%</div>
      </div>
      </div>
    </div>
  )
}

export default Humidity
