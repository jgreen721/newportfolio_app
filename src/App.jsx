import {useEffect, useState} from "react"
import './App.css'
import {CurrentPageMarker,Navbar,About,Skills,Samples,Contact,Hero} from './components'
import {GlobalProvider} from "./context/AppContext"

function App() {


  
  return (
    <GlobalProvider>
    <div className="app">
      {/*  CURRENT PAGE COMPONENT */}
    <CurrentPageMarker/>

      {/* APP-PARENT-CONTENT-CONTAINER */}
      <div className="app-content-container">
  <Navbar/>

      <div className="app-views-container">
        <Hero/>
  <About/>
  <Skills/>
  <Samples/> 
  <Contact/>     
      </div>
      </div>
    </div>
    </GlobalProvider>
  )
}

export default App
