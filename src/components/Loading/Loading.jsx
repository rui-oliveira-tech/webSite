import React from "react"
import "./styles/_loading.scss"

export default function Loading() {
    return (
        <>
            <div className="containerLoading">
                <img className="placementLogo" src={require('../../images/logo/logo.svg').default} alt='mySvgImage' />
                <div className="placementText">
                    <p className="text _O">O</p>
                    <p className="text _L">l</p>
                    <p className="text _I">i</p>
                    <p className="text _V">v</p>
                    <p className="text _E">e</p>
                    <p className="text _I2">i</p>
                    <p className="text _R">r</p>
                    <p className="text _A">a</p>
                </div>
            </div>
        </>
    )
}