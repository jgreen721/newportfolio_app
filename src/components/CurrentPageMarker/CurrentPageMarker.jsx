import React, {useEffect} from 'react'
import "./CurrentPageMarker.css"
import {useAppStore} from "../../context/AppContext";


const CurrentPageMarker = () => {
  const {curr} = useAppStore();


  return (
    <div className="current-page-parent">
    <div className="current-page-container">
    <div className="line"></div>
    <div className="text-wrapper">
    <h4 className="current-h4">{curr}</h4>
    </div>
  </div>
  </div>  )
}

export default CurrentPageMarker