import React from "react";
// import { Paper, Tabs, Tab } from "@material-ui/core";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
// import MenuIcon from "@material-ui/icons";

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        variant="h8"
        color="inherit"
        style={{ textAlign: "center", margin: "auto",}}
      >
         Reef Rebuilders  Inc. &copy; 2018, All Rights Reserved 
      </Typography>
    </Toolbar>
  </AppBar>
);

