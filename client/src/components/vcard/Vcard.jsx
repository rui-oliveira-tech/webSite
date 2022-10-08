import React, { useState, useEffect, useRef } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import ReactGA from 'react-ga4';

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
  const { type } = useParams();
  const vCardLink = useRef(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${server}/vcard/${type}`)
      .then(manageErrors)
      .then((response) => response.blob())
      .then(function (response) {
        const url = URL.createObjectURL(response);
        console.log(url);
        setFileUrl(url);
        vCardLink.current?.click();
        URL.revokeObjectURL(url);               // second then()
        console.log('Request successful', response);
        setTimeout(() => {
          navigate('/');
        }, 5000);
      })
      .catch(function (error) {                        // catch
        console.log('Request failed', error);
        setErrors(error);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filename = `${type}_vcard.vcf`;

  useEffect(() => {
    ReactGA.event({
      action: "download",
      category: `${type}_vcard`,
    });
  }, []);

  return (
    <a ref={vCardLink} href={fileUrl} download={filename}>{errors ? "Server is sleeping! Come back after next month." : "Download Vcard"}</a>
  )
}

