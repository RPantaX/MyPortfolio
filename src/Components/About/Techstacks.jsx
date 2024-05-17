import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws, FaJava, FaDocker, FaCloud, FaBootstrap } from "react-icons/fa";
import {SiRedux,SiHtml5,SiRedis,SiTailwindcss,SiSpring, SiPostgresql, SiMicrosoftsqlserver, SiMysql, SiPostman,SiJavascript, SiKubernetes, SiJenkins, SiJunit5, SiJest
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>Tailwind</h5>
          </div>
          <div>
            <FaBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <FaJava />
            <h5>Java</h5>
          </div>
          <div>
            <SiSpring />
            <h5>Spring</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <SiPostgresql />
            <h5>Postgresql</h5>
          </div>
          <div>
            <SiMicrosoftsqlserver />
            <h5>SQL Server</h5>
          </div>
          <div>
            <SiMysql />
            <h5>MySQL</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <FaAws />
            <h5>AWS</h5>
          </div>
          <div>
            <FaCloud />
            <h5>Cloud</h5>
          </div>
          <div>
            <FaDocker />
            <h5>Docker</h5>
          </div>
          <div>
            <SiKubernetes />
            <h5>Kubernetes</h5>
          </div>
          <div>
            <SiRedis />
            <h5>Redis</h5>
          </div>
        </div>
      </div>
    </>
  );
};
