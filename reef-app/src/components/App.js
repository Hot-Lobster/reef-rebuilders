
import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts/index";
import AquaristView from "./AquaristView";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <AquaristView />

        <Footer />
      </Fragment>
    );
  }
}
