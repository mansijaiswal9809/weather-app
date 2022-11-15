import React,{useContext} from "react";
import { weatherContext } from "../Context/AppProvider";
import "./Visibility.css";
import {MdVisibility} from 'react-icons/md'


const Visibility = () => {
  const {data}=useContext(weatherContext);
  return (
    <div className="containerUV">
      <div className="topUV">
        <div>Visibilty</div>
        <div><MdVisibility size="25px"/></div>
      </div>
      <div  className="midUV">{data?.visibility/1000} kms</div>
      <div className="UV">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>10+</div>
      </div>
      {/*  */}
      <div className="progress_main">
        <div className="progress_inner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="progress_inner2" style={{width:`${(data?.visibility)/110}%`}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Visibility;
