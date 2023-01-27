import React from 'react'
import {FaHtml5,FaCss3, FaJs,FaReact,FaVuejs,FaAngular,FaGithub} from "react-icons/fa"
import "./Skills.css"
import { jsImg,cssImg,htmlImg } from '../../const'
const Skills = () => {
    var skills = [
        {id:1,name:"HTML",bgImg:htmlImg,color:"orange",years:6,icon:<FaHtml5/>},
      
        {id:2,name:"CSS",bgImg:cssImg,
        color:"css-blue",years:5,icon:<FaCss3/>},
        {id:3,name:"Javascript",bgImg:jsImg,color:"yellow",years:5,icon:<FaJs/>,children:[
            {id:1,name:"React",icon:<FaReact/>,color:'react-blue',years:4},
            {id:2,name:"Angular",icon:<FaAngular/>,color:"red",years:3},
            {id:3,name:"Vue",icon:<FaVuejs/>, color:"vue-green",years:2},
        ]},
    ]
  return (
    <div id="skills" className="skills-container">
        <h1 className="skills-h1">
            <span className="skill-stagger">S</span>
            <span className="skill-stagger">K</span>
            <span className="skill-stagger">I</span>
            <span className="skill-stagger">L</span>
            <span className="skill-stagger">L</span>
            <span className="skill-stagger">S</span>
        </h1>
        <ul className="skills-row">
            {skills.map(s=>(
                <li key={s.id} className="skill-card">
                    <div className="bg-overlay">
                        <img className="bg-img" src={s.bgImg} alt="" />
                    </div>
                    {/* <div className="skills-card-content"> */}
                    <h1 className={`skill-attr skill-icon ${s.color}`}>{s.icon}</h1>
                    <div className="skill-info">
                    <h3 className="skill-attr">{s.name}</h3>
                    <h5 className="skill-attr years-exp">Years:{s.years}</h5>
                    </div>
                    {/* </div> */}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Skills