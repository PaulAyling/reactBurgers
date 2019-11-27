import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Navbar from './components/layouts/Navbar'

function App() {
  return (
    <div>
      <h1>Hellow peeops</h1>
    <Router>
      <Navbar />
      {/* <Switch>
        <Route exact path="/" component={Home} />
      </Switch> */}
    </Router>
  </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
