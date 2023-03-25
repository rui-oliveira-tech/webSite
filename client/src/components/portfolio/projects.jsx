import React, { useRef, useEffect, useState } from "react";
import { useTranslation, withTranslation } from 'react-i18next';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
import Tilt from 'react-parallax-tilt';
import "./Projects.scss";
import usePublicImages from '../../hooks/usePublicImages'

import getImagesFromFolder from '../../util/getImagesFromFolder';

export default withTranslation()(function Portfolio(props) {
  const { t } = useTranslation();
  const animation = useRef("notLoading");
  
  const images = getImagesFromFolder(props.images, "projects");
  // const images = usePublicImages(require.context("../../../public/images/projects/", false, /\.(png|jpe?g|svg)$/));

  let waitForLoading = useRef(setTimeout(() => { }, 0));
  useEffect(() => {
    waitForLoading.current = setTimeout(() => {
      if (props.isLoading) {
        animation.current = "loading";
      }
    }, 1)
    return () => clearTimeout(waitForLoading.current);
  }, [])

  return (
    <div className="have_footer have_NavigationBar portfolio">
      <div className="portfolioContainer">
        {t('projects.description', { returnObjects: true }).map((projects, i) => (
          <React.Fragment key={i}>
            <MouseParallaxContainer
              className={t('projects.description', { returnObjects: true }).length - 1 === i ? "have_footer" : ""}
              globalFactorX={0.3}
              globalFactorY={0.3}
              resetOnLeave         >
              <Tilt className="card-wrap"
                tiltMaxAngleX={1}
                tiltMaxAngleY={8}
                perspective={800}
                transitionSpeed={1500}
                scale={1.03}
              >
                <div className="card">
                  <MouseParallaxChild className="card-bg"
                    factorX={0.6}
                    factorY={0.1}
                    style={{ backgroundImage: `url("${images[projects.img]}")` }}
                  />
                  <div className="card-info">
                    <h1 slot="header">{projects.title}</h1>
                    <p slot="content">{projects.startDate} - {projects.endDate}</p>
                  </div>
                </div>
              </Tilt>
            </MouseParallaxContainer>
          </React.Fragment>
        ))}
      </div >
    </div >
  )
})