import React, { useEffect, useState } from "react";
import "./styles/_Section.scss"
import "./styles/_button.scss"
import sections from "./sections.js"
import Card from "./Card"

export default function Section() {


    const [isInactive, setIsInactive] = useState(true);
    const [currentlyOpenCard, setCurrentlyOpenCard] = useState(3);

    useEffect(() => {
        setTimeout(function () {
            setIsInactive(false)
        }, 200);
    }, [])

    const CardOpenOnClick = (id) => (e) => {
        setCurrentlyOpenCard(id);
    }

    const CardCloseOnClick = (e) => {
        e.stopPropagation();
        setCurrentlyOpenCard(-1);
    }

    return (
        <div className={["sections", isInactive ? "s--inactive" : "", currentlyOpenCard > 0 ? "s--card-active" : ""].join(" ")}>
            <div className="sections__inner">
                {
                    sections.map(section => (
                        <>
                            <Card section={section} currentlyOpenCard={currentlyOpenCard} CardOpenOnClick={CardOpenOnClick} CardCloseOnClick={CardCloseOnClick} />
                        </>
                    ))
                }
            </div>
        </div>
    )
}
