import React from "react";
import "./Button.scss";

interface ButtonProps {
  className: string;
  target?: string;
  href: string;
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <a
      className={[...props.className.split(" "), "button"].join(" ")}
      target={props.target || "_blank"}
      rel={props.target ? "noopener noreferrer" : "noreferrer"}
      href={props.href}
    >
      {props.children}
    </a>
  );
}
