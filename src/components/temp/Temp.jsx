import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import {SlCalender} from 'react-icons/sl'
import { weatherContext } from '../Context/AppProvider'
import "./Temp.css"
import { useContext } from 'react'
const date= new Date()
const Temp = () => {
  const {data}=useContext(weatherContext);
   let icon 
   if(data.weather){
    icon=data.weather[0].icon
   }
  let url=`http://openweathermap.org/img/w/${icon}.png`
  return (
    <div className='temp_div'>
      {icon?<div className='icon-img'><img alt="icon" src={url} /></div>:null}
      <h1>{data?.main?.temp} <sup>o</sup>C</h1>
      {data?.weather?.map(elem => <h5 key={elem.id}>{elem.description}</h5>)}
      <hr />
      <h4><MdLocationOn/> {data?.name}, {data?.sys?.country}</h4>
      <h3><SlCalender/>{`  ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</h3>
    </div>
  )
}

export default Temp
