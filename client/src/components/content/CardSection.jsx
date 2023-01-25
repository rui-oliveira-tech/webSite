import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next'

import "./_CardSection.scss"
import MapSection from "../Map/Map";
import { programingLanguages } from "../../resource/programingLanguages.js"
import { googleMapsMarkers } from "../../resource/googleMapsMarkers.js"


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
  const { t } = useTranslation();
  const [loadingMap, setLoadingMap] = useState(true);
  useEffect(() => {
    new Promise(resolve => setTimeout(() => resolve(setLoadingMap(false)), 2000))
  })

  return (
    <section className="scroll_to projects">
      <div className="about">
        <div className="project" style={{ gridArea: "about", backgroundImage: `url(${About_Img})` }}>
          <div className="overlay" style={{ backgroundImage: `${gradient}, url(${About_Img})` }}>
            <p>{t('about.overlayTitle')}</p>
          </div>
          <div className="underlay">
            <h2 className="extraBig bold">{t('about.underlayTitle')}</h2>
            <div className="light text">
              {t('about.description', { returnObjects: true, company: t('experience.description.0.company'), location: t('experience.description.0.location') }).map((item, i) =>
                <React.Fragment key={i}>
                  {i === 0 ?
                    (<p className="big" key={i}>{item}</p>)
                    : i === 1 ?
                      (<p className="medium" key={i}>
                        {item[0]}
                        <a target="_blank" rel="noreferrer" href={t('experience.description.0.website')}> {item[1]}</a>
                        {item[2]}
                        {item[3]}
                        {item[4]}
                      </p>)
                      : i === 2 ?
                        (<p className="medium" key={i}>{item}</p>)
                        :
                        (<p className="big right" key={i}>{item}</p>)
                  }
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
        <div className="project" style={{ gridArea: "education", backgroundImage: `url(${Education_Img})` }}>
          <div className="overlay" style={{ backgroundImage: `${gradient}, url(${Education_Img})` }}>
            <p>{t('education.overlayTitle')}</p>
          </div>
          <div className="underlay">
            <h2 className="extraBig bold">{t('education.underlayTitle')}</h2>
            {t('education.description', { returnObjects: true }).map((degree, i) => (
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
            <p>{t('languages.overlayTitle')}</p>
          </div>
          <div className="underlay">
            <h2 className="extraBig bold">{t('languages.underlayTitle')}</h2>
            <table className="languagesTable">
              <thead className="">
                <tr>
                  <th className="languageColumn">{t('languages.language')}</th>
                  <th colSpan="2">{t('languages.understanding')}</th>
                  <th colSpan="2">{t('languages.speaking')}</th>
                  <th >{t('languages.writing')}</th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td></td>
                  <td>{t('languages.listening')}</td>
                  <td>{t('languages.reading')}</td>
                  <td>{t('languages.interaction')}</td>
                  <td>{t('languages.production')}</td>
                  <td></td>
                </tr>
                {t('languages.description', { returnObjects: true }).map((degree, i) => (
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
                    <p className="text small noPading">{t('languages.levels')}</p>
                    <p className="text small noPading">{t('languages.framework')}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="project" style={{ gridArea: "programingLanguages", backgroundImage: `url(${ProgramingLanguages_Img})` }}>
          <div className="overlay" style={{ backgroundImage: `${gradient}, url(${ProgramingLanguages_Img})` }}>
            <p>{t('programingLanguages.overlayTitle')}</p>
          </div>
          <div className="underlay">
            <h2 className="extraBig bold">{t('programingLanguages.underlayTitle')}</h2>
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
            <p>{t('experience.overlayTitle')}</p>
          </div>
          <div className="underlay">
            <h2 className="extraBig bold">{t('experience.underlayTitle')}</h2>
            {t('experience.description', { returnObjects: true }).map((degree, i) => (
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
            <p>{t('projects.overlayTitle')}</p>
          </div>
          <div className="underlay">
            <h2 className="extraBig bold">{t('projects.underlayTitle')}</h2>
            {t('projects.description', { returnObjects: true }).map((degree, i) => (
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
            <p>{t('other.overlayTitle')}</p>
          </div>
          <div className="underlay">

            <h2 className="extraBig bold">{t('other.underlayTitle')}</h2>
            {t('other.description', { returnObjects: true }).map((degree, i) => (
              <React.Fragment key={i}>
                <p className="light big subTitle">{degree.title}</p>
                <p className="text small">{degree.startDate} - {degree.endDate}</p>
                <p className="light text medium textSpacement">{degree.description}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
        {!loadingMap && <div className="project" style={{ gridArea: "map", backgroundImage: `url(${TraveledMap_Img})` }}>
          <div className="overlay" style={{ backgroundImage: `${gradient}, url(${TraveledMap_Img})` }}>
            <p>{t('googleMapsMarkers.overlayTitle')}</p>
          </div>
          <div className="underlay">
            <div className="traveledMap">
              <MapSection markers={googleMapsMarkers} />
            </div>
          </div>
        </div>}
      </div>
    </section>
  )
}