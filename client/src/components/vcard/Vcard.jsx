import React, { useState, useEffect, useRef } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import ReactGA from 'react-ga4';
import "./Vcard.scss"

const server = process.env.REACT_APP_API;


function manageErrors(response) {
  if (!response.ok) {
    const responseError = {
      statusText: response.statusText,
      status: response.status
    };
    throw (responseError);
  }
  return response;
}


export default function Vcard() {
  const navigate = useNavigate();
  const { type } = useParams();
  const filename = `${type}_vcard.vcf`;
  const initialTimer = 15;
  const vCardLink = useRef(null);
  const timerTimeOut = useRef(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [errors, setErrors] = useState(null);
  const [timer, setTimer] = useState(initialTimer);


  useEffect(() => {
    fetch(`${server}/vcard/${type}`)
      .then(manageErrors)
      .then((response) => response.blob())
      .then(function (response) {
        const url = URL.createObjectURL(response);
        setFileUrl(url);
        vCardLink.current?.click();
        console.log('Request successful', response);
      })
      .catch(function (error) {
        console.log('Request failed', error);
        setErrors(error);
      });
  }, []);

  const resetTimer = () => {
    setTimer(initialTimer);
  }
  useEffect(() => {
    if (fileUrl || errors) {
      timerTimeOut.current = setTimeout(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        }
        else {
          URL.revokeObjectURL(fileUrl);
          navigate('/');
        }
      }, 1000);
    }
    return () => {
      clearTimeout(timerTimeOut.current);
    }
  }, [timer, fileUrl, errors]);


  useEffect(() => {
    ReactGA.event({
      action: "download",
      category: `${type}_vcard`,
    });
  }, []);


  return (
    <>
      <div className="center">
        <div className="ring"></div>
        <div className="text">You gonna be redirected</div>
        <div className="timer">{timer}</div>
        {!errors ?
          <a className="vcardDownloadText" onClick={resetTimer} ref={vCardLink} href={fileUrl} download={filename}>Download Vcard</a>
          :
          <>
            <p className="textError">Error</p>
            <p className="vcardDownloadText">Please ty latter</p>
          </>
        }
      </div>
    </>
  )
}