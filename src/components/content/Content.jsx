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
    const sections = [
        {
            id: 1,
            title: "About",
            hoverTitle: "Who I am",
            text: (
                <div className="about">
                    <h2 className="about__title">
                        About
                    </h2>
                    {/* <div className="col col-2"> */}

                        <p>I'm Rui. I'm a Industrial Electrician.</p>
                        <p>I am currently working at the SOCEA company in Oelegem, (Belgium). However I have total and immediate availability to start working.</p>
                        <p>I have excellent knowledge of Electricity, Pneumatics, Hydraulics, Interpretation of schematics, Informatics in the user's perspective, as well as in the use of internet.</p>
                        <p>My strengths are Electrification of electrical boards and structures, Industrial maintenance and repair.</p>
                        <p>I also have experience in industrial automation and electromechanical.</p>
                        <p>I have good team work spirit, cooperative and with a taste for knowledge and learning.</p>
                        <p>I have preference in working as an industrial electrician, but I do not exclude the possibility of performing another position in different areas.</p>
                        <p>I look forward to hearing from you.</p>
                  {/*   </div>
                    <div className="col col-2">
                        <p>imagen</p>
                    </div>  */}
                </div>
            ),
        },
        {
            id: 2,
            title: "Education",
            hoverTitle: "What I've learned",
            text: (
                <div>
                    ola
                </div>
            ),
        },
        {
            id: 3,
            title: "Experience",

            hoverTitle: "What I've done",
            text: (
                <div>
                    ola
                </div>
            ),
        },
        {
            id: 4,
            title: "Projects",
            hoverTitle: "What I've created",
            text: (
                <div>
                    ola
                </div>
            ),
        },
        {
            id: 5,
            title: "Skills",
            hoverTitle: "Other stuff I'm doing",
            text: (
                <div>
                    ola
                </div>
            ),
        },
    ];
    const [isInactive, setIsInactive] = useState(true);
    const [currentlyOpenSlide, setCurrentlyOpenSlide] = useState(1);

    useEffect(() => {
        setTimeout(function () {
            setIsInactive(false)
        }, 200);
    }, [])



    return (
        <div className={["sections", isInactive ? "s--inactive" : "", currentlyOpenSlide > 0 ? "s--card-active" : ""].join(" ")}>
            <div className="sections__inner">
                {
                    sections.map(section => (
                        <div className={["card", currentlyOpenSlide === section.id ? "s--active" : ""].join(" ")} onClick={slideOpenOnClick(section.id)}>
                            <div className="card__overflow">
                                <div className="card__inner">
                                    <div className="card__bg"></div>
                                    <div className="card__preview-sections">
                                        <h2 className="card__heading">{section.hoverTitle}</h2>
                                    </div>
                                    <div className="card__close-btn" onClick={slideCloseOnClick}></div>
                                    <div className="card__content">
                                        {section.text}
                                    </div>
                                </div>
                            </div>
                            <div className="card__index"> {/* letra jota é cortada diminuir a fonte */}
                                <div className="card__index-back">{section.title}</div>
                                <div className="card__index-front">
                                    <div className="card__index-overlay" data-index={section.title}>{section.title}</div>
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
