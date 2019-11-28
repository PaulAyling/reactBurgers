// NOT IN PRODUCTION
// This will be the section level of the components

import React  from "react";
import "../css/components/codeContainer.css";
import "../css/components/paint.css";
import "../css/components/fridge.css";
import "../css/components/window.css";
import "../css/components/menu.css";

const CodeContainerMolecule = (props) => {
  const child = (
    <p className="container_component_text">
      {props.text}
    </p>)
  return (
    <section id={props.CodeContainerMolecule_Id} 
    className={props.CodeContainerMolecule_Style +" padding-sm"}>
  {props.textIsCode === "1" ? (<pre> {props.text}</pre>) : child }
    </section>
  );
};


export default CodeContainerMolecule