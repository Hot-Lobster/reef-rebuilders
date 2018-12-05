import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core/";

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Grid
        justify="space-between"
        container
        spacing={24}
      >
        <Grid item>
          <Typography variant="headline" color="inherit">
            Coral Database
          </Typography>
        </Grid>
        <Grid item>
          <div>
            <Button
              style={{ textAlign: "right", margin: "auto" }}
              color="inherit"
            >
              Log out
            </Button>
          </div>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);