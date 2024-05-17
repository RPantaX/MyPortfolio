import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
         <span className="about__name">Jefferson Panta</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
        Passionate and innovative Full Stack developer proficient in Java Full Stack with React. 
    Experienced with a range of tools and technologies and eager to explore new ones. I have been involved in Java application development for the last 2 years.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/RPantaX"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:pantajefferson173@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+51930889076"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://linkedin.com/in/jefferson-panta-195692236/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1Nx1nd4S-tjl2fVvDzzEk6RjnCWR7_By0/view?usp=sharing"
            );
          }}
        >
          <p>Download CV</p>
          <FileDownloadIcon />
        </button>

      </div>
      <Introduction />
      
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
