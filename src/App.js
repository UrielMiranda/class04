import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Help from "./components/Help";
import Premium from "./components/Premium";
import Download from "./components/Download";
import "./index.less";
import { BrowserRouter, Route } from "react-router-dom";
const styled = {"width": "1250px", "margin": "0 auto"}
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div style={styled}>
          <Navbar />
          <Route exact path="/" render={(props) => <Home {...props}/>}/>
          <Route exact path="/premium" render={(props) => <Premium {...props}/>} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/download" component={Download} />
          <Route exaxt path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
