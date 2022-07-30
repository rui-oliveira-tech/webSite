import React from "react";
import "./Home.scss";
import "./styles/_scrollArrow.scss";
import MainImage from "../../images/main.jpg";



export default function Home({ allPages }) {
  function scrollDown(e) {
    document.querySelector(".projects").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
  return (
    <section className="scroll_to home">
      <header>
        <figure>
          <img src={MainImage} className="frontImage" alt="Rui Oliveira" />
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