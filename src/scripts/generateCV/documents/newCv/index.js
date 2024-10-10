const fs = require("fs");
const path = require("path");

module.exports = ({ currentLanguageCode, cvData }) => {
  const template = path.resolve(__dirname, "./cvTemplate.html")
  const cssIconsTemplate = path.resolve(__dirname, "./icons/css/fontello-embedded.css")
  const cssTemplate = path.resolve(__dirname, "./cvCss.css")

  const app_title = cvData.app_title;
  const title = cvData.home.subTitle.first;
  const profile = cvData.about.description.cv;
  const languages = cvData.languages.description;
  const languagesKey = cvData.languages.key;
  const characteristics = cvData.characteristics;
  const skills = cvData.skills.description;
  const educations = cvData.educations.description;
  const experiences = cvData.experiences.description;
  const projects = cvData.projects.description;
  const others = cvData.other.description;
  const expressions = cvData.expressions;

  function formatDate(date) {
    if (date === "Permanent") return expressions.offerTypes.permanent;
    if (date === "Present") return expressions.months.present;
    const [year, month, day] = date.split('-').map(Number);
    return [day ? `${day}` : '', month ? expressions.months[month] : '', year].join(' ').trim();
  }

  function getIntervalDate(arg) {
    return `${formatDate(arg.startDate) === "0" ? '' : `${formatDate(arg.startDate) + " - "}`}
      ${formatDate(arg.endDate)}`;
  }

  const profileHtml = (`${profile}`);

  const contactInfoHtml = (`
  <div class="yui-gf pageBrake">
  <div class="contact-info">
    <h3 class="contactInfo noBrake blue-icon icon-linkedin">
      <a href="https://www.linkedin.com/in/RuiOliveira-Electrician/">&nbsp;&nbsp;ruioliveira-electrician</a>
    </h3>
    <h3 class="contactInfo noBrake blue-icon icon-globe-1">
      <a href="https://www.rui-oliveira.com/${currentLanguageCode}">&nbsp;&nbsp;rui-oliveira.com</a>
    </h3>
    <h3 class="contactInfo noBrake blue-icon icon-mail">
      <a href="mailto:hire@rui-oliveira.com">&nbsp;&nbsp;hire@rui-oliveira.com</a>
    </h3>
    <h3 class="contactInfo noBrake blue-icon icon-phone">&nbsp;&nbsp;+32474127175</h3>
    <h3 class="contactInfo noBrake blue-icon icon-home">&nbsp;&nbsp;Brecht, Belgium</h3>
  </div>  </div>
`);

  const skillsHtml = ` <div class="yui-gf pageBrake">
  <div class="line-with-text"><h2 class="icon-flow-tree">&nbsp;&nbsp;${cvData.skills.underlayTitle}</h2></div>
  ${skills?.map((skill, i) => `
    <div class="skills${i === 0 ? ' frist' : ''}">
      <h4 class="icon-plus blue-icon">&nbsp;&nbsp;${skill.title}</h4>
    </div>
  `).join('')}
  </div>
`;

  const experienceHtml = ` <div class="yui-gf pageBrake">
  <div class="line-with-text"><h2 class="icon-briefcase">&nbsp;&nbsp;${cvData.experiences.underlayTitle}</h2></div>
  ${experiences?.map((experience, i) => `
          <div class="experiences${i === 0 ? ' frist' : ''}">
          <h3 class="experience title">${experience.title}</h3>
          <a class="experience link noBrake" target="_blank" rel="noreferrer" href="${experience.website}"><h4 class="noBrake company">${experience.company}</h4> <h4 class="noBrake company"> ${expressions.prepositions.in} ${experience.location}</h4></a >
              <h4 class="first-intervalDate intervalDate date">${getIntervalDate(experience)}</h4>
              <h4 class="second-intervalDate intervalDate date">${expressions.offerTypes[experience.offerType]}</h4>
              <p class="description">${experience.functionsPerformed}</p>
              </div > `).join('')}
              </div>
            `;

  const educationHtml = `
  <div class="yui-gf pageBrake">
    <div class="line-with-text"><h2 class="icon-graduation-cap">&nbsp;&nbsp;${cvData.educations.underlayTitle}</h2></div>
    ${educations?.map((education, i) => education.type === "valid" ? `
            <div class="educations${i === 0 ? ' frist' : ''}">
              <h4 class="experience">${education.title}</h4>
              <a class="experience link noBrake" target="_blank" rel="noreferrer" href="${education.website}"><h5 class="noBrake company">${education.company}</h5> <h5 class="noBrake company"> ${expressions.prepositions.in} ${education.location}</h5></a >
            </div>`: '').join('')}
            </div>
          `;

  const projectHtml = `
            <div class="yui-gf pageBrake">
              <div class="line-with-text"><h2 class="icon-search">&nbsp;&nbsp;${cvData.projects.underlayTitle}</h2></div>
              ${projects?.map((project, i) => `
                <div class="projects${i === 0 ? ' frist' : ''}">
                  <a class="experience link" target="_blank" rel="noreferrer" href="${project.website}">
                  <h3 class="experience title">${project.title}</h3>
                  </a>
                  <h4 class="first-intervalDate intervalDate date">${getIntervalDate(project)}</h4>
                  <p class="description">${project.description}</p>
                </div>
              `).join('')}
            </div>
          `;


  const otherHtml = others?.map((other, i) => `
            <div class="job${i === 0 ? ' frist' : ''}">
            <h3 class="experience title">${other.title}</h3>
              <h4 class="first-intervalDate intervalDate date">${getIntervalDate(other)}</h4>
              <p>${other.description}</p>
            </div > `);


  const proficiencyMap = {
    A1: '20%',
    A2: '30%',
    B1: '50%',
    B2: '70%',
    C1: '90%',
    C2: '100%'
  };

  const languageHtml = `
  <div class="yui-gf pageBrake ">
    <div class="line-with-text"><h2 class="icon-globe">&nbsp;&nbsp;${cvData.languages.underlayTitle}</h2></div>
    ${languages?.map((language, i) => `
      <div class="language-level">
        <div class="language">
          <h4 class="centre">${expressions.languages[language.flag]}</h4>
          <div class="bar-container">
            <div class="bar" style="width: ${proficiencyMap[language.listening] || '0%'};"></div>
          </div>
        </div>
      </div>
    `).join('')}
  </div>
`;



  /*      <td className="noBorder left"><span className={"flag-icon flag-icon-" + t(languages.description.${i}.flag)}></span>{degree.language}</td>
    */


  return fs.readFileSync(template).toString()
    .replace("{{cssIcons}}", "<style>" + fs.readFileSync(cssIconsTemplate).toString() + "</style>")
    .replace("{{css}}", "<style>" + fs.readFileSync(cssTemplate).toString() + "</style>")
    .replace("{{app_title}}", app_title)
    .replace("{{contactInfo}}", contactInfoHtml)
    .replace("{{title}}", title)
    .replace("{{profile}}", profileHtml)
    .replace("{{skills}}", skillsHtml)
    .replace("{{educations}}", educationHtml)
    .replace("{{experiences}}", experienceHtml)
    .replace("{{projects}}", projectHtml)
    .replace("{{others}}", otherHtml)
    .replace("{{languages}}", languageHtml);
};