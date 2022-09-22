import React, { useEffect, useState } from "react";
import "./_SectionBrowserView.scss"
import sections from "./sectionsConfig.js"
import Card from "./Card"

export default function CardSectionBrowserView() {
  const [isInactive, setIsInactive] = useState(true);
  const [currentlyOpenCard, setCurrentlyOpenCard] = useState(0);

  useEffect(() => {
    setTimeout(function () {
      setIsInactive(false)
    }, 200);
  }, [])

  const onClickOpenCard = (id) => (e) => {
    setCurrentlyOpenCard(id);
  }

  const onClickCloseCard = (e) => {
    e.stopPropagation();
    setCurrentlyOpenCard(-1);
  }

  return (
    <section className="scroll_to projects">
      <div className={["sections", isInactive ? "s--inactive" : "", currentlyOpenCard > 0 ? "s--card-active" : ""].join(" ")}>
        <div className="sections__inner">
          {
            sections.map((section, i) => (
              <Card key={i} section={section} currentlyOpenCard={currentlyOpenCard} onClickOpenCard={onClickOpenCard} onClickCloseCard={onClickCloseCard} />
            ))
          }
        </div>
      </div>
    </section>
  )
}
