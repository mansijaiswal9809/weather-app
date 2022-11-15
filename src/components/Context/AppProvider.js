import React from "react";
import { useEffect, useState, useReducer } from "react";
import { createContext } from "react";
import reducer from "../Reducer/reducer";

export const weatherContext = createContext();
const AppProvider = ({ children }) => {
const [data, setdata] = useState({});
  const [state, dispatch] = useReducer(reducer, "pune");
  // console.log(state)
    
    useEffect(() => {
      const getWeatherDetails= async()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&units=metric&appid=aeedcb522414aca47623508707283d6d`;
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
