import React from "react"
import "./styles/_home.scss"
import "./styles/_scrollArrow.scss"
import "../content/styles/_button.scss"

export default function FrontPage() {
    return (
        <>
            <div className="container" >
                <div className="placementFrontImage">
                    <div className="frontImage"></div>
                </div>
                <div className="placementTitle">
                    <p className="title">Rui Oliveira</p>
                </div>
                <div className="placementSubtitle">
                    <p data-texteffect="Industrial Electrician" className="subTitle first">Industrial Electrician</p>
                    <p data-texteffect="Residencial Electrician" className="subTitle second">Residencial Electrician</p>
                    <p data-texteffect="Schematic Projecting" className="subTitle third">Schematic Projecting</p>
                </div>
                <div className="placementExtra">
                </div>
                <div className="placementscrollArrow">
                    <div className="scrollArrow">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>
        </>
    )
}