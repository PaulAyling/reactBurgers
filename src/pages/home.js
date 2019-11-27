import React from 'react';
import AppData from '../data/appData';
import CodeContainer from '../components/codeContainer';

// CREATE PROPS FOR CODECONTAINERS
//CSS
const CSSData = AppData.data.filter(function(getFile){
  return getFile.componentName == "paint"
});
const CSSStyles = AppData.styles.filter(function(getFile){
  return getFile.component_Name == "paint"
});
//Fridge
const fridgeData = AppData.data.filter(function(getFile){
  return getFile.componentName == "fridge"
});
const fridgeStyles = AppData.styles.filter(function(getFile){
  return getFile.component_Name == "fridge"
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
  return getFile.componentName == "menu"
});
const menuStyles = AppData.styles.filter(function(getFile){
  return getFile.component_Name == "menu"
});
//Burger
const burgerData = AppData.data.filter(function(getFile){
  return getFile.filename == "App.js"
});
const burgerStyles = AppData.styles.filter(function(getFile){
  return getFile.componentName == "burger"
});

const Home = () => {
  // {console.log(json.stringify(burgerStyle))}
  return (
    <div className="page-container">
 
        <div id="row 1" className="restaurant-row">

      <CodeContainer Data={CSSData} Styles={CSSStyles}/>
      <CodeContainer Data={fridgeData} Styles={fridgeStyles}/>
      <CodeContainer Data={windowData} Styles={windowStyles}/>



        </div>
        <div id ="row 2">
        <CodeContainer Data={menuData} Styles={menuStyles}/>
        </div>
        <div id="row 3"></div>
    
 
    </div>
  );
};

export default Home