import React, { useState, useEffect, useRef } from "react";

const server = process.env.REACT_APP_API;

export default function Vcard({ type }) {
  const vCardLink = useRef(null);
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    fetch(`${server}/vcard/${type}`)
      .then((response) => response.blob())
      .then((data) => {
        const url = URL.createObjectURL(data);
        console.log(url);
        setFileUrl(url);
        vCardLink.current?.click();
        URL.revokeObjectURL(url);
      });
  }, []);

  const filename = `${type}_vcard.vcf`;
  return (
    <a ref={vCardLink} href={fileUrl} download={filename}>Download Vcard</a>
  )
}