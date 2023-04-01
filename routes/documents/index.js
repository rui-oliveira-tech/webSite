const fs = require("fs");
const path = require("path");

module.exports = ({ experience }) => {
  const template = path.resolve(__dirname, "./cvTemplate.html")
  const experienceHtml = experience?.map((exp, i) => `
    <div class="job${i === experience.length - 1 ? ' last': ''}">
      <h2>${exp.company}</h2>
      <h3>${exp.title}</h3>
      <h4>2005-2007</h4>
      <p>Intrinsicly enable optimal core competencies through corporate relationships. Phosfluorescently
        implement worldwide vortals and client-focused imperatives. Conveniently initiate virtual paradigms
        and top-line convergence. </p>
    </div>`);
  console.log(experienceHtml)
   return fs.readFileSync(template).toString()
    .replace("{{experience}}", experienceHtml?.join("\n"));
};
// babel