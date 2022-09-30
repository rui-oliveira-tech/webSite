import React from "react";


import Lader_Svg from "../../images/Programing_Languages/Lader_Svg.svg";
/* import FrequencyInverters_Img from "../../images/Programing_Languages/FrequencyInverters_Img.jpg"; */

import Arduino_Svg from "../../images/Programing_Languages/Arduino_Svg.svg";
import Cplusplus_Svg from "../../images/Programing_Languages/Cplusplus_Svg.svg";
import Git_Svg from "../../images/Programing_Languages/Git_Svg.svg";
import Linux_Svg from "../../images/Programing_Languages/Linux_Svg.svg";
import Css_Svg from "../../images/Programing_Languages/Css_Svg.svg";
import Html_Svg from "../../images/Programing_Languages/Html_Svg.svg";
import Js_Svg from "../../images/Programing_Languages/Js_Svg.svg";
import NodeJs_Svg from "../../images/Programing_Languages/NodeJs_Svg.svg";


export const education = [
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

export const languages = [
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

export const programingLanguages = [
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




export const experience = [
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

export const projects = [
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

export const other = [
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

export const googleMapsMarkers = [
    {
        title: "Portugal, Lisboa",
        marker: NodeJs_Svg,
        image: Js_Svg,
        lat: 40.848362,
        lng: -8.6129936,
    },
    {
        title: "centro",
        marker: Css_Svg,
        image: Html_Svg,
        lat: 12,
        lng: 12,
    },
];