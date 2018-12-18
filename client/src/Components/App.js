import React, { Component } from "react";
import Aquarist from "../Pages/Aquarist";
import Coral from "../Pages/Coral";
import Market from "../Pages/Market";
import Mainlayout from "../Pages/Mainlayout";
import SignIn from "../Pages/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Market} />
          <Route exact path="/user" component={Aquarist} />
          <Route exact path="/coral" component={Coral} />
          <Route exact path="/mainlayout" component={Mainlayout} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </Router>

      // <Fragment>
      //   <Header />

      // <Market />

      //   <Footer />
      // </Fragment>
    );
  }
}
