import React, { useEffect, useState } from "react";
import "./styles/_Content.scss"

export function Content() {
    const education = [
        {
            id: 1,
            title: "High School, Course of Sciences and TechnologiesEnsino Secundário",
            company: "High School of Santa Maria da Feira",
            website: "https://ae-smfeira.pt/",
            startDate: "2010",
            endDate: "2012"
        },
        {
            id: 2,
            title: "Driving licence AM / B / B1 ",
            company: "Boavista driving school",
            website: "http://www.ecboavista.com/",
            startDate: "4 Dec 2015",
            endDate: "4 Dec 2015"
        },
        {
            id: 3,
            title: "Electronic, automation and maintenance + 1500 hours InternshipElectronic",
            company: "CFPIC",
            website: "http://www.cfpic.pt/",
            startDate: "2012",
            endDate: "2015"
        },
        {
            id: 4,
            title: "Driving course of electric forklifts, combustion and gas",
            company: "Cincork",
            website: "https://www.cincork.com/",
            startDate: "2018",
            endDate: "2018"
        }
    ];
    const experience = [
        {
            id: 1,
            title: "Electronic, automation and maintenance (1500 hours Internship)",
            company: "Electro Oliveira",
            website: "https://www.sersan.pt/",
            offerType: "Full-time",
            startDate: "2012",
            endDate: "2015",
            functionsPerformed: "Repair and maintenance of home appliances.",
            skillsGained: "Communication skills, engines skills, repairing skills, selling skills."
        },
        {
            id: 2,
            title: "Industrial Electrician",
            company: "SERSAN",
            website: "https://www.sersan.pt/",
            offerType: "Full-time",
            startDate: "Feb 2015",
            endDate: "Jul 2018",
            functionsPerformed: "Repair of industrial machines (electrical and electromechanical), elaboration and electrification of electrical boards, electrical assembly of machines and structures of transport of cork and beginner of programming and automation of PLC (OMRON).",
            skillsGained: "Repairing skills, construction skills, development skills, analytical skills."
        },
        {
            id: 3,
            title: "Cold technician",
            company: "MEDREPAIR",
            website: "https://www.msc.com/",
            offerType: "Full-time",
            startDate: "Jul 2018",
            endDate: "May 2019",
            functionsPerformed: "Repair and maintenance of cold containers, \"PtI\", copper welding and replacement of motors and sensors.",
            skillsGained: "Repairing skills, communication skills."
        },
        {
            id: 4,
            title: "Industrial Electrician",
            company: "SOCEA nv",
            website: "https://www.socea.be/",
            offerType: "Full-time",
            startDate: "May 2019",
            endDate: "Present",
            functionsPerformed: "Find machine problems and fix, install cable ducts, pass cables, connect electrical boards, replace plugs, lamps, switches, mechanics basic.",
            skillsGained: "Repairing skills, communication skills."
        }
    ];

    const projects = [
        {
            id: 1,
            title: "home assiatant",
            website: "https://github.com/rui1999/homeAssistant",
            startDate: "7 Feb 2021",
            endDate: "Present",
            description: "My house."
        },
        {
            id: 2,
            title: "Website",
            website: "https://github.com/rui1999/webSite",
            startDate: "11 Feb 2022",
            endDate: "Present",
            description: "This website."
        }
    ];

    const other = [
        {
            id: 2,
            title: "Off We Go – IB&C WEEKS",
            startDate: "17 May 2014",
            endDate: "25 May 2014",
            description: "Scholar Exchange experience"
        },
        {
            id: 1,
            title: "Europe tour",
            startDate: "7 Feb 2021",
            endDate: "Present",
            description: "My house."
        }
    ];


    const sections = [
        {
            id: 1,
            title: "About",
            hoverTitle: "Who I am",
            text: (
                <div className="section">
                    <h2 className="section__title bold">
                        About
                    </h2>
                    <p className="light text big">I'm Rui. I'm a Industrial Electrician.</p>
                    <p className="light text">I am currently working at the  <a href="https://www.socea.be/">SOCEA</a> company in Oelegem, (Belgium). However I have total and immediate availability to start working.</p>
                    <p className="light text">I have excellent knowledge of Electricity, Pneumatics, Hydraulics, Interpretation of schematics, Informatics in the user's perspective, as well as in the use of internet.</p>
                    <p className="light text">My strengths are Electrification of electrical boards and structures, Industrial maintenance and repair.</p>
                    <p className="light text">I also have experience in industrial automation and electromechanical.</p>
                    <p className="light text">I have good team work spirit, cooperative and with a taste for knowledge and learning.</p>
                    <p className="light text">I have preference in working as an industrial electrician, but I do not exclude the possibility of performing another position in different areas.</p>
                    <p className="light text big right">Looking forward to hearing from you.</p>
                    <button className="button">Hire me</button>
                </div>
            ),
        },
        {
            id: 2,
            title: "Education",
            hoverTitle: "What I've learned",
            text: (
                <div className="section">
                    <h2 className="section__title bold">
                        Education
                    </h2>
                    {
                        education.map(degree => (
                            <>
                                <a className="light big title" href={degree.website}>{degree.company}</a>
                                <p className="affterTitle text">{degree.title}</p>
                                <p className="textGlue">{degree.startDate} - {degree.endDate}</p>
                            </>
                        ))
                    }

                </div>
            ),
        },
        {
            id: 3,
            title: "Experience",
            hoverTitle: "What I've done",
            text: (
                <div className="section">
                    <h2 className="section__title bold">
                        Experience
                    </h2>
                    {
                        experience.map(degree => (
                            <>
                                <a className="light big title" href={degree.website}>{degree.company}</a>
                                <p className="affterTitle text">{degree.startDate} - {degree.endDate} - {degree.offerType} </p>
                                <p className="light text">{degree.skillsGained}</p>
                                <p className="light text">{degree.functionsPerformed}</p>

                            </>
                        ))
                    }

                </div>
            ),
        },
        {
            id: 4,
            title: "Projects",
            hoverTitle: "What I've created",
            text: (
                <div className="section">
                    <h2 className="section__title bold">
                        Projects
                    </h2>
                    {
                        projects.map(degree => (
                            <>
                                <a className="light big title" href={degree.website}>{degree.title}</a>
                                <p className="affterTitle text">{degree.startDate} - {degree.endDate}</p>
                                <p className="light text">{degree.description}</p>
                            </>
                        ))
                    }

                </div>
            ),
        },
        {
            id: 5,
            title: "Other tinghs",
            hoverTitle: "Other stuff I'm doing",
            text: (
                <div className="section">
                    <h2 className="section__title bold">
                        Other tinghs
                    </h2>
                    {
                        other.map(degree => (
                            <>
                                <p className="light big title">{degree.title}</p>
                                <p className="affterTitle text">{degree.startDate} - {degree.endDate}</p>
                                <p className="light text">{degree.description}</p>
                            </>
                        ))
                    }

                </div>
            ),
        },
    ];
    const [isInactive, setIsInactive] = useState(true);
    const [currentlyOpenSlide, setCurrentlyOpenSlide] = useState(5);

    useEffect(() => {
        setTimeout(function () {
            setIsInactive(false)
        }, 200);
    }, [])

    const slideOpenOnClick = (id) => (e) => {
        setCurrentlyOpenSlide(id);
    }

    const slideCloseOnClick = (e) => {
        e.stopPropagation();
        setCurrentlyOpenSlide(-1);
    }





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
