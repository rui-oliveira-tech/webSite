import React from "react"
import "./Footer.scss"

import Button from "../Button/Button"

export function Footer() {
  return (
    <footer className="mainFooter">
        <a className="icon" target="_blank" rel="noreferrer" href="https://www.instagram.com/rui_oliveira_tech/"><i className="icon-instagram" /></a>

        <a className="icon" target="_blank" rel="noreferrer" href="https://wa.me/message/NX352LLKCXBFH1"><i className="icon-whatsapp" /></a>

        <Button className="from-center" href="mailto:hire@rui-oliveira.com">Hire Me</Button>

        <a className="icon" target="_blank" rel="noreferrer" href="https://github.com/rui-oliveira-tech"><i className="icon-github" /></a>

        <a className="icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rui-oliveira--tech/"><i className="icon-linkedin" /></a>

        {/*  <a className="icon" href="#"><i className="fab fa-facebook-f" /></a> */}
    </footer>
  )
}

export default Footer;

