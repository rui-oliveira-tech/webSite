import React, { useEffect, useRef, useState } from "react";
import { useTranslation, withTranslation } from 'react-i18next';

import "./_CardSection.scss"
import "./CvButton.scss"
import usePublicImages from '../../hooks/usePublicImages'
import Translation from '../../resource/translation'
import MapSection from "../Map/Map";
import { googleMapsMarkers } from "../../resource/googleMapsMarkers.js"
import FileSaver from 'file-saver';

import getImagesFromFolder from '../../util/getImagesFromFolder';

// color: #193a59;
// background-color: #bdd9f3;
// const gradient = "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"
// const gradient = "radial-gradient(circle, rgb(25, 58, 89, 0.7) 0%, rgb(189, 217, 243, 0.7) 100%)"

const gradient = "radial-gradient(circle, rgb(25, 58, 89, 0.5) 0%, rgb(0, 0, 0, 0.5) 100%)"

export default withTranslation()(function CardSection(props) {
  const currentLanguageCode = props.i18n.language;
  const images = getImagesFromFolder(props.images, "cv")
  const programmingLanguages = getImagesFromFolder(props.images, "programming_languages");
  const t = Translation();
  const [loadingMap, setLoadingMap] = useState(true);
  const animatedOverlay = useRef("");
  const animation = useRef("notLoading");

  let waitForGoogleMaps = useRef(setTimeout(() => { }, 0));
  let waitForOverlay = useRef(setTimeout(() => { }, 0));
  let waitForLoading = useRef(setTimeout(() => { }, 0));

  useEffect(() => {
    new Promise(resolve => {
      waitForGoogleMaps.current = setTimeout(() => resolve(setLoadingMap(false)), 2000)
    })
    return () => clearTimeout(waitForGoogleMaps.current);
  })

  useEffect(() => {
    waitForOverlay.current = setTimeout(() => {
      animatedOverlay.current = "animated";
    }, 1)
    return () => clearTimeout(waitForOverlay.current);
  }, [])

  useEffect(() => {
    waitForLoading.current = setTimeout(() => {
      if (props.isLoading) {
        animation.current = "loading";
      }
    }, 1)
    return () => clearTimeout(waitForLoading.current);
  }, [])

  const saveFile = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resource/CV - " + currentLanguageCode.toUpperCase() + " - Rui Oliveira.pdf",
      "CV - " + currentLanguageCode.toUpperCase() + " - Rui Oliveira.pdf");
  };
  return (
    <section className="have_footer have_NavigationBar cv">
      <div className="download">
        {(currentLanguageCode === "en" || currentLanguageCode === "nl") && <button className={"learn-more buttonCV " + animation.current} onClick={saveFile}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span id="buttonCV" className="buttonCV-text">{t.home.cvButton}</span>
        </button>}
      </div>
      <div className="cvContainer">
        <div className="module" style={{ gridArea: "about", backgroundImage: `url(${images[t.about.img]})` }}>
          <div className={"overlay " + animatedOverlay.current} style={{ backgroundImage: `${gradient}, url(${images[t.about.img]})` }}>
            <p>{t.about.overlayTitle}</p>
          </div>
          <div className="underlay">
            <h2 className="extraBig bold">{t.about.underlayTitle}</h2>
            <div className="light text">
              {t.about.description.map((item, i) =>
                <React.Fragment key={i}>
                  {i === 0 ?
                    (<p className="big" key={i}>{item}</p>)
                    : i === 1 ?
                      (<p className="medium" key={i}>
                        {item[0]}
                        <a target="_blank" rel="noreferrer" href={t.experience.description[0].website}> {item[1]}</a>
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
        <div className="module" style={{ gridArea: "education", backgroundImage: `url(${images[t.education.img]})` }}>
          <div className={"overlay " + animatedOverlay.current} style={{ backgroundImage: `${gradient}, url(${images[t.education.img]})` }}>
            <p>{t.education.overlayTitle}</p>
          </div>
          <div className="underlay">
            <h2 className="extraBig bold">{t.education.underlayTitle}</h2>
            {t.education.description.map((degree, i) => (
              <React.Fragment key={i}>
                <p className="light big subTitle">{degree.title}</p>
                <a className="textGlue medium" target="_blank" rel="noreferrer" href={t.education.description[i].website}>{degree.companyTitle} {t.education.description[i].company} in {t.education.description[i].location}</a>
                <p className="text small">{degree.startDate === "" ? degree.endDate : degree.startDate + " - " + degree.endDate}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="module" style={{ gridArea: "languages", backgroundImage: `url(${images[t.languages.img]})` }}>
          <div className={"overlay " + animatedOverlay.current} style={{ backgroundImage: `${gradient}, url(${images[t.languages.img]})` }}>
            <p>{t.languages.overlayTitle}</p>
          </div>
          <div className="underlay">
            <h2 className="extraBig bold">{t.languages.underlayTitle}</h2>
            <table className="languagesTable">
              <thead className="">
                <tr>
                  <th className="languageColumn">{t.languages.language}</th>
                  <th colSpan="2">{t.languages.understanding}</th>
                  <th colSpan="2">{t.languages.speaking}</th>
                  <th >{t.languages.writing}</th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td></td>
                  <td>{t.languages.listening}</td>
                  <td>{t.languages.reading}</td>
                  <td>{t.languages.interaction}</td>
                  <td>{t.languages.production}</td>
                  <td></td>
                </tr>
                {t.languages.description.map((degree, i) => (
                  <tr className="color" key={i}>
                    <td className="noBorder left"><span className={"flag-icon flag-icon-" + t.languages.description[i].flag}></span>{degree.language}</td>
                    <td>{t.languages.description[i].listening}</td>
                    <td>{t.languages.description[i].reading}</td>
                    <td>{t.languages.description[i].spokenInteraction}</td>
                    <td>{t.languages.description[i].spokenProduction}</td>
                    <td>{t.languages.description[i].writing}</td>
                  </tr>
                ))}
                <tr>
                  <td className="noBorder left" ></td>
                  <td className="noBorder left" colSpan="5">
                    <p className="text small noPading">{t.languages.levels}</p>
                    <p className="text small noPading">{t.languages.framework}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="module" style={{ gridArea: "programmingLanguages", backgroundImage: `url(${images[t.programmingLanguages.img]})` }}>
          <div className={"overlay " + animatedOverlay.current} style={{ backgroundImage: `${gradient}, url(${images[t.programmingLanguages.img]})` }}>
            <p>{t.programmingLanguages.overlayTitle}</p>
          </div>
          <div className="underlay">
            <h2 className="extraBig bold">{t.programmingLanguages.underlayTitle}</h2>
            {t.programmingLanguages.description[0].map((degree, i) => (
              <React.Fragment key={i}>
                {/* <p/> */}
                {/*  <p className="light big subTitle">{degree.title}</p> */}
                {t.programmingLanguages.description[degree.id].map((degree, i) => (
                  <React.Fragment key={i}>
                    <a className="iconProgLang" target="_blank" rel="noreferrer" href={degree.website}>
                      <figure><img src={programmingLanguages[degree.imgLink]} alt={degree.title} /></figure>
                    </a>
                  </React.Fragment>
                ))}

              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="module" style={{ gridArea: "experience", backgroundImage: `url(${images[t.experience.img]})` }}>
          <div className={"overlay " + animatedOverlay.current} style={{ backgroundImage: `${gradient}, url(${images[t.experience.img]})` }}>
            <p>{t.experience.overlayTitle}</p>
          </div>
          <div className="underlay">
            <h2 className="extraBig bold">{t.experience.underlayTitle}</h2>
            {t.experience.description.map((degree, i) => (
              <React.Fragment key={i}>
                <p className="light big subTitle">{degree.title}</p>
                <a className="textGlue medium" target="_blank" rel="noreferrer" href={t.experience.description[i].website}>{t.experience.description[i].company} in {t.experience.description[i].location}</a>
                <p className="text small">{degree.startDate} - {degree.endDate} - {degree.offerType}{" "}</p>
                <p className="light text medium textSpacement">{degree.skillsGained}</p>
                <p className="light text medium textSpacement">
                  {degree.functionsPerformed}
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="module" style={{ gridArea: "projects", backgroundImage: `url(${images[t.projects.img]})` }}>
          <div className={"overlay " + animatedOverlay.current} style={{ backgroundImage: `${gradient}, url(${images[t.projects.img]})` }}>
            <p>{t.projects.overlayTitle}</p>
          </div>
          <div className="underlay">
            <h2 className="extraBig bold">{t.projects.underlayTitle}</h2>
            {t.projects.description.map((degree, i) => (
              <React.Fragment key={i}>
                <a className="light big subTitle" target="_blank" rel="noreferrer" href={t.projects.description[i].website}>{degree.title}</a>
                <p className="text small">{degree.startDate} - {degree.endDate}</p>
                <p className="light text medium textSpacement">{degree.description}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="module" style={{ gridArea: "others", backgroundImage: `url(${images[t.other.img]})` }}>
          <div className={"overlay " + animatedOverlay.current} style={{ backgroundImage: `${gradient}, url(${images[t.other.img]})` }}>
            <p>{t.other.overlayTitle}</p>
          </div>
          <div className="underlay">

            <h2 className="extraBig bold">{t.other.underlayTitle}</h2>
            {t.other.description.map((degree, i) => (
              <React.Fragment key={i}>
                <p className="light big subTitle">{degree.title}</p>
                <p className="text small">{degree.startDate} - {degree.endDate}</p>
                <p className="light text medium textSpacement">{degree.description}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
        {!true && <div className="module" style={{ gridArea: "map", backgroundImage: `url(${images[t.googleMapsMarkers.img]})` }}>
          <div className={"overlay " + animatedOverlay.current} style={{ backgroundImage: `${gradient}, url(${images[t.googleMapsMarkers.img]})` }}>
            <p>{t.googleMapsMarkers.overlayTitle}</p>
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
})