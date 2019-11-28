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
      <div id={"ComponentContainer: "+props.Data[0].id} className=" component-container" key={props.Data[0].id}>
        <div id="Container-Molecules-and-Header" className={"container-molecules-and-header "+ props.Styles[0].ContainerDimensions} >
         <div className="component-header"> <p className="codeContainerName">{props.Data[0].componentName}</p>
         </div>

          <section id="container-Molecules"  className={"container-molecules "+props.Styles[0].componentBorder}>
            <CodeContainerMolecule
              modKey={"Filename "+props.Data[0]}
              CodeContainerMolecule_Id="Filename"
              CodeContainerMolecule_Style={props.Styles[0].filenameSection}
              textIsCode="0"
              text={Data.filename}

            />
            <CodeContainerMolecule
            modKey={"Imports_" +props.Data[0].id} 
              CodeContainerMolecule_Id="Imports"
              CodeContainerMolecule_Style={props.Styles[0].importsSection}
              textIsCode="1"
              text={Data.importPaths}
            />
            <CodeContainerMolecule
            modKey={"Definition_" +props.Data[0].id} 
              CodeContainerMolecule_Id="Definition"
              CodeContainerMolecule_Style={props.Styles[0].definitionSection}
              textIsCode="1"
              text={Data.defineComponent}
            />
            <CodeContainerMolecule
            modKey={"Return_" +props.Data[0].id} 
              CodeContainerMolecule_Id="Return"
              CodeContainerMolecule_Style={props.Styles[0].returnSection}
              textIsCode="1"
              text={Data.returnJsx}
            />
            <CodeContainerMolecule
            modKey={"Export_" +props.Data[0].id} 
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
      <Fragment key={props.Data[0].id} >{codeRender}</Fragment>
  );
};

export default CodeContainer;
