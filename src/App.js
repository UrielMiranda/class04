import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Help from "./components/Help";
import Premium from "./components/Premium";
import Download from "./components/Download";
import "./index.less";
import { BrowserRouter, Route } from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/premium" component={Premium} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/download" component={Download} />
          <Route exaxt path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
