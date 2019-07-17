import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Main from "./views/main";
import Regin from "./views/regin";
import Login from "./views/login";

import Did from "./views/Did";

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Router>
          <Route path="/main" component={Main} />
          <Route path="/regin" component={Regin} />
          <Route path="/login" component={Login} />

          <Redirect to="/main/home" />
          <Route path="/did" component={Did} />
        </Router>
      </div>
    );
  }
}
export default App;
