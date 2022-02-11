import React from "react"
import "./styles/footer.scss"

export function Footer() {
    return (
        <footer>
            <a className="icon" href="mailto:rui.f.oliveira.95@gmail.com"><i className="fa-regualar fa-envelope" /></a>

            <a className="icon" href="https://wa.me/message/NX352LLKCXBFH1"><i className="fab fa-whatsapp" /></a>

            <a className="icon" href="https://github.com/rui1999"><i className="fab fa-github" /></a>

            <a className="icon" href="https://www.linkedin.com/in/rui-tech/"><i className="fab fa-linkedin-in" /></a>

            <a className="icon" href="https://www.instagram.com/r.u.i_o.l.i.v.e.i.r.a/"><i className="fab fa-instagram" /></a>
            
            <a className="icon" href="#"><i className="fab fa-facebook-f" /></a>
        </footer>
    )
}

export default Footer;

