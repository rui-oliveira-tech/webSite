import React from "react"
import ReactGA from 'react-ga4';
import "./Footer.scss"

import Button from "../Button/Button"

export function Footer() {
  const onClick = (type) => () => {
    ReactGA.event({
      action: "social media",
      category: type,
    });
  };

  return (
    <footer className="mainFooter">
      <a className="icon" target="_blank" rel="noreferrer" onClick={onClick("instagram")} href="https://www.instagram.com/rui_oliveira_tech/"><i className="icon-instagram" /></a>

      <a className="icon" target="_blank" rel="noreferrer" onClick={onClick("instagram")} href="https://api.whatsapp.com/send/?phone=32474127175&text&type=phone_number&app_absent=0"><i className="icon-whatsapp" /></a>

      <Button className="from-center" onClick={onClick("mail")} href="mailto:hire@rui-oliveira.com">Hire Me</Button>

      <a className="icon" target="_blank" rel="noreferrer" onClick={onClick("github")} href="https://github.com/rui-oliveira-tech"><i className="icon-github" /></a>

      <a className="icon" target="_blank" rel="noreferrer" onClick={onClick("linkedin")} href="https://www.linkedin.com/in/rui-oliveira--tech/"><i className="icon-linkedin" /></a>

      {/*  <a className="icon" href="#"><i className="fab fa-facebook-f" /></a> */}
    </footer>
  )
}

export default Footer;

