import React, { useEffect, useState } from "react";
import "./_SectionMobileView.scss"
import sections from "./sectionsConfig.js"

export default function CardSectionMobileView() {

  return (
    <section className="scroll_to projects">
      {
        sections.map((section) => (
          <div className="about">
            <div className="layout">
              <div className="titlePoss">
                {section.text}
              </div>
            </div>
          </div>
        ))
      }
    </section>
  )
}
