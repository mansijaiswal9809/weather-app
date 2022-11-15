import React from "react";
import "./wind.css";
import {BsWind} from 'react-icons/bs'
import { useContext } from "react";
import { weatherContext } from "../Context/AppProvider";
// const wind = 10;
// const speedPercent = (wind / 30) * 100;
// const rotate = (wind / 30) * 180;
const Wind = () => {
  const {data}=useContext(weatherContext);
  // console.log(data)
  return (
    <div className="Wind_container">
      <div className="wind_top">
        <div>Wind status</div>
        <div><BsWind size='25px'/></div>
      </div>
      
    <div className="Wind">
      <h6 style={{ textAlign: "center" }}> {data?.wind?.speed}km/h</h6>
      <div className="Main_wind">
        <h6>0km/h</h6>
        <div className="wind_container">
          <div className="outer1">
            <div></div>
          </div>
          <div className="outer2" style={{ width: `${(data?.wind?.speed/30)*100}%` }}>
            <div></div>
          </div>
          {/* <div style={{transform:`rotate(${rotate}deg)`,transformOrigin:"bottom right"}} ><div style={{width:'70px', height:'5px',backgroundColor:"black", borderRadius:"70%", transform:'translateX(20px)'}}></div><div style={{width:'10px', height:'10px',backgroundColor:"black", borderRadius:"50%", transform:'translate(80px ,-7px)'}}></div></div> */}
        </div>
        <h6>30km/h</h6>
      </div>
    </div>
    </div>
  );
};

export default Wind;
