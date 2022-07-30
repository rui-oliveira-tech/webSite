import React from "react"
import "./footer.scss"

export function Footer() {
  return (
    <footer className="mainFooter">
        <a className="icon" target="_blank" rel="noreferrer" href="https://www.instagram.com/rui_oliveira_tech/"><i className="fab fa-instagram" /></a>

        <a className="icon" target="_blank" rel="noreferrer" href="https://wa.me/message/NX352LLKCXBFH1"><i className="fab fa-whatsapp" /></a>

        <a className="hireMe hireMe_btn  from-center" target="_blank" rel="noreferrer" href="mailto:hire@rui-oliveira.com">Hire Me</a>

        <a className="icon" target="_blank" rel="noreferrer" href="https://github.com/rui-oliveira-tech"><i className="fab fa-github" /></a>

        <a className="icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rui-oliveira--tech/"><i className="fab fa-linkedin-in" /></a>

        {/*  <a className="icon" href="#"><i className="fab fa-facebook-f" /></a> */}
    </footer>
  )
}

export default Footer;

