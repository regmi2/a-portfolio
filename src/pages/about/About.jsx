import React from 'react'
import Info from '../../components/Info'
import Stats from '../../components/Stats'
import Skills from '../../components/Skills'
import {FaDownload} from 'react-icons/fa'
import CV from '../../assets/steve-Cv.pdf'
import ResumeItem from '../../components/ResumeItem'

import {resume} from '../../data'


import './about.css'

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span> Me </span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">

            <h3 className="section__subtitle">
              Personal Info
            </h3>


          <p className="home__description">

          I'm a dedicated Front-End Engineer with a strong focus on React. 
          With a background in both front and back end development, 
          I bring versatility to any project. I thrive on crafting interactive 
          and visually appealing user interfaces that provide seamless experiences. 
          Collaborative by nature, I excel in team settings, contributing ideas and 
          solutions while fostering a positive work environment. 
          My passion for coding extends beyond work, and I'm constantly exploring 
          new technologies and staying updated with industry trends. Let's connect 
          and create something amazing together!
            {/* I was born in Kathmandu, Nepal where my love for science and art was influenced
            by my brother and older cousins. 
            <br/>

            {/* Born in Kathmandu, Nepal, I found a sense of belonging to the chaos
            unique to South Asian cities. Even from a young age, I dared to explore
            and adventure on the winding streets of Kathmandu and in my imagination.
            My earliest influencers in tech are my brother & cousins who always sought 
            to figure out how things work and brought magic to life through science.
            When I turned 8 years old, my family moved to Madison, WI. With easier access 
            to the internet, I taught myself the inner workings of Windows OS and audio & video production. 
            Before attending university, I wrote, created,
            and released multiple songs and videos that I shared with my high school community.
            <br/>
            The technical foundations of production softwares set me up to apply myself
            in studying Computer Science at UW-Madison. With these skillsets, I aspire
            to build greater accessibility to self-empowerment in <strong>learning, well being, &
            living a fulfilled life.</strong> */}
            

         
         </p>

            {/* <ul className="info__list grid">
              <Info /> 
            </ul> */}

            {/* <a href={CV} download='' className="button"> Download CV 
            <span className="button__icon">
              <FaDownload />
              </span> 
              </a> */}
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>


      <div className="separator">

      </div>


      <section className="skills">
        <h3 className="section__subtitle subtitle__center">
          My Skills        
          </h3>
          <div className="skills__container grid">
            <Skills />
          </div>
      </section>


      <div className="separator">

      </div>

      <section className="resume">
      <h3 className="section__subtitle subtitle__center">
         Experience & Education</h3>

         <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if(val.category === 'experience') {
                return <ResumeItem key={val.id} {...val} />
              }
            })}
          </div>

          <div className="resume__data">
            {resume.map((val) => {
              if(val.category === 'education') {
                return <ResumeItem key={val.id} {...val} />
              }
            })}
          </div>
         </div>
      </section>


    </main>
  )
}

export default About
