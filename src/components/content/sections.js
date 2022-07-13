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

const sections = [
    {
        id: 1,
        title: "About",
        hoverTitle: "Who I am",
        text: (
            <div className="section">
                <h2 className="section__title bold">About</h2>
                <p className="light text big">I'm Rui. I'm a Industrial Electrician.</p>
                <p className="light text">
                    I am currently working at the{" "}
                    <a href={experience[0].website}>{experience[0].company}</a> in{" "}
                    {experience[0].location}. However I have total and immediate
                    availability to start working.
                </p>
                <p className="light text">
                    I have excellent knowledge of Electricity, Pneumatics, Hydraulics,
                    Interpretation of schematics, Informatics in the user's perspective,
                    as well as in the use of internet.
                </p>
                <p className="light text">
                    My strengths are Electrification of electrical boards and structures,
                    Industrial maintenance and repair.
                </p>
                <p className="light text">
                    I also have experience in industrial automation and electromechanical.
                </p>
                <p className="light text">
                    I have good team work spirit, cooperative and with a taste for
                    knowledge and learning.
                </p>
                <p className="light text">
                    I have preference in working as an industrial electrician, but I do
                    not exclude the possibility of performing another position in
                    different areas.
                </p>
                <p className="light text big right">
                    Looking forward to hearing from you.
                </p>
                <div class="from-right  hireMe_btn hireMe_btn__about">Hire me</div>
            </div>
        ),
    },
    {
        id: 2,
        title: "Education",
        hoverTitle: "What I've learned",
        text: (
            <div className="section">
                <h2 className="section__title bold" /* onClick={slideChangeOnClick} */>
                    Education
                </h2>
                {education.map((degree) => (
                    <>
                        <p className="light big subTitle">{degree.title}</p>
                        <a className="textGlue" href={degree.website}>{degree.company} in {degree.location}</a>
                        <p className="text">{degree.startDate === "" ? degree.endDate : degree.startDate + " - " + degree.endDate}</p>
                    </>
                ))}
                <h2 className="section__title bold">Languages</h2>

                <table className="languagesTable">
                    <thead>
                        <tr>
                            <th width="150px"> LANGUAGE</th>
                            <th className="divid" colspan="2">
                                UNDERSTANDING
                            </th>
                            <th className="divid" colspan="2">
                                SPEAKING
                            </th>
                            <th className="divid">WRITING</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Listening</td>
                            <td>Reading</td>
                            <td>Interaction</td>
                            <td>Production</td>
                            <td></td>
                        </tr>
                        {languages.map((degree) => (
                            <tr className="color">
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
                            <td className="noBorder left" colspan="5">
                                <p className="small text noPading">Levels: A1/2: Basic user - B1/2: Independent user - C1/2 Proficient user</p>
                                <p className="small text noPading">Common European Framework of Reference for Languages</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div >
        ),
    },
    {
        id: 3,
        title: "Experience",
        hoverTitle: "What I've done",
        text: (
            <div className="section">
                <h2 className="section__title bold">Experience</h2>
                {experience.map((degree) => (
                    <>
                        <p className="light big subTitle">{degree.title}</p>
                        <a className="textGlue" href={degree.website}>{degree.company} in {degree.location}</a>
                        <p className="text">{degree.startDate} - {degree.endDate} - {degree.offerType}{" "}</p>
                        <p className="light text textSpacement">{degree.skillsGained}</p>
                        <p className="light text textSpacement">
                            {degree.functionsPerformed}
                        </p>
                    </>
                ))}
            </div>
        ),
    },
    {
        id: 4,
        title: "Projects",
        hoverTitle: "What I've created",
        text: (
            <div className="section">
                <h2 className="section__title bold">Projects</h2>
                {projects.map((degree) => (
                    <>
                        <a className="light big subTitle" href={degree.website}>{degree.title}</a>
                        <p className="text">{degree.startDate} - {degree.endDate}</p>
                        <p className="light text textSpacement">{degree.description}</p>
                    </>
                ))}
            </div>
        ),
    },
    {
        id: 5,
        title: "Other things",
        hoverTitle: "Other stuff I'm doing",
        text: (
            <div className="section">
                <h2 className="section__title bold">Other things</h2>
                {other.map((degree) => (
                    <>
                        <p className="light big subTitle">{degree.title}</p>
                        <p className="text">{degree.startDate} - {degree.endDate}</p>
                        <p className="light text textSpacement">{degree.description}</p>
                    </>
                ))}
            </div>
        ),
    },
];

export default sections;
