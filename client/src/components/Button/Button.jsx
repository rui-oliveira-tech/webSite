import React from "react";
import "./Button.scss";

export default function Button(props) {
  return (
    <a
      className={[...props.className.split(" "), "button"].join(" ")}
      target={props.target || "_blank"}
      rel={props.target || "noreferrer"}
      href={props.href}>
      {props.children}
    </a>
  )
}