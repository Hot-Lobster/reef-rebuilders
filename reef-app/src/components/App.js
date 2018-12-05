
import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts/index";
import ConservationView from "./ConservationView";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <ConservationView />

        <Footer />
      </Fragment>
    );
  }
}
