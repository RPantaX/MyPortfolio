import React from "react";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import { About } from "./Components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Techstacks } from "./Components/About/Techstacks";
import { Github } from "./Components/About/Github";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
import { Timeline } from "./Components/About/Timeline";
export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="top" className={`${themename} app`}>
      <section id="#home">
        <Header />
      </section>
      <main>
        <About />
        <Github />
        <section id="#projects">
          <Projects />
        </section>
        <Timeline />
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
}
