const fs = require("fs");
const path = require("path");

module.exports = ({ jobs, etc }) => {
  const template = path.resolve(__dirname, "./cvTemplate.html")
  const experience = jobs.map((job, i) => `
    <div class="job${i === jobs.length - 1 ? ' last': ''}">
      <h2>Facebook</h2>
      <h3>${job.position}</h3>
      <h4>2005-2007</h4>
      <p>Intrinsicly enable optimal core competencies through corporate relationships. Phosfluorescently
        implement worldwide vortals and client-focused imperatives. Conveniently initiate virtual paradigms
        and top-line convergence. </p>
    </div>`);

   return fs.readFileSync(template).toString()
    .replace("{{experience}}", experience.join("\n"));
};
// babel