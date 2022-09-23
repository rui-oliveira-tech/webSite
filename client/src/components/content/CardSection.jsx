import React from "react";
import "./_CardSection.scss"
import sections from "./sectionsConfig.js"

export default function CardSection() {
  return (
    <section className="scroll_to projects">
      <div className="about">
        {
          sections.map((section, i) => (
            section.text
          ))
        }
      </div>
    </section>
  )
}
