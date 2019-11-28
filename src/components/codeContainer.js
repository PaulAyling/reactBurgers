// 3. combine in reteraunt
// 4. output online

import React, { Fragment } from "react";

// styling
import "../css/components/codeContainer.css";
import "../css/components/paint.css";
import "../css/components/fridge.css";
import "../css/components/window.css";
import "../css/components/menu.css";
import "../css/components/burger.css";
import CodeContainerMolecule from "./codeContainerMolecule";

const CodeContainer = props => {
  const codeRender = props.Data.map(Data => {
    
    return (
      <div id="Component Container-" className=" component-container">
        <div id="Container-Molecules-and-Header" className={"container-molecules-and-header "+ props.Styles[0].ContainerDimensions} >
         <div className="component-header"> <p className="codeContainerName">{props.Data[0].componentName}</p>
         </div>

          <section id="container-Molecules" className={"container-molecules "+props.Styles[0].componentBorder}>
            <CodeContainerMolecule
              CodeContainerMolecule_Id="Filename"
              CodeContainerMolecule_Style={props.Styles[0].filenameSection}
              textIsCode="0"
              text={Data.filename}
            />
            <CodeContainerMolecule
              CodeContainerMolecule_Id="Imports"
              CodeContainerMolecule_Style={props.Styles[0].importsSection}
              textIsCode="1"
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
            <CodeContainerMolecule
              CodeContainerMolecule_Id="Export"
              CodeContainerMolecule_Style={props.Styles[0].exportsSection}
              textIsCode="0"
              text={Data.exportComponent}
            />
          </section>
        </div>

      </div>
      
    );
  });

  return (
      <Fragment>{codeRender}</Fragment>
  );
};

export default CodeContainer;
