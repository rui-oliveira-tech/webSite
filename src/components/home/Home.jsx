import React from "react"
import "./styles/_home.scss"

export default function FrontPage() {
    return (
        <>
            <div className="container" >

                <div className="home">
                    <p className="title">Hello,</p>
                    <p className="subTitle">Rui Oliveira</p>
                </div>

            </div>
            <section class="scrollArrow">
                <div><span></span><span></span><span></span></div>
            </section>
        </>
    )
}