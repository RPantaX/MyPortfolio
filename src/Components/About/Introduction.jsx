import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.jpeg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I'm{" "}
                <span className="different">Jefferson Panta </span> from{" "}
                <span className="different">
                  {" "}
                  Lima, Peru
                </span>
                . Student of the last cycles of Informatics and Computer Science.
                from{" "}
                <span className="different">
                Higher Institute of Technology, Cibertec (Peru)
                </span>
                . Then I joined Java full stack development bootcamp by{" "}
                <span className="different">TECSUP (CodigoGO).</span>
              </h4>
              <h4>Personal Characteristics: </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Efficiency{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Organization{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Accuracy{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Problem Solving{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
