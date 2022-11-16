import React from "react";
import { useEffect, useState, useReducer } from "react";
import { createContext } from "react";
import reducer from "../Reducer/reducer";


export const weatherContext = createContext();
const AppProvider = ({ children }) => {
const [data, setdata] = useState({});
  const [state, dispatch] = useReducer(reducer, "mumbai");
  // console.log(state)
  const key=process.env.REACT_APP_API_KEY
    
    useEffect(() => {
      const getWeatherDetails= async()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&units=metric&appid=${key}`;
        const res= await fetch(url)
        const resjson= await res.json();
        // console.log(resjson)
        setdata(resjson)
      }

    getWeatherDetails();
  }, [state]);
  // console.log(data)
  return (
    <weatherContext.Provider value={{ dispatch, data }}>
      {children}
    </weatherContext.Provider>
  );
};

export default AppProvider;
