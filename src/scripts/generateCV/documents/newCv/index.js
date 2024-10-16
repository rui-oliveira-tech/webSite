import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getFormatDate } from "../../../../util/getFormatDate.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default ({ currentLanguageCode, cvData, getLink, cvType }) => {
  const template = path.resolve(__dirname, "./cvTemplate.html");
  const cssIconsTemplate = path.resolve(__dirname, "./icons/css/fontello-embedded.css");
  const cssTemplate = path.resolve(__dirname, "./cvCss.css");

  const app_title = cvData.app_title;
  const title = cvData.home.subTitle.first;
  const profile = cvData.about.description.cv;
  const languages = cvData.languages.description;
  const languagesKey = cvData.languages.key;
  const characteristics = cvData.characteristics;
  const softSkills = cvData.skills.softSkills.description;
  const educations = cvData.educations.description;
  const experiences = cvData.experiences.description;
  const programmingLanguages = cvData.programmingLanguages.description;
  const projects = cvData.projects.description;
  const expressions = cvData.expressions;

  const profileHtml = (`${profile}`);

  const contactInfoHtml = (`
    <div class="yui-gf pageBrake">
      <div class="contact-info">
        <h3 class="contactInfo noBrake blue-icon icon-globe-1">
          <a href="${getLink('website')}${currentLanguageCode}">&nbsp;&nbsp;rui-oliveira.com</a>
        </h3>
        <h3 class="contactInfo noBrake blue-icon icon-mail">
          <a href="${getLink('mail')}">&nbsp;&nbsp;hire@rui-oliveira.com</a>
        </h3>
        <h3 class="contactInfo noBrake blue-icon icon-phone">&nbsp;&nbsp;${getLink('gsm')}</h3>
        <h3 class="contactInfo noBrake blue-icon icon-home">&nbsp;&nbsp;Brecht, Belgium</h3>
      </div>
    </div>
  `);

  const skillsHtml = `
    <div class="yui-gf pageBrake">
      <div class="line-with-text"><h2 class="icon-flow-tree">&nbsp;&nbsp;${cvData.skills.softSkills.underlayTitle}</h2></div>
      ${softSkills?.map((skill, i) => skill.type.includes(cvType) ? `
        <div class="skills${i === 0 ? ' frist' : ''}">
          <h4 class="icon-plus blue-icon">&nbsp;&nbsp;${skill.title}</h4>
        </div>
      `: '').join('')}
    </div>
  `;

  const experienceHtml = `
    <div class="yui-gf pageBrake">
      <div class="line-with-text"><h2 class="icon-briefcase">&nbsp;&nbsp;${cvData.experiences.underlayTitle}</h2></div>
      ${experiences?.map((experience, i) => experience.type.includes(cvType) ? `
        <div class="experiences${i === 0 ? ' frist' : ''}">
          <h3 class="experience title">${experience.title}</h3>
          <a class="experience link noBrake" target="_blank" rel="noreferrer" href="${experience.website}">
            <h4 class="noBrake company">${experience.company}</h4> <h4 class="noBrake company"> ${expressions.prepositions.in} ${experience.location}</h4>
          </a>
          <h4 class="first-intervalDate intervalDate date">${getFormatDate(experience, expressions)}</h4>
          <h4 class="second-intervalDate intervalDate date">${expressions.offerTypes[experience.offerType]}</h4>
          <p class="description">${experience.functionsPerformed}</p>
        </div>
      `: '').join('')}
    </div>
  `;

  const educationHtml = `
    <div class="yui-gf pageBrake">
      <div class="line-with-text"><h2 class="icon-graduation-cap">&nbsp;&nbsp;${cvData.educations.underlayTitle[1]}</h2></div>
      ${educations?.map((education, i) => education.type.includes(cvType) && education.type.includes("education") ? `
        <div class="educations${i === 0 ? ' frist' : ''}">
          <h4 class="experience">${education.title}</h4>
          <a class="experience link noBrake" target="_blank" rel="noreferrer" href="${education.website}">
            <h5 class="noBrake company">${education.company}</h5> <h5 class="noBrake company"> ${expressions.prepositions.in} ${education.location}</h5>
          </a>
        </div>`: '').join('')}
    </div>
  `;

  const certificationHtml = `
  <div class="yui-gf pageBrake">
    <div class="line-with-text"><h2 class="icon-graduation-cap">&nbsp;&nbsp;${cvData.educations.underlayTitle[0]}</h2></div>
    ${educations?.map((education, i) => education.type.includes(cvType) && education.type.includes("certification") ? `
      <div class="educations${i === 0 ? ' frist' : ''}">
        <h4 class="experience">${education.title}</h4>
        <a class="experience link noBrake" target="_blank" rel="noreferrer" href="${education.website}">
          <h5 class="noBrake company">${education.company}</h5> <h5 class="noBrake company"> ${expressions.prepositions.in} ${education.location}</h5>
        </a>
      </div>`: '').join('')}
  </div>
`;


  const programmingLanguageHtml = `
<div class="yui-gf pageBrake">
  <div class="line-with-text">
    <h2 class="icon-flow-tree">&nbsp;&nbsp;${cvData.programmingLanguages.underlayTitle}</h2>
  </div> <div class="programmingLanguages">
  ${programmingLanguages?.map((programmingLanguage, i) => programmingLanguage.type.includes(cvType) ? `
    <a href="${programmingLanguage.website}" target="_blank" class="svg-link${i === 0 ? ' first' : ''}">
      <div class="svg-container">
        ${fs.readFileSync(path.resolve(__dirname, `../../../../images/programming_languages/${programmingLanguage.img}.svg`), 'utf8')}  
      </div>     
    </a>   
    ` : '').join('')} 
  </div>
</div>
`;

  const projectHtml = `
    <div class="yui-gf pageBrake">
      <div class="line-with-text"><h2 class="icon-search">&nbsp;&nbsp;${cvData.projects.underlayTitle}</h2></div>
      ${projects?.map((project, i) => project.type.includes(cvType) ? `
        <div class="projects${i === 0 ? ' frist' : ''}">
          <a class="experience link" target="_blank" rel="noreferrer" href="${project.website}">
            <h3 class="experience title">${project.title}</h3>
          </a>
          <h4 class="first-intervalDate intervalDate date">${getFormatDate(project, expressions)}</h4>
          <p class="description">${project.description}</p>
        </div>
      `: '').join('')}
    </div>
  `;


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
            <h4 class="centre">${expressions.languages[language.flag]} - ${expressions.languagesLevels[language.level]} </h4>
            <div class="bar-container">
              <div class="bar" style="width: ${proficiencyMap[language.listening] || '0%'};"></div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  return fs.readFileSync(template).toString()
    .replace("{{cssIcons}}", "<style>" + fs.readFileSync(cssIconsTemplate).toString() + "</style>")
    .replace("{{css}}", "<style>" + fs.readFileSync(cssTemplate).toString() + "</style>")
    .replace("{{app_title}}", app_title)
    .replace("{{contactInfo}}", contactInfoHtml)
    .replace("{{title}}", title)
    .replace("{{profile}}", profileHtml)
    .replace("{{skills}}", skillsHtml)
    .replace("{{educations}}", educationHtml)
    .replace("{{certifications}}", certificationHtml)
    .replace("{{programmingLanguages}}", programmingLanguageHtml)
    .replace("{{experiences}}", experienceHtml)
    .replace("{{projects}}", projectHtml)
    .replace("{{languages}}", languageHtml);
};