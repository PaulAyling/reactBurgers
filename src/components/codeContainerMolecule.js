// NOT IN PRODUCTION
// This will be the section level of the components

import React  from "react";
import "../css/components/codeContainer.css";
import "../css/components/paint.css";
import "../css/components/fridge.css";
import "../css/components/window.css";
import "../css/components/menu.css";

const CodeContainerMolecule = (props) => {
  return (
    <section id={props.section_Id} 
    className={props.section_Name}>
      {props.textIsCode ? 1 : '<pre>'}
        <p className="container_component_text">
          {props.section_text}
        </p>
        {props.textIsCode ? 1 : '</pre>'}
    </section>
  );
};
   

// propTypes = {
//   section_Id: PropTypes.string,
//   section_Name: PropTypes.string,
//   section_text: PropTypes.string,
// };

// defaultProps = {
//   section_Id: "tets",
//   section_Name: "tets",
//   section_text: "tets",
// };

export default CodeContainerMolecule