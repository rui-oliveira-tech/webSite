import React from "react";
import Page from '../components/2_Page'
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const SecondPageContainer = () => {

  const properties = {
    duration: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    indicators: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <Page>
      <Slide {...properties}>
        <Page.SlideContainer>
          <Page.SlideInfo>
            <p>blabla</p>
          </Page.SlideInfo>
        </Page.SlideContainer>
        <Page.SlideContainer>
          <Page.SlideInfo>
            <p>blabla</p>
          </Page.SlideInfo>
        </Page.SlideContainer>
        <Page.SlideContainer>
          <Page.SlideInfo>
            <p>blabla</p>
          </Page.SlideInfo>
        </Page.SlideContainer>
        <Page.SlideContainer>
          <Page.SlideInfo>
            <p>blabla</p>
          </Page.SlideInfo>
        </Page.SlideContainer>
        <Page.SlideContainer>
          <Page.SlideInfo>
            <p>blabla</p>
          </Page.SlideInfo>
        </Page.SlideContainer>
      </Slide>
    </Page>
  );
};

export default SecondPageContainer;