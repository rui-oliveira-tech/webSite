import React from "react";
import FileSaver from 'file-saver';
import ReactGA from 'react-ga4';
import "./Home.scss";
import "./CvButton.scss";
import main_Img from "../../images/main_Img.jpg";



export default function Home({ allPages }) {
  function scrollDown(e) {
    document.querySelector(".projects").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  const saveFile = () => {

    ReactGA.event({
      action: "download",
      category: "cv", 
    });

    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resource/CV - EN - Rui Oliveira.pdf",
      "CV - EN - Rui Oliveira.pdf");
  };
  return (
    <section className="scroll_to home">
      <header>
        <button className="learn-more" onClick={saveFile}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text"> Get My CV</span>
        </button>
        <figure>
          <img src={main_Img} className="frontImage" alt="Rui Oliveira" />
        </figure>
      </header>
      <main>
        <h1 className="title">Rui Oliveira</h1>
        <h2 data-texteffect="Industrial Electrician" className="subTitle first">Industrial Electrician</h2>
        <h3 data-texteffect="Residencial Electrician" className="subTitle second">Residencial Electrician</h3>
        <h3 data-texteffect="Schematic Projecting" className="subTitle third">Schematic Projecting</h3>
      </main>

      <footer className="scrollArrow" onClick={scrollDown}>
        <span></span>
        <span></span>
        <span></span>
      </footer>
    </section>
  )
}