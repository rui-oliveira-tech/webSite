import React from "react";
import AboutImg from "../../images/0.jpg";
import EducationImg from "../../images/1.jpg";
import ExperienceImg from "../../images/2.jpg";
import ProjectsImg from "../../images/3.jpg";
import OthersImg from "../../images/4.jpg";

const education = [
    {
        title: "Driving course of electric forklifts, combustion and gas",
        company: "Cincork",
        location: "Santa Maria de Lamas, Portugal",
        website: "https://www.cincork.com/",
        startDate: "",
        endDate: "4 May 2018",
    },
    {
        title: "Electronic, automation and maintenance + 1500 hours InternshipElectronic",
        company: "CFPIC",
        location: "São João da Madeira, Portugal",
        website: "http://www.cfpic.pt/",
        startDate: "2012",
        endDate: "22 April 2015",
    },
    {
        title: "Driving licence AM / B / B1 ",
        company: "Boavista driving school",
        location: "Santa Maria da Feira, Portugal",
        website: "http://www.ecboavista.com/",
        startDate: "",
        endDate: "4 Dec 2015",
    },
    {
        title: "High School, Course of Sciences and TechnologiesEnsino Secundário",
        company: "High School of Santa Maria da Feira",
        location: "Santa Maria da Feira, Portugal",
        website: "https://ae-smfeira.pt/",
        startDate: "2010",
        endDate: "2012",
    },
];

const languages = [
    {
        language: "Portuguese",
        flag: "pt",
        listening: "C2",
        reading: "C2",
        spokenInteraction: "C2",
        spokenProduction: "C2",
        writing: "C2",
    },
    {
        language: "English",
        flag: "us",
        listening: "C1",
        reading: "C1",
        spokenInteraction: "C1",
        spokenProduction: "C1",
        writing: "B1",
    },
    {
        language: "Spanish",
        flag: "es",
        listening: "C1",
        reading: "C1",
        spokenInteraction: "C1",
        spokenProduction: "C1",
        writing: "B1",
    },
    {
        language: "Dutch",
        flag: "be",
        listening: "A2",
        reading: "A2",
        spokenInteraction: "A1",
        spokenProduction: "A1",
        writing: "A1",
    },
];

const experience = [
    {
        title: "Industrial Electrician",
        company: "SOCEA nv",
        location: "Oelegem, Belgium",
        website: "https://www.socea.be/",
        offerType: "Full-time",
        startDate: "May 2019",
        endDate: "Present",
        functionsPerformed:
            "Find machine problems and fix, install cable ducts, pass cables, connect electrical boards, replace plugs, lamps, switches, mechanics basic.",
        skillsGained: "Repairing skills, communication skills.",
    },
    {
        title: "Cold technician",
        company: "MEDREPAIR",
        location: "Beveren, Belgium",
        website: "https://www.msc.com/",
        offerType: "Full-time",
        startDate: "Jul 2018",
        endDate: "May 2019",
        functionsPerformed:
            'Repair and maintenance of cold containers, "PtI", copper welding and replacement of motors and sensors.',
        skillsGained: "Repairing skills, communication skills.",
    },
    {
        title: "Industrial Electrician",
        company: "SERSAN",
        location: "Lourosa, Portugal",
        website: "https://www.sersan.pt/",
        offerType: "Full-time",
        startDate: "Feb 2015",
        endDate: "Jul 2018",
        functionsPerformed:
            "Repair of industrial machines (electrical and electromechanical), elaboration and electrification of electrical boards, electrical assembly of machines and structures of transport of cork and beginner of programming and automation of PLC (OMRON).",
        skillsGained:
            "Repairing skills, construction skills, development skills, analytical skills.",
    },
    {
        title: "Electronic, automation and maintenance (1500 hours Internship)",
        company: "Electro Oliveira",
        location: "Milheirós de Poiares, Portugal",
        website: "https://www.sersan.pt/",
        offerType: "Full-time",
        startDate: "2012",
        endDate: "2015",
        functionsPerformed: "Repair and maintenance of home appliances.",
        skillsGained:
            "Communication skills, engines skills, repairing skills, selling skills.",
    },
];

