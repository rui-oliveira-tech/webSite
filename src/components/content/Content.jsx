import React, { useEffect, useState } from "react";
import "./styles/_Content.scss"

export function Content() {
    const slideOpenOnClick = (id) => (e) => {
        setCurrentlyOpenSlide(id);
    }

    const slideCloseOnClick = (e) => {
        e.stopPropagation();
        setCurrentlyOpenSlide(-1);
    }
const numOfEls = 5;
    const sections = [
        {
            id: 1,
            title: "About",
            hoverTitle: "Who I am",
            backgroundImage: "",
        },
        {
            id: 2,
            title: "Education",
            hoverTitle: "What I've learned",
            backgroundImage: "",
        },
        {
            id: 3,
            title: "Experience",
            hoverTitle: "What I've done",
            backgroundImage: "",
        },
        {
            id: 4,
            title: "Projects",
            hoverTitle: "What I've created",
            backgroundImage: "",
        },
        {
            id: 5,
            title: "Skills",
            hoverTitle: "Other stuff I'm doing",
            text: "",
            backgroundImage: "",
        },
    ];
    const [isInactive, setIsInactive] = useState(true);
    const [currentlyOpenSlide, setCurrentlyOpenSlide] = useState(-1);

    useEffect(() => {
        setTimeout(function () {
            setIsInactive(false)
        }, 200);
    }, [])



    return (
        <div className={["cont", isInactive ? "s--inactive" : "", currentlyOpenSlide > 0 ? "s--el-active" : ""].join(" ")}>
            <div className="cont__inner">
                {
                    sections.map(section => (
                        <div className={["el", currentlyOpenSlide === section.id ? "s--active" : ""].join(" ")} onClick={slideOpenOnClick(section.id)}>
                            <div className="el__overflow">
                                <div className="el__inner">
                                    <div className="el__bg"></div>
                                    <div className="el__preview-cont">
                                        <h2 className="el__heading">{section.hoverTitle}</h2>
                                    </div>
                                    <div className="el__content">
                                        <div className="el__text">{section.text}</div>
                                        <div className="el__close-btn" onClick={slideCloseOnClick}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="el__index"> {/* letra jota é cortada diminuir a fonte */}
                                <div className="el__index-back">{section.title}</div>
                                <div className="el__index-front">
                                    <div className="el__index-overlay" data-index={section.title}>{section.title}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Content;
