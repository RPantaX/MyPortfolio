import React from "react";
import "./Projects.css";
import { FaReact, FaJava, FaBootstrap, FaEye, FaGithub  } from "react-icons/fa";
import {
  SiHtml5,
  SiSpring,
  SiPostgresql,
  SiJunit5,
  SiMysql
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import panda from "./images/Panda.png"
import gift from "./images/Gifts-Generator.png"
import microservice from "./images/modelo-microservice.png"
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={panda}
                    alt="Panda"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Panda - Transport</h2>
                <p>
                I developed a data management application for a heavy-duty transportation company, 
                using Java Spring Boot for the backend and React, Redux, Ant Design, and Bootstrap 
                for the frontend.
                </p>
                <div>
                  <FaJava />
                  <SiSpring />
                  <SiJunit5 />
                  <SiPostgresql />
                  <FaReact />
                  <FaBootstrap />
                </div>
                <div style={{paddingTop:"8px"}} >
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns btn--outline onbt" style={{alignItems:"center", display:"flex"}}>
                      <p style={{paddingRight:"4px"}}>website</p> <FaEye />
                    </span>
                  </a>
                  <a
                    href="https://github.com/RPantaX/Panda"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns btn--outline onbt" style={{alignItems:"center", display:"flex"}}>
                      <p style={{paddingRight:"4px"}}>Code</p> <FaGithub />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={gift}
                    alt="gift"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>GIFT - GENERATOR</h2>
                <p>
                  Project to search for gifts by name.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <FaReact />
                </div>
                <div style={{paddingTop:"8px"}} >
                  <a
                    href="https://gifs-generate.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns btn--outline onbt" style={{alignItems:"center", display:"flex"}}>
                      <p style={{paddingRight:"4px"}}>website</p> <FaEye />
                    </span>
                  </a>
                  <a
                    href="https://github.com/RPantaX/Gifs-Generator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns btn--outline onbt" style={{alignItems:"center", display:"flex"}}>
                      <p style={{paddingRight:"4px"}}>Code</p> <FaGithub />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={microservice} alt="microservice" />
                </div>
              </div>
              <div className="project_information">
                <h2>MICROSERVICE</h2>
                <p>
                I've developed a backend project aimed at student management. 
                This project utilizes MySQL, PostgreSQL, Eureka, Config Server, 
                and API Gateway for effective database management.
                </p>
                <div>
                  <FaJava />
                  <SiSpring />
                  <SiJunit5 />
                  <SiPostgresql />
                  <SiMysql />
                </div>
                <div style={{paddingTop:"8px"}} >
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns btn--outline onbt" style={{alignItems:"center", display:"flex"}}>
                      <p style={{paddingRight:"4px"}}>website</p> <FaEye />
                    </span>
                  </a>
                  <a
                    href="https://github.com/RPantaX/microservice-springBoot"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns btn--outline onbt" style={{alignItems:"center", display:"flex"}}>
                      <p style={{paddingRight:"4px"}}>Code</p> <FaGithub />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
