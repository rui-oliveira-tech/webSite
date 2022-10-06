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

import Marker from "../../images/maps/Marker.svg";

let id = 0;
const getNextId = () => {
    return ++id;
};

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
        // description: ["texto", "texto"].join(<br/>),
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
    //-----------------------// Portugal //-----------------------//
    {
        id: getNextId(),
        country: "Portugal",
        city: "Braga",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Póvoa de Varzim",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Porto",
        marker: Marker,
        zoom: 12,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Vila Nova de Gaia",
        marker: Marker,
        zoom: 12,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Arouca",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Espinho",
        marker: Marker,
        zoom: 9,
    },
    {// Not Working
        id: getNextId(),
        country: "Portugal",
        city: "Santa Maria da Feira",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "São João da Madeira",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Ovar",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Aveiro",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Águeda",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Viseu",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Golegã",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Sintra",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Lisbon",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Spain //-----------------------//
    {
        id: getNextId(),
        country: "Spain",
        city: "Vigo",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Sevilla",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Cádiz",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Conil de la Frontera",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Tarifa",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Ronda",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Málaga",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Granada",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Alicante",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Valencia",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Madrid",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Logroño",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Zaragoza",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Barcelona",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Girona",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Ibiza",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// France //-----------------------//
    {
        id: getNextId(),
        country: "France",
        city: "Lille",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "France",
        city: "Amiens",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "France",
        city: "Paris",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "France",
        city: "Bordeaux",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "France",
        city: "Toulouse",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "France",
        city: "Montpellier",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "France",
        city: "Marseille",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "France",
        city: "Nice",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Monaco //-----------------------//
    {
        id: getNextId(),
        country: "Monaco",
        city: "Monaco",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Italy //-----------------------//
    {
        id: getNextId(),
        country: "Italy",
        city: "Genoa",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Bologna",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Venice",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Florence",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Rome",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Frosinone",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Anzio",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Nettuno",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Naples",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Pompei",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Sorrento",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Positano",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Amalfi",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Maratea",
        marker: Marker,
        zoom: 9,
    },
    {// Not Working
        id: getNextId(),
        country: "Italy",
        city: "Scilla",
        marker: Marker,
        zoom: 9,
    },
    {// Not Working
        id: getNextId(),
        country: "Italy",
        city: "Gambarie",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Villa San Giovanni",
        marker: Marker,
        zoom: 10,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Messina",
        marker: Marker,
        zoom: 10,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Taormina",
        marker: Marker,
        zoom: 9,
    },
    {// Not Working
        id: getNextId(),
        country: "Italy",
        city: "Etna",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Catania",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Siracusa",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Noto",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Agrigento",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Palermo",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Slovenia //-----------------------//
    {
        id: getNextId(),
        country: "Slovenia",
        city: "Ljubljana",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Croatia //-----------------------//
    {
        id: getNextId(),
        country: "Croatia",
        city: "Zagreb",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Croatia",
        city: "Koprivnica",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Hungary //-----------------------//
    {// Not Working
        id: getNextId(),
        country: "Hungary",
        city: "Zákány",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Hungary",
        city: "Pécs",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Hungary",
        city: "Budapest",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Slovakia //-----------------------//
    {
        id: getNextId(),
        country: "Slovakia",
        city: "Bratislava",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Austria //-----------------------//
    {
        id: getNextId(),
        country: "Austria",
        city: "Vienna",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Czechia //-----------------------//
    {
        id: getNextId(),
        country: "Czechia",
        city: "Prague",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Germany //-----------------------//
    {
        id: getNextId(),
        country: "Germany",
        city: "Berlin",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Netherlands //-----------------------//
    {
        id: getNextId(),
        country: "Netherlands",
        city: "Amsterdam",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Belgium //-----------------------//
    {
        id: getNextId(),
        country: "Belgium",
        city: "Brecht",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Belgium",
        city: "Turnhout",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Belgium",
        city: "Herentals",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Belgium",
        city: "Antwerp",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Belgium",
        city: "Mechelen",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Belgium",
        city: "Brussels",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Belgium",
        city: "Leuven",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Belgium",
        city: "Namur",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Belgium",
        city: "Dinant",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Luxembourg //-----------------------//
    {
        id: getNextId(),
        country: "Luxembourg",
        city: "Luxembourg",
        marker: Marker,
        zoom: 9,
    },
];

