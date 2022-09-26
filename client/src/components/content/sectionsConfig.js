import React from "react";
import About_Img from "../../images/About_Img.jpg";
import Education_Img from "../../images/Education_Img.jpg";
import Languages_Img from "../../images/Languages_Img.jpg";
import ProgramingLanguages_Img from "../../images/ProgramingLanguages_Img.jpg";
import Experience_Img from "../../images/Experience_Img.jpg";
import Projects_Img from "../../images/Projects_Img.jpg";
import Others_Img from "../../images/Others_Img.jpg";

/* import TraveledMap from "../../images/Traveled_Img.jpg"; */





import Lader_Svg from "../../images/Programing_Languages/Lader_Svg.svg";
import FrequencyInverters_Img from "../../images/Programing_Languages/FrequencyInverters_Img.jpg";

import Arduino_Svg from "../../images/Programing_Languages/Arduino_Svg.svg";
import Cplusplus_Svg from "../../images/Programing_Languages/Cplusplus_Svg.svg";
import Git_Svg from "../../images/Programing_Languages/Git_Svg.svg";
import Linux_Svg from "../../images/Programing_Languages/Linux_Svg.svg";
import Css_Svg from "../../images/Programing_Languages/Css_Svg.svg";
import Html_Svg from "../../images/Programing_Languages/Html_Svg.svg";
import Js_Svg from "../../images/Programing_Languages/Js_Svg.svg";
import NodeJs_Svg from "../../images/Programing_Languages/NodeJs_Svg.svg";

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
    [
        {
            id: 1,
            title: "Industrial",
        },
        {
            id: 2,
            title: "",

        },
        {
            id: 3,
            title: "",

        },
    ],
    [
        {
            title: "Ladder",
            imgLink: Lader_Svg,
            website: "https://ladderlogicworld.com/",
        },
     /*    {
            title: "FrequencyInverters",
            imgLink: FrequencyInverters_Img,
            website: "",
        }, */
        {
            title: "Arduino",
            imgLink: Arduino_Svg,
            website: "https://github.com/rui-oliveira-tech/webSite/",
        },
    ],
    [
        {
            title: "C++",
            imgLink: Cplusplus_Svg,
            website: "https://www.w3schools.com/cpp/",
        },
        {
            title: "Css",
            imgLink: Css_Svg,
            website: "https://www.w3schools.com/css/",
        },
        {
            title: "Html",
            imgLink: Html_Svg,
            website: "https://www.w3.org/html/",
        },
        {
            title: "Js",
            imgLink: Js_Svg,
            website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/",
        },
        {
            title: "NodeJs",
            imgLink: NodeJs_Svg,
            website: "https://nodejs.org/",
        },
    ],
    [
        {
            title: "Git",
            imgLink: Git_Svg,
            website: "https://git-scm.com/",
        },
        {
            title: "Linux",
            imgLink: Linux_Svg,
            website: "https://www.linux.org/",
        },
    ],
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
        description: "Countries I visited.",
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
            <div className="project" style={{ gridArea: "about", backgroundImage: `url(${About_Img})` }}>
                <div className="overlay" style={{ backgroundImage: `${gradient}, url(${About_Img})` }}>
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
            <div className="project" style={{ gridArea: "education", backgroundImage: `url(${Education_Img})` }}>
                <div className="overlay" style={{ backgroundImage: `${gradient}, url(${Education_Img})` }}>
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
            <div className="project" style={{ gridArea: "languages", backgroundImage: `url(${Languages_Img})` }}>
                <div className="overlay" style={{ backgroundImage: `${gradient}, url(${Languages_Img})` }}>
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
            <div className="project" style={{ gridArea: "programingLanguages", backgroundImage: `url(${ProgramingLanguages_Img})` }}>
                <div className="overlay" style={{ backgroundImage: `${gradient}, url(${ProgramingLanguages_Img})` }}>
                    <p>What I program</p>
                </div>
                <div className="underlay">
                    <h2 className="project__title extraBig bold">Programing Languages</h2>
                    {programingLanguages[0].map((degree, i) => (
                        <React.Fragment key={i}>
                            {/* <p/> */}
                           {/*  <p className="light big subTitle">{degree.title}</p> */}
                            {programingLanguages[degree.id].map((degree, i) => (
                                <React.Fragment key={i}>
                                    <a className="iconProgLang" target="_blank" rel="noreferrer" href={degree.website}>
                                        <figure><img src={degree.imgLink} alt={degree.title} /></figure>
                                    </a>
                                </React.Fragment>
                            ))}

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
            <div className="project" style={{ gridArea: "experience", backgroundImage: `url(${Experience_Img})` }}>
                <div className="overlay" style={{ backgroundImage: `${gradient}, url(${Experience_Img})` }}>
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
            <div className="project" style={{ gridArea: "projects", backgroundImage: `url(${Projects_Img})` }}>
                <div className="overlay" style={{ backgroundImage: `${gradient}, url(${Projects_Img})` }}>
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
            <div className="project" style={{ gridArea: "others", backgroundImage: `url(${Others_Img})` }}>
                <div className="overlay" style={{ backgroundImage: `${gradient}, url(${Others_Img})` }}>
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
                    {/*  <img src={TraveledMap} className="frontImage" alt="Countries i visited" /> */}
                </div>
            </div>
        ),
    },
];

