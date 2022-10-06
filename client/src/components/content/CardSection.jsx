import React from "react";
import "./_CardSection.scss"
import MapSection from "../Map/Map";
/* import sections from "./sectionsConfig.js" */
import { education, languages, programingLanguages, experience, projects, other, googleMapsMarkers } from "./sectionsConfig.js"

import About_Img from "../../images/About_Img.jpg";
import Education_Img from "../../images/Education_Img.jpg";
import Languages_Img from "../../images/Languages_Img.jpg";
import ProgramingLanguages_Img from "../../images/ProgramingLanguages_Img.jpg";
import Experience_Img from "../../images/Experience_Img.jpg";
import Projects_Img from "../../images/Projects_Img.jpg";
import Others_Img from "../../images/Others_Img.jpg";
import TraveledMap_Img from "../../images/TraveledMap_Img.jpg";

// color: #193a59;
// background-color: #bdd9f3;
// const gradient = "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"
// const gradient = "radial-gradient(circle, rgb(25, 58, 89, 0.7) 0%, rgb(189, 217, 243, 0.7) 100%)"

const gradient = "radial-gradient(circle, rgb(25, 58, 89, 0.5) 0%, rgb(0, 0, 0, 0.5) 100%)"

export default function CardSection() {



  return (
    <section className="scroll_to projects">
      <div className="about">
        <div className="project" style={{ gridArea: "about", backgroundImage: `url(${About_Img})` }}>
          <div className="overlay" style={{ backgroundImage: `${gradient}, url(${About_Img})` }}>
            <p>Who I am</p>
          </div>
          <div className="underlay">
            <h2 className="project__title extraBig bold">About</h2>
            <p className="light text big">I'm Rui. I'm a Industrial Electrician.</p>
            <p className="light text medium">
              I am currently working at the{" "}
              <a target="_blank" rel="noreferrer" href={experience[0].website}>{experience[0].company}</a> in{" "}
              {experience[0].location}. However I have total and immediate
              availability to start working.
            </p>
            <p className="light text medium">
              I have excellent knowledge of Electricity, Pneumatics, Hydraulics,
              Interpretation of schematics, Informatics in the user's perspective,
              as well as in the use of internet.
            </p>
            <p className="light text medium">
              My strengths are Electrification of electrical boards and structures,
              Industrial maintenance and repair.
            </p>
            <p className="light text medium">
              I also have experience in industrial automation and electromechanical.
            </p>
            <p className="light text medium">
              I have good team work spirit, cooperative and with a taste for
              knowledge and learning.
            </p>
            <p className="light text medium">
              I have preference in working as an industrial electrician, but I do
              not exclude the possibility of performing another position in
              different areas.
            </p>
            <p className="light text big right">
              Looking forward to hearing from you.
            </p>
          </div>
        </div>
        <div className="project" style={{ gridArea: "education", backgroundImage: `url(${Education_Img})` }}>
          <div className="overlay" style={{ backgroundImage: `${gradient}, url(${Education_Img})` }}>
            <p>What I've learned</p>
          </div>
          <div className="underlay">
            <h2 className="project__title extraBig bold">
              Education
            </h2>
            {education.map((degree, i) => (
              <React.Fragment key={i}>
                <p className="light big subTitle">{degree.title}</p>
                <a className="textGlue medium" target="_blank" rel="noreferrer" href={degree.website}>{degree.company} in {degree.location}</a>
                <p className="text small">{degree.startDate === "" ? degree.endDate : degree.startDate + " - " + degree.endDate}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="project" style={{ gridArea: "languages", backgroundImage: `url(${Languages_Img})` }}>
          <div className="overlay" style={{ backgroundImage: `${gradient}, url(${Languages_Img})` }}>
            <p>What I speak</p>
          </div>
          <div className="underlay">
            <h2 className="project__title extraBig bold">Languages</h2>
            <table className="languagesTable small">
              <thead className="small">
                <tr>
                  <th width="150px"> LANGUAGE</th>
                  <th className="divid" colSpan="2">
                    UNDERSTANDING
                  </th>
                  <th className="divid" colSpan="2">
                    SPEAKING
                  </th>
                  <th className="divid">WRITING</th>
                </tr>
              </thead>
              <tbody className="small">
                <tr>
                  <td></td>
                  <td>Listening</td>
                  <td>Reading</td>
                  <td>Interaction</td>
                  <td>Production</td>
                  <td></td>
                </tr>
                {languages.map((degree, i) => (
                  <tr className="color" key={i}>
                    <td className="noBorder left"><span className={"flag-icon flag-icon-" + degree.flag}></span>{degree.language}</td>
                    <td>{degree.listening}</td>
                    <td>{degree.reading}</td>
                    <td>{degree.spokenInteraction}</td>
                    <td>{degree.spokenProduction}</td>
                    <td>{degree.writing}</td>
                  </tr>
                ))}
                <tr>
                  <td className="noBorder left" ></td>
                  <td className="noBorder left" colSpan="5">
                    <p className="text estraSmall noPading">Levels: A1/2: Basic user - B1/2: Independent user - C1/2 Proficient user</p>
                    <p className="text estraSmall noPading">Common European Framework of Reference for Languages</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="project" style={{ gridArea: "programingLanguages", backgroundImage: `url(${ProgramingLanguages_Img})` }}>
          <div className="overlay" style={{ backgroundImage: `${gradient}, url(${ProgramingLanguages_Img})` }}>
            <p>What I program</p>
          </div>
          <div className="underlay">
            <h2 className="project__title extraBig bold">Programing Languages</h2>
            {programingLanguages[0].map((degree, i) => (
              <React.Fragment key={i}>
                {/* <p/> */}
                {/*  <p className="light big subTitle">{degree.title}</p> */}
                {programingLanguages[degree.id].map((degree, i) => (
                  <React.Fragment key={i}>
                    <a className="iconProgLang" target="_blank" rel="noreferrer" href={degree.website}>
                      <figure><img src={degree.imgLink} alt={degree.title} /></figure>
                    </a>
                  </React.Fragment>
                ))}

              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="project" style={{ gridArea: "experience", backgroundImage: `url(${Experience_Img})` }}>
          <div className="overlay" style={{ backgroundImage: `${gradient}, url(${Experience_Img})` }}>
            <p>What I've done</p>
          </div>
          <div className="underlay">
            <h2 className="project__title extraBig bold">Experience</h2>
            {experience.map((degree, i) => (
              <React.Fragment key={i}>
                <p className="light big subTitle">{degree.title}</p>
                <a className="textGlue medium" target="_blank" rel="noreferrer" href={degree.website}>{degree.company} in {degree.location}</a>
                <p className="text small">{degree.startDate} - {degree.endDate} - {degree.offerType}{" "}</p>
                <p className="light text medium textSpacement">{degree.skillsGained}</p>
                <p className="light text medium textSpacement">
                  {degree.functionsPerformed}
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="project" style={{ gridArea: "projects", backgroundImage: `url(${Projects_Img})` }}>
          <div className="overlay" style={{ backgroundImage: `${gradient}, url(${Projects_Img})` }}>
            <p>What I've created</p>
          </div>
          <div className="underlay">
            <h2 className="project__title extraBig bold">Projects</h2>
            {projects.map((degree, i) => (
              <React.Fragment key={i}>
                <a className="light big subTitle" target="_blank" rel="noreferrer" href={degree.website}>{degree.title}</a>
                <p className="text small">{degree.startDate} - {degree.endDate}</p>
                <p className="light text medium textSpacement">{degree.description}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="project" style={{ gridArea: "others", backgroundImage: `url(${Others_Img})` }}>
          <div className="overlay" style={{ backgroundImage: `${gradient}, url(${Others_Img})` }}>
            <p>Other stuff I'm doing</p>
          </div>
          <div className="underlay">

            <h2 className="project__title extraBig bold">Other things</h2>
            {other.map((degree, i) => (
              <React.Fragment key={i}>
                <p className="light big subTitle">{degree.title}</p>
                <p className="text small">{degree.startDate} - {degree.endDate}</p>
                <p className="light text medium textSpacement">{degree.description}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="project" style={{ gridArea: "map", backgroundImage: `url(${TraveledMap_Img})` }}>
          <div className="overlay" style={{ backgroundImage: `${gradient}, url(${TraveledMap_Img})` }}>
            <p>Where I've  been</p>
          </div>
          <div className="underlay">
            <div className="traveledMap">
              <MapSection markers={googleMapsMarkers} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}