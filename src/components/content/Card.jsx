import React, { useEffect, useState } from "react";


export default function Card({ section, currentlyOpenCard, CardOpenOnClick, CardCloseOnClick }) {
    return (
        <div className={["card", currentlyOpenCard === section.id ? "s--active" : ""].join(" ")} onClick={CardOpenOnClick(section.id)}>
            <div className="card__overflow">
                <div className="card__inner">
                    <div className="card__bg"></div>
                    <div className="card__preview-sections">
                        <h2 className="card__heading">{section.hoverTitle}</h2>
                    </div>
                    <div className="card__close-btn" onClick={CardCloseOnClick}></div>
                    <div className="card__content">
                        {section.text}
                    </div>
                </div>
            </div>
            <div className="card__index"> {/* letra jota é cortada diminuir a fonte */}
                <div className="card__index-back">{section.title}</div>
                <div className="card__index-front">
                    <div className="card__index-overlay" data-index={section.title}>{section.title}</div>
                </div>
            </div>
        </div>
    )
}