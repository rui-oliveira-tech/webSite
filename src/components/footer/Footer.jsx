import React from "react"
import "./styles/footer.scss"

export function Footer() {
    return (
        <footer >
            <div>
                <a className="icon" target="_blank" rel="noreferrer" href="https://www.instagram.com/r.u.i_o.l.i.v.e.i.r.a/"><i className="fab fa-instagram" /></a>

                <a className="icon" target="_blank" rel="noreferrer" href="https://wa.me/message/NX352LLKCXBFH1"><i className="fab fa-whatsapp" /></a>

                <a className="hireMe hireMe_btn  from-center" target="_blank" rel="noreferrer" href="mailto:hire@rui-oliveira.com">Hire Me</a>

                <a className="icon" target="_blank" rel="noreferrer" href="https://github.com/rui1999"><i className="fab fa-github" /></a>

                <a className="icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rui-tech/"><i className="fab fa-linkedin-in" /></a>

                {/*  <a className="icon" href="#"><i className="fab fa-facebook-f" /></a> */}
            </div>
        </footer>
    )
}

export default Footer;

