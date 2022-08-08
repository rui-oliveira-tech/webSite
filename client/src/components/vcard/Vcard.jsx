import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom'

const server = process.env.REACT_APP_API;

export default function Vcard({ type }) {
  const vCardLink = useRef(null);
  const [fileUrl, setFileUrl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${server}/vcard/${type}`)
      .then((response) => response.blob())
      .then((data) => {
        const url = URL.createObjectURL(data);
        console.log(url);
        setFileUrl(url);
        vCardLink.current?.click();
        URL.revokeObjectURL(url);
        setTimeout(() => {
          navigate('/');
        }, 5000);
      });
  }, []);

  const filename = `${type}_vcard.vcf`;



  return (
    <a ref={vCardLink} href={fileUrl} download={filename}>Download Vcard</a>
  )
}