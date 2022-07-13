import React from "react"
import "./styles/_home.scss"
import "./styles/_scrollArrow.scss"
import "../content/styles/_button.scss"
import Footer from "../footer/Footer"

export default function FrontPage() {
    return (
        <>
            <div className="flexHeight">
                <div className="container" >
                    <div className="placementFrontImage">
                        <div className="frontImage"></div>
                    </div>
                    <div className="placementTitle">
                        <p className="title">Rui Oliveira</p>
                    </div>
                    <div className="placementSubtitle">
                        <p textEffect="Industrial Electrician" className="subTitle first">Industrial Electrician</p>
                        <p textEffect="Residencial Electrician"className="subTitle second">Residencial Electrician</p>
                        <p textEffect="Schematic Projecting"className="subTitle third">Schematic Projecting</p>
                    </div>
                    <div className="placementHireMe">
                        <div className="from-right hireMe_btn hireMe_btn__home">Hire me</div>
                    </div>
                    <div className="placementscrollArrow">
                        <div className="scrollArrow">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}