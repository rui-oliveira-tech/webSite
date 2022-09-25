import React from "react";
import AboutImg from "../../images/AboutImg.jpg";
import EducationImg from "../../images/EducationImg.jpg";
import LanguagesImg from "../../images/LanguagesImg.jpg";
import ProgramingLanguagesImg from "../../images/ProgramingLanguagesImg.jpg";
import ExperienceImg from "../../images/ExperienceImg.jpg";
import ProjectsImg from "../../images/ProjectsImg.jpg";
import OthersImg from "../../images/OthersImg.jpg";

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

const programingLanguages = [
    /*     {
            language: "Ladder",
            imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Ladder_diagram.png/800px-Ladder_diagram.png",
            website: "https://ladderlogicworld.com/",
        }, */
    {
        language: "Arduino",
        imgLink: "https://camo.githubusercontent.com/b3a1cdd20d0f308634ddd4598cdaa729c2d77047f51e66fa7206b9b4bac94c23/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61726475696e6f2d312e737667",
        website: "https://github.com/rui-oliveira-tech/webSite/",
    },
    {
        language: "C++",
        imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
        website: "https://www.w3schools.com/cpp/",
    },
    {
        language: "Git",
        imgLink: "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
        website: "https://git-scm.com/",
    },
    {
        language: "Linux",
        imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
        website: "https://www.linux.org/",
    },
    {
        language: "Css",
        imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        website: "https://www.w3schools.com/css/",
    },
    {
        language: "Html",
        imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        website: "https://www.w3.org/html/",
    },
    {
        language: "Js",
        imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/",
    },
    {
        language: "NodeJs",
        imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
        website: "https://nodejs.org/",
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
        functionsPerformed: "Find machine problems and fix, install cable ducts, pass cables, connect electrical boards, replace plugs, lamps, switches, mechanics basic.",
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
        functionsPerformed: 'Repair and maintenance of cold containers, "PtI", copper welding and replacement of motors and sensors.',
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
        functionsPerformed: "Repair of industrial machines (electrical and electromechanical), elaboration and electrification of electrical boards, electrical assembly of machines and structures of transport of cork and beginner of programming and automation of PLC (OMRON).",
        skillsGained: "Repairing skills, construction skills, development skills, analytical skills.",
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
        skillsGained: "Communication skills, engines skills, repairing skills, selling skills.",
    },
];

const projects = [
    {
        title: "Home Assistant",
        website: "https://github.com/rui-oliveira-tech/homeAssistant/",
        startDate: "7 Feb 2021",
        endDate: "Present",
        description: 'My house is controlled by a Raspberry PI 4 with the "Home Assistant" program. In it I elaborate automations to control internally (without internet connection) or externally (via VPN "Tailscale" and IP masked by "Duck DNS") the house, such as lights, sensors, robots...',
    },
    {
        title: "Website",
        website: "https://github.com/rui-oliveira-tech/webSite/",
        startDate: "11 Feb 2022",
        endDate: "Present",
        description: "This website was created with the aim of promoting information about my professional career, in a way that is accessible to companies and interested people.",
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
                        <a target="_blank" rel="noreferrer" href={experience[0].website}>{experience[0].company}</a> in{" "}
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
                            <a className="textGlue medium" target="_blank" rel="noreferrer" href={degree.website}>{degree.company} in {degree.location}</a>
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
            <div className="project" style={{ gridArea: "languages", backgroundImage: `url(${LanguagesImg})` }}>
                <div className="overlay" style={{ backgroundImage: `${gradient}, url(${LanguagesImg})` }}>
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
        title: "Programing Languages",
        hoverTitle: "",
        text: (
            <div className="project" style={{ gridArea: "programingLanguages", backgroundImage: `url(${ProgramingLanguagesImg})` }}>
                <div className="overlay" style={{ backgroundImage: `${gradient}, url(${ProgramingLanguagesImg})` }}>
                    <p>What I program</p>
                </div>
                <div className="underlay">
                    <h2 className="project__title extraBig bold">Programing Languages</h2>
                    <p className="light big subTitle"> </p>
                    {programingLanguages.map((degree, i) => (
                        <React.Fragment key={i}>
                            <a className="iconProgLang" target="_blank" rel="noreferrer" href={degree.website}>
                                <img src={degree.imgLink} alt={degree.title} />
                            </a>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: 5,
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
                            <a className="textGlue medium" target="_blank" rel="noreferrer" href={degree.website}>{degree.company} in {degree.location}</a>
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
        id: 6,
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
                            <a className="light big subTitle" target="_blank" rel="noreferrer" href={degree.website}>{degree.title}</a>
                            <p className="text small">{degree.startDate} - {degree.endDate}</p>
                            <p className="light text medium textSpacement">{degree.description}</p>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: 7,
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
