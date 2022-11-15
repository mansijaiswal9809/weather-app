import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AiOutlineSearch} from 'react-icons/ai'
import { weatherContext } from "../Context/AppProvider";
import './Top.css'


const Top = () => {
  const [val,setVal]=useState("");
  const {dispatch}= useContext(weatherContext)
  // console.log(state)
  const onHandle=(e)=>{
    setVal(e.target.value)
    // console.log(val)
  }
  return (
    <div className="top">
      <div className="Headings">
        <h4>Welcome</h4>
        <h2>Mansi Jaiswal</h2>
      </div>
      <div className="Search_input"><input  type="search" name="citySearch"  onChange={onHandle} placeholder="Search your city"/><div className="search_icon" onClick={()=>dispatch({type:'get_city', payload:val})}><AiOutlineSearch/></div></div>
    </div>
  );
};

export default Top;
