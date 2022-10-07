import React from "react";
import FileSaver from 'file-saver';
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
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resource/CV - EN - Rui Oliveira.pdf",
      "CV - EN - Rui Oliveira.pdf");
  };
  return (
    <section className="scroll_to home">
      <header>
        <button class="learn-more" onClick={saveFile}>
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text"> Get My CV</span>
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