const projects = [
    {
        title: "home assiatant",
        website: "https://github.com/rui1999/homeAssistant",
        startDate: "7 Feb 2021",
        endDate: "Present",
        description: "My house.",
    },
    {
        title: "Website",
        website: "https://github.com/rui1999/webSite",
        startDate: "11 Feb 2022",
        endDate: "Present",
        description: "This website.",
    },
];

const other = [
    {
        id: 2,
        title: "Off We Go – IB&C WEEKS",
        startDate: "17 May 2014",
        endDate: "25 May 2014",
        description: "Scholar Exchange experience",
    },
    {
        id: 1,
        title: "Europe tour",
        startDate: "7 Feb 2021",
        endDate: "Present",
        description: "My house.",
    },
];

// color: #193a59;
// background-color: #bdd9f3;
// const gradient = "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"
// const gradient = "radial-gradient(circle, rgb(25, 58, 89, 0.7) 0%, rgb(189, 217, 243, 0.7) 100%)"
const gradient = "radial-gradient(circle, rgb(25, 58, 89, 0.5) 0%, rgb(0, 0, 0, 0.5) 100%)"
const sections = [
    {
        id: 1,
        title: "About",
        hoverTitle: "Who I am",
        text: (
            <div className="project" style={{ gridArea: "about", backgroundImage: `url(${AboutImg})` }}>
                <div className="overlay" style={{ backgroundImage: `${gradient}, url(${AboutImg})` }}>
                    <p>Who I am</p>
                </div>
                <div className="underlay">
                    <h2 className="project__title extraBig bold">About</h2>
                    <p className="light text big">I'm Rui. I'm a Industrial Electrician.</p>
                    <p className="light text medium">
                        I am currently working at the{" "}
                        <a href={experience[0].website}>{experience[0].company}</a> in{" "}
                        {experience[0].location}. However I have total and immediate
                        availability to start working.
                    </p>
                    <p className="light text medium">
                        I have excellent knowledge of Electricity, Pneumatics, Hydraulics,
                        Interpretation of schematics, Informatics in the user's perspective,
                        as well as in the use of internet.
                    </p>
                    <p className="light text medium">
                        My strengths are Electrification of electrical boards and structures,
                        Industrial maintenance and repair.
                    </p>
                    <p className="light text medium">
                        I also have experience in industrial automation and electromechanical.
                    </p>
                    <p className="light text medium">
                        I have good team work spirit, cooperative and with a taste for
                        knowledge and learning.
                    </p>
                    <p className="light text medium">
                        I have preference in working as an industrial electrician, but I do
                        not exclude the possibility of performing another position in
                        different areas.
                    </p>
                    <p className="light text big right">
                        Looking forward to hearing from you.
                    </p>
                </div>
            </div>
        ),
    },
    {
        id: 2,
        title: "Education",
        hoverTitle: "What I've learned",
        text: (
            <div className="project" style={{ gridArea: "education", backgroundImage: `url(${EducationImg})` }}>
                <div className="overlay" style={{ backgroundImage: `${gradient}, url(${EducationImg})` }}>
                    <p>What I've learned</p>
                </div>
                <div className="underlay">
                    <h2 className="project__title extraBig bold">
                        Education
                    </h2>
                    {education.map((degree, i) => (
                        <React.Fragment key={i}>
                            <p className="light big subTitle">{degree.title}</p>
                            <a className="textGlue medium" href={degree.website}>{degree.company} in {degree.location}</a>
                            <p className="text small">{degree.startDate === "" ? degree.endDate : degree.startDate + " - " + degree.endDate}</p>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: 3,
        title: "Languages",
        hoverTitle: "",
        text: (
            <div className="project" style={{ gridArea: "languages", backgroundImage: `url(${EducationImg})` }}>
                <div className="overlay" style={{ backgroundImage: `${gradient}, url(${EducationImg})` }}>
                    <p>What I speak</p>
                </div>
                <div className="underlay">
                    <h2 className="project__title extraBig bold">Languages</h2>
                    <table className="languagesTable small">
                        <thead className="small">
                            <tr>
                                <th width="150px"> LANGUAGE</th>
                                <th className="divid" colSpan="2">
                                    UNDERSTANDING
                                </th>
                                <th className="divid" colSpan="2">
                                    SPEAKING
                                </th>
                                <th className="divid">WRITING</th>
                            </tr>
                        </thead>
                        <tbody className="small">
                            <tr>
                                <td></td>
                                <td>Listening</td>
                                <td>Reading</td>
                                <td>Interaction</td>
                                <td>Production</td>
                                <td></td>
                            </tr>
                            {languages.map((degree, i) => (
                                <tr className="color" key={i}>
                                    <td className="noBorder left"><span className={"flag-icon flag-icon-" + degree.flag}></span>{degree.language}</td>
                                    <td>{degree.listening}</td>
                                    <td>{degree.reading}</td>
                                    <td>{degree.spokenInteraction}</td>
                                    <td>{degree.spokenProduction}</td>
                                    <td>{degree.writing}</td>
                                </tr>
                            ))}
                            <tr>
                                <td className="noBorder left" ></td>
                                <td className="noBorder left" colSpan="5">
                                    <p className="text estraSmall noPading">Levels: A1/2: Basic user - B1/2: Independent user - C1/2 Proficient user</p>
                                    <p className="text estraSmall noPading">Common European Framework of Reference for Languages</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        ),
    },
    {
        id: 4,
        title: "Experience",
        hoverTitle: "What I've done",
        text: (
            <div className="project" style={{ gridArea: "experience", backgroundImage: `url(${ExperienceImg})` }}>
                <div className="overlay" style={{ backgroundImage: `${gradient}, url(${ExperienceImg})` }}>
                    <p>What I've done</p>
                </div>
                <div className="underlay">
                    <h2 className="project__title extraBig bold">Experience</h2>
                    {experience.map((degree, i) => (
                        <React.Fragment key={i}>
                            <p className="light big subTitle">{degree.title}</p>
                            <a className="textGlue medium" href={degree.website}>{degree.company} in {degree.location}</a>
                            <p className="text small">{degree.startDate} - {degree.endDate} - {degree.offerType}{" "}</p>
                            <p className="light text medium textSpacement">{degree.skillsGained}</p>
                            <p className="light text medium textSpacement">
                                {degree.functionsPerformed}
                            </p>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: 5,
        title: "Projects",
        hoverTitle: "What I've created",
        text: (
            <div className="project" style={{ gridArea: "projects", backgroundImage: `url(${ProjectsImg})` }}>
                <div className="overlay" style={{ backgroundImage: `${gradient}, url(${ProjectsImg})` }}>
                    <p>What I've created</p>
                </div>
                <div className="underlay">
                    <h2 className="project__title extraBig bold">Projects</h2>
                    {projects.map((degree, i) => (
                        <React.Fragment key={i}>
                            <a className="light big subTitle" href={degree.website}>{degree.title}</a>
                            <p className="text small">{degree.startDate} - {degree.endDate}</p>
                            <p className="light text medium textSpacement">{degree.description}</p>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: 6,
        title: "Other things",
        hoverTitle: "Other stuff I'm doing",
        text: (
            <div className="project" style={{ gridArea: "others", backgroundImage: `url(${OthersImg})` }}>
                <div className="overlay" style={{ backgroundImage: `${gradient}, url(${OthersImg})` }}>
                    <p>Other stuff I'm doing</p>
                </div>
                <div className="underlay">

                    <h2 className="project__title extraBig bold">Other things</h2>
                    {other.map((degree, i) => (
                        <React.Fragment key={i}>
                            <p className="light big subTitle">{degree.title}</p>
                            <p className="text small">{degree.startDate} - {degree.endDate}</p>
                            <p className="light text medium textSpacement">{degree.description}</p>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        ),
    },
];

export default sections;
