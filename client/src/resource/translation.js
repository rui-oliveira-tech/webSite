import { useTranslation, withTranslation } from 'react-i18next';

export default function Translation() {
    const { t } = useTranslation();

    const app_title = t('app_title')
    const navigationBar = {
        "homepage": t('navigationBar.homepage'),
        "cv": t('navigationBar.cv'),
        "portfolio": t('navigationBar.portfolio'),
    }
    const footer = {
        "mailButton": t('footer.mailButton'),
    }
    const home = {
        "title": t('home.title'),
        "subTitle": {
            "first": t('home.first'),
            "second": t('home.second'),
            "third": t('home.third'),
        },
        "cvButton": "Downloaden Cv"
    }

    const education = {
        "img": "education",
        "overlayTitle": t('education.overlayTitle'),
        "underlayTitle": t('education.underlayTitle'),
        "description": [
            {
                "title": t('education.description.0.title'),
                "companyTitle": t('education.description.0.companyTitle'),
                "company": "Cincork",
                "location": "Santa Maria de Lamas, Portugal",
                "website": "https://www.cincork.com/",
                "startDate": "",
                "endDate": "4 May 2018"
            },
            {
                "title": t('education.description.1.title'),
                "companyTitle": t('education.description.1.companyTitle'),
                "company": "CFPIC",
                "location": "São João da Madeira, Portugal",
                "website": "http://www.cfpic.pt/",
                "startDate": "2012",
                "endDate": "22 April 2015"
            },
            {
                "title": t('education.description.2.title'),
                "companyTitle": t('education.description.2.companyTitle'),
                "company": "Boavista",
                "location": "Santa Maria da Feira, Portugal",
                "website": "http://www.ecboavista.com/",
                "startDate": "",
                "endDate": "4 Dec 2015"
            },
            {
                "title": t('education.description.3.title'),
                "companyTitle": t('education.description.3.companyTitle'),
                "company": "Santa Maria da Feira",
                "location": "Santa Maria da Feira, Portugal",
                "website": "https://ae-smfeira.pt/",
                "startDate": "2010",
                "endDate": "2012"
            }
        ]
    }
    const languages = {
        "img": "languages",
        "overlayTitle": t('languages.overlayTitle'),
        "underlayTitle": t('languages.underlayTitle'),
        "language": t('languages.language'),
        "understanding": t('languages.understanding'),
        "speaking": t('languages.speaking'),
        "writing": t('languages.writing'),
        "listening": t('languages.listening'),
        "reading": t('languages.reading'),
        "interaction": t('languages.interaction'),
        "production": t('languages.production'),
        "levels": t('languages.levels'),
        "framework": t('languages.framework'),
        "description": [
            {
                "language": t('languages.description.0.language'),
                "flag": "pt",
                "listening": "C2",
                "reading": "C2",
                "spokenInteraction": "C2",
                "spokenProduction": "C2",
                "writing": "C2"
            },
            {
                "language": t('languages.description.1.language'),
                "flag": "gb",
                "listening": "C1",
                "reading": "C1",
                "spokenInteraction": "C1",
                "spokenProduction": "C1",
                "writing": "B1"
            },
            {
                "language": t('languages.description.2.language'),
                "flag": "es",
                "listening": "C1",
                "reading": "C1",
                "spokenInteraction": "C1",
                "spokenProduction": "C1",
                "writing": "B1"
            },
            {
                "language": t('languages.description.3.language'),
                "flag": "be",
                "listening": "A2",
                "reading": "A2",
                "spokenInteraction": "A1",
                "spokenProduction": "A1",
                "writing": "A1"
            }
        ]
    }
    const programmingLanguages = {
        "img": "programmingLanguages",
        "overlayTitle": t('programmingLanguages.overlayTitle'),
        "underlayTitle": t('programmingLanguages.underlayTitle'),
        "description": [
            [
                {
                    id: 1,
                    title: "Industrial",
                },
                {
                    id: 2,
                    title: "Programming Languages",

                },
                {
                    id: 3,
                    title: "software",

                },
            ],
            [
                {
                    title: "Ladder",
                    imgLink: "lader",
                    website: "https://ladderlogicworld.com/",
                },
                /*    {
                       title: "FrequencyInverters",
                       imgLink: FrequencyInverters_Img,
                       website: "",
                   }, */
                {
                    title: "Arduino",
                    imgLink: "arduino",
                    website: "https://github.com/rui-oliveira-tech/webSite/",
                },
            ],
            [
                {
                    title: "C++",
                    imgLink: "cpp",
                    website: "https://www.w3schools.com/cpp/",
                },
                {
                    title: "Css",
                    imgLink: "css",
                    website: "https://www.w3schools.com/css/",
                },
                {
                    title: "Html",
                    imgLink: "html",
                    website: "https://www.w3.org/html/",
                },
                {
                    title: "Js",
                    imgLink: "js",
                    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/",
                },
                {
                    title: "NodeJs",
                    imgLink: "nodeJs",
                    website: "https://nodejs.org/",
                },
            ],
            [
                {
                    title: "Git",
                    imgLink: "git",
                    website: "https://git-scm.com/",
                },
                {
                    title: "Visual Studio Code",
                    imgLink: "vsc",
                    website: "https://code.visualstudio.com/",
                },
                {
                    title: "Linux",
                    imgLink: "linux",
                    website: "https://www.linux.org/",
                },
                {
                    title: "Windows",
                    imgLink: "windows",
                    website: "https://www.microsoft.com/en-gb/windows/",
                },
            ]
        ]
    }
    const experience = {
        "img": "experience",
        "overlayTitle": t('experience.overlayTitle'),
        "underlayTitle": t('experience.underlayTitle'),
        "description": [
            {
                "title": t('experience.description.0.title'),
                "company": "SOCEA nv",
                "location": "Oelegem, Belgium",
                "website": "https://www.socea.be/",
                "offerType": "Full-time",
                "startDate": "May 2019",
                "endDate": "Nu",
                "functionsPerformed": t('experience.description.0.functionsPerformed'),
                "skillsGained": t('experience.description.0.skillsGained')
            },
            {
                "title": t('experience.description.1.title'),
                "company": "MEDREPAIR",
                "location": "Beveren, Belgium",
                "website": "https://www.msc.com/",
                "offerType": "Full-time",
                "startDate": "Jul 2018",
                "endDate": "May 2019",
                "functionsPerformed": t('experience.description.1.functionsPerformed'),
                "skillsGained": t('experience.description.1.skillsGained')
            },
            {
                "title": t('experience.description.2.title'),
                "company": "SERSAN",
                "location": "Lourosa, Portugal",
                "website": "https://www.sersan.pt/",
                "offerType": "Full-time",
                "startDate": "Feb 2015",
                "endDate": "Jul 2018",
                "functionsPerformed": t('experience.description.2.functionsPerformed'),
                "skillsGained": t('experience.description.2.skillsGained')
            },
            {
                "title": t('experience.description.3.title'),
                "company": "Electro Oliveira",
                "location": "Milheirós de Poiares, Portugal",
                "website": "https://www.sersan.pt/",
                "offerType": "Full-time",
                "startDate": "2012",
                "endDate": "2015",
                "functionsPerformed": t('experience.description.3.functionsPerformed'),
                "skillsGained": t('experience.description.3.skillsGained')
            }
        ]
    }

    const projects = {
        "img": "projects",
        "overlayTitle": t('projects.overlayTitle'),
        "underlayTitle": t('projects.underlayTitle'),
        "description": [
            {
                "title": "Home Assistant",
                "website": "https://github.com/rui-oliveira-tech/homeAssistant/",
                "startDate": "7 Feb 2021",
                "endDate": "Nu",
                "description": t('projects.description.0.description')
            },
            {
                "title": "Website",
                "website": "https://github.com/rui-oliveira-tech/webSite/",
                "startDate": "11 Feb 2022",
                "endDate": "Nu",
                "description": t('projects.description.1.description')
            }
        ]
    }
    const other = {
        "img": "other",
        "overlayTitle": t('other.overlayTitle'),
        "underlayTitle": t('other.underlayTitle'),
        "description": [
            {
                "id": 2,
                "title": t('other.description.0.title'),
                "startDate": "17 May 2014",
                "endDate": "25 May 2014",
                "description": t('other.description.0.description')
            },
            {
                "id": 1,
                "title": t('other.description.1.title'),
                "startDate": "7 Feb 2021",
                "endDate": "Nu",
                "description": t('other.description.1.description')
            }
        ]
    }
    const googleMapsMarkers = {
        "img": "googleMapsMarkers",
        "overlayTitle": t('googleMapsMarkers.overlayTitle'),
        "underlayTitle": t('googleMapsMarkers.underlayTitle'),
        "description": []
    }

    const about = {
        "img": "about",
        "overlayTitle": t('about.overlayTitle'),
        "underlayTitle": t('about.underlayTitle'),
        "description": [
            [
                t('about.description.0.0')
            ],
            [
                t('about.description.1.0'),
                t('about.description.1.1', { company: experience.description[0].company }),
                t('about.description.1.2'),
                t('about.description.1.3', { location: experience.description[0].location }),
                t('about.description.1.4')

            ],
            [
                t('about.description.2.0'),
                t('about.description.2.1'),
                t('about.description.2.2'),
                t('about.description.2.3'),
                t('about.description.2.4')
            ],
            [
                t('about.description.3.0')
            ]
        ]
    }

    return (
        {
            app_title,
            navigationBar,
            footer,
            home,
            about,
            education,
            languages,
            programmingLanguages,
            experience,
            projects,
            other,
            googleMapsMarkers,
        }
    )
};