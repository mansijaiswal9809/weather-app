import React from 'react'
import Humidity from '../humidity/Humidity'
import Visibility from '../uv/Visibility'
import Wind from '../Windspeed/Wind'
import "./Bottom.css"



const Bottom = () => {
  return (
    <div className='bottom_div'>
      <h2>Today's highlights</h2>
      <div className='inner_container_bottom'>
        <Wind/>
        <Visibility/>
        <Humidity/>
      </div>
    </div>
  )
}

export default Bottom
