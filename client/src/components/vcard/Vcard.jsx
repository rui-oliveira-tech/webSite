import React, { useState, useEffect, useRef } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

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
        setTimeout(() => {
          navigate('/');
        }, 1000);
      });
  }, []);

  const filename = `${type}_vcard.vcf`;



  return (
    <a ref={vCardLink} href={fileUrl} download={filename}>Download Vcard</a>
  )
}

