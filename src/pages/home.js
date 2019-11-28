import React from 'react';
import AppData from '../data/appData';
import CodeContainer from '../components/codeContainer';

// CREATE PROPS FOR CODECONTAINERS
//CSS
const CSSData = AppData.data.filter(function(getFile){
  return getFile.componentName === "paint"
});
const CSSStyles = AppData.styles.filter(function(getFile){
  return getFile.component_Name === "paint"
});
//Fridge
const fridgeData = AppData.data.filter(function(getFile){
  return getFile.componentName === "fridge"
});
const fridgeStyles = AppData.styles.filter(function(getFile){
  return getFile.component_Name === "fridge"
});
//window
const windowData = AppData.data.filter(function(getFile){
  return getFile.componentName == "window"
});
const windowStyles = AppData.styles.filter(function(getFile){
  return getFile.component_Name == "window"
});
//Menu
const menuData = AppData.data.filter(function(getFile){
  return getFile.componentName === "menu"
});
const menuStyles = AppData.styles.filter(function(getFile){
  return getFile.component_Name === "menu"
});
//Burger
const burgerData = AppData.data.filter(function(getFile){
  return getFile.folder === "burger"
});
const burgerStyles = AppData.styles.filter(function(getFile){
  return getFile.component_Name ==

const Home = () => {

  return (
    <div className="page-container">
 <h1>hello</h1>
        <div id="row 1" className="restaurant-row">

      <CodeContainer Data={CSSData} Styles={CSSStyles}/>
      <CodeContainer Data={windowData} Styles={windowStyles}/>
      <CodeContainer Data={fridgeData} Styles={fridgeStyles}/>



        </div>
        <div className={"floor"}></div>
         
        <div id ="row 2">
        {/* <CodeContainer Data={menuData} Styles={menuStyles}/> */}
        </div>
        <div id="row 3" className="burgerRow">
          {/* <CodeContainer Data={burgerData} Styles={burgerStyles}/> */}

        </div>
              <div className={"shelf"}>components</div>
 
    </div>
  );
};

export default Home