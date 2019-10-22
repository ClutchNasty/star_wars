import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Contact1 from "./Contact1";
import Contact2 from "./Contact2";
import Contact3 from "./Contact3";
import Contact4 from "./Contact4";
import Contact5 from "./Contact5";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Star Wars Characters</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Luke Skywalker</NavLink></li>
            <li><NavLink to="/contact">Darth Vader</NavLink></li>
            <li><NavLink to="/contact1">Darth Mall</NavLink></li>
            <li><NavLink to="/contact2">Obi-Wan-Kanobi</NavLink></li>
            <li><NavLink to="/contact3">Yoda</NavLink></li>
            <li><NavLink to="/contact4">Han Solo</NavLink></li>
            <li><NavLink to="/contact5">Princess Lea</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/contact1" component={Contact1}/>
            <Route path="/contact2" component={Contact2}/>
            <Route path="/contact3" component={Contact3}/>
            <Route path="/contact4" component={Contact4}/>
            <Route path="/contact5" component={Contact5}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;