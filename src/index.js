import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Navbar from './components/layouts/Navbar'
import About from './pages/about'
import Home from './pages/home'

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
