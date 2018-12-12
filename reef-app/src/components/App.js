import React, { Component } from "react";
import Aquarist from "../Pages/Aquarist";
import Coral from "../Pages/Coral";
import Market from "../Pages/Market";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Market} />
          <Route exact path="/user" component={Aquarist} />
          <Route exact path="/coral" component={Coral} />
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
