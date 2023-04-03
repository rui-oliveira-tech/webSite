const fs = require("fs");
const path = require("path");

module.exports = ({ languageKey, language, programmingLanguages, education, experience, projects, other, expressions }) => {
  const template = path.resolve(__dirname, "./cvTemplate.html")
  const educationHtml = education?.map((education, i) => `
    <div class="job${i === education.length - 1 ? ' last' : ''}">
      <h2>${education.company}</h2>
      <h3>${education.title}</h3>
      <h4>2005-2007</h4>
      <p>Intrinsicly enable optimal core competencies through corporate relationships. Phosfluorescently
        implement worldwide vortals and client-focused imperatives. Conveniently initiate virtual paradigms
        and top-line convergence. </p>
    </div>`);

  const experienceHtml = experience?.map((experience, i) => `
      <div class="job${i === experience.length - 1 ? ' last' : ''}">
        <h2>${experience.company}</h2>
        <a class="link" target="_blank" rel="noreferrer" href={${experience.website}}>${experience.title} in ${experience.location}</a >
        <h4>       
         ${experience.startDateYear === "" ? "" : experience.startDateDay
      + " " + experience.startDateMonth === "" ? "" : experience.startDateMonth
      + " " + experience.startDateYear
    + " - "}

    ${experience.endDateYear === "" ? "" :
      experience.endDateYear === "Present" ? expressions.month.Present + " -> " : experience.endDateDay
        + " " + (experience.endDateMonth === "" ? "" : experience.endDateMonth)
        + " " + experience.endDateYear
        + " -> "}
      

          </h4>
        <p>${experience.functionsPerformed}</p>
        <p>${experience.skillsGained}</p>
      </div > `);

  const projectsHtml = projects?.map((projects, i) => `
  < div class="job${i === projects.length - 1 ? ' last' : ''}" >
       <h2>${projects.company}</h2>
       <h3>${projects.title}</h3>
       <h4>2005-2007</h4>
       <p>${experience.description}</p>
     </div > `);

  const otherHtml = other?.map((other, i) => `
  < div class="job${i === projects.length - 1 ? ' last' : ''}" >
       <h2>${other.company}</h2>
       <h3>${other.title}</h3>
       <h4>2005-2007</h4>
       <p>${experience.description}</p>
     </div > `);

  return fs.readFileSync(template).toString()
    .replace("{{education}}", educationHtml?.join("\n"))
    .replace("{{experience}}", experienceHtml?.join("\n"))
    .replace("{{projects}}", projectsHtml?.join("\n"))
    .replace("{{other}}", otherHtml?.join("\n"));
};
// babel