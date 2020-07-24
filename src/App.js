import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./assets/images/logo.png";
import Home from "./components/pages/Home";
import Lobby from "./components/pages/Lobby";
import NewRoom from "./components/pages/NewRoom";
import Room from "./components/pages/Room";
import JoinRoom from "./components/pages/JoinRoom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Fragment>
          <div className="container">
            <img id="logo" alt="logo" src={logo} />
            <div className="container-white">
              <Route exact path="/" component={Home} />
              <Route exact path="/lobby" component={Lobby} />
              <Route exact path="/new" component={NewRoom} />
              <Route exact path="/room/:room_name" component={Room} />
              <Route exact path="/join" component={JoinRoom} />
            </div>
          </div>
        </Fragment>
      </Switch>
    </Router>
  );
};

export default App;