export default sections;


{/* <script src="https://www.amcharts.com/lib/3/ammap.js" type="text/javascript"></script>
<script src="https://www.amcharts.com/lib/3/maps/js/worldHigh.js" type="text/javascript"></script>
<script src="https://www.amcharts.com/lib/3/themes/dark.js" type="text/javascript"></script>
<div id="mapdiv" style="width: 1000px; height: 450px;"></div>
<div style="width: 1000px; font-size: 70%; padding: 5px 0; text-align: center; background-color: #535364; margin-top: 1px; color: #B4B4B7;"><a href="https://www.amcharts.com/visited_countries/" style="color: #B4B4B7;">Create your own visited countries map</a> or check out the <a href="https://www.amcharts.com/" style="color: #B4B4B7;">JavaScript Charts</a>.</div>
<script type="text/javascript">
var map = AmCharts.makeChart("mapdiv",{
type: "map",
theme: "dark",
projection: "mercator",
panEventsEnabled : true,
backgroundColor : "#535364",
backgroundAlpha : 1,
zoomControl: {
zoomControlEnabled : true
},
dataProvider : {
map : "worldHigh",
getAreasFromMap : true,
areas :
[
	{
		"id": "AT",
		"showAsSelected": true
	},
	{
		"id": "BE",
		"showAsSelected": true
	},
	{
		"id": "HR",
		"showAsSelected": true
	},
	{
		"id": "CZ",
		"showAsSelected": true
	},
	{
		"id": "FR",
		"showAsSelected": true
	},
	{
		"id": "DE",
		"showAsSelected": true
	},
	{
		"id": "HU",
		"showAsSelected": true
	},
	{
		"id": "IT",
		"showAsSelected": true
	},
	{
		"id": "LU",
		"showAsSelected": true
	},
	{
		"id": "PT",
		"showAsSelected": true
	},
	{
		"id": "SK",
		"showAsSelected": true
	},
	{
		"id": "SI",
		"showAsSelected": true
	},
	{
		"id": "ES",
		"showAsSelected": true
	},
	{
		"id": "SE",
		"showAsSelected": true
	}
]
},
areasSettings : {
autoZoom : true,
color : "#B4B4B7",
colorSolid : "#84ADE9",
selectedColor : "#84ADE9",
outlineColor : "#666666",
rollOverColor : "#9EC2F7",
rollOverOutlineColor : "#000000"
}
});
</script> */}
