// 3. combine in reteraunt
// 4. output online

import React, { Fragment } from "react";

// styling
import "../css/components/codeContainer.css";
import "../css/components/paint.css";
import "../css/components/fridge.css";
import "../css/components/window.css";
import "../css/components/menu.css";
import CodeContainerMolecule from "./codeContainerMolecule";

const CodeContainer = props => {
  const codeRender = props.Data.map(Data => {
    return (
      <div id="codeContainer">
        <p className="codeContainerName">{props.Data[0].componentName}</p>
        <div className={props.Styles[0].componentBorder + " border"}>
          <section id="try my molecule">
            <CodeContainerMolecule
              CodeContainerMolecule_Id="Filename"
              CodeContainerMolecule_Style={props.Styles[0].filenameSection}
              textIsCode="0"
              text={Data.filename}
            />
            <CodeContainerMolecule
              CodeContainerMolecule_Id="Imports"
              CodeContainerMolecule_Style={props.Styles[0].importsSection}
              textIsCode="0"
              text={Data.importPaths}
            />
            <CodeContainerMolecule
              CodeContainerMolecule_Id="Definition"
              CodeContainerMolecule_Style={props.Styles[0].definitionSection}
              textIsCode="1"
              text={Data.defineComponent}
            />
            <CodeContainerMolecule
              CodeContainerMolecule_Id="Return"
              CodeContainerMolecule_Style={props.Styles[0].returnSection}
              textIsCode="1"
              text={Data.returnJsx}
            />
          </section>
        </div>
      </div>
    );
  });

  return (
    <div
      id="Card Page"
      className={props.Styles[0].codeContainerWidth + " code-container"}
    >
      <Fragment>{codeRender}</Fragment>
    </div>
  );
};

export default CodeContainer;
