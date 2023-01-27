import React from 'react'
import "./Navbar.css"
import {useAppStore} from "../../context/AppContext";


const Navbar = () => {
  const {setPageCounter} = useAppStore();
  return (
    <div className="navbar-wrapper">
    <nav className="navbar">

        <a className="nav-h5-homelink" onClick={()=>setPageCounter(0)} href="#welcome">
                <h5 className="nav-h5">dev *justin</h5>
        </a>
      <ul className="nav-links">
        <li onClick={()=>setPageCounter(1)} className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li onClick={()=>setPageCounter(2)} className="nav-item">
          <a className="nav-link" href="#skills">Skills</a>
        </li>
        <li onClick={()=>setPageCounter(3)} className="nav-item">
          <a className="nav-link" href="#samples">Samples</a>
        </li>
        <li onClick={()=>setPageCounter(4)} className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
      <div className="mobile-nav-menu">
        <div className="nline"></div>
        <div className="nline"></div>
        <div className="nline"></div>
      </div>
    </nav>
      </div>
  )
}

export default Navbar