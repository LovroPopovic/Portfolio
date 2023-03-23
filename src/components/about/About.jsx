import React from 'react'
import "./about.css"

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>
      <div className="about_container grid">
        <img src="" alt="" className="about_img" />
        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">I'm Lovro Popovic, a web developer and informatics and digital technologies student based in Rijeka, Croatia. 
            I specialize in front-end and back-end development, and have a strong foundation in building websites using a variety of tools and technologies. 
            As a student, I'm dedicated to expanding my knowledge and staying up-to-date with the latest trends in web development. I'm committed to creating 
            engaging and innovative websites that provide exceptional user experiences.</p>
            <a href=" " className="btn">Download CV</a>

            
          </div>
          <div className="about_skills grid">
              
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Frontend</h3>
                  <span className="skills_number frontend"></span>
                </div>
                <div className="skills_bar">
                  <span className="skill_perc">45%</span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">UI/UX Design</h3>
                  <span className="skills_number UIUX" ></span>
                </div>
                <div className="skills_bar">
                  <span className="skill_perc">30%</span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Backend</h3>
                  <span className="skills_number backend"></span>
                </div>
                <div className="skills_bar">
                  <span className="skill_perc">45%</span>
                </div>
              </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About