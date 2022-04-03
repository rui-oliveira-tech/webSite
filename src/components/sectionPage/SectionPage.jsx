import "./_SectionPage.css";

export default function Section({ children, ...restProps }) {
  restProps.className += " scroll_to";
  return <section {...restProps}>{children}</section>;
}