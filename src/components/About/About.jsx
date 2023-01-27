import React from 'react'
import "./About.css"
import { codeImg } from '../../const'

const About = () => {
  var skills = [
    {id:1,skill:"HTML",years:"4"},
    {id:2,skill:"Javascript",years:"4"},
    {id:3,skill:"CSS",years:"4"},
    {id:4,skill:"React",years:"4"},
    {id:4,skill:"Github",years:"4"},
  ]
  return (
    <div className="about-page" id="about">
      <div className="about-header">
        <div className="about-hero-h1-div">
      <h1 className="about-h1">About </h1>
      <h1 className="me-h1">Me</h1>
      </div>
      <div className="icon-img">
    <img className="about-me-avatar" src={codeImg} alt="code-img" />
      </div>
      </div>
      <section className="about-section">
        <p className="section-blurb has-dropcap"><span className="large-firstletter">B</span>ack about 8 years ago, after a year or 2 of push/popping my way through a stack of science books I had come to the conclusion of 2 things. First being that quantum mechanics and math have proven that the world is really weird, and B I wish I was smart and had more than an armchair understanding of, anything really! Then it popped on in 2014, Mike Judges <span className="title">Silicon Valley</span> and while I hadn't known it yet, my <code>while(1)</code> loop of passion was born. The show was my Entourage in that, most 'normal' guys projected themselves into Mark Walbergs exaggerated distilled experience of Sunset strip living, I wanted to be in Eirlichs incubator. These were my guys and so, I was off to the <span className="codecademy">codecademy </span> races.</p>
        <p className="section-blurb blurb-two"> About a year or so of playing on that daily, I was decent on their sandbox environments but still had no clue what an actual IDE was or, that the real bad asses can write code on something as simple as notepad. A text file is a text file. So, I took a **gasp** bootcamp experience at <span className="ucla">UCLA</span> that specialized in teaching the MERN stack and while I cringe at the notion a bootcamp can learn you programming, it can, provide the context/building blocks to set you on your way and that it indeed it did. Throw in a stay-at-home pandemic and my time with the computer has, scaled exponentially. This is what I now do, and while not perfect, it's my passion. I'm looking now, for the next step in contributing/building off that. So that would be where you come in :)</p>
      </section>
      {/* <ul className="about-me-list">
        <li className="about-me-item">
          <h4 className="about-me-h4">HTML</h4>
          <h5 className="about-me-h5"></h5>
        </li>
      </ul> */}
    </div>
  )
}

export default About