import React from "react";
import { AppBar, withStyles, Toolbar, Button, IconButton } from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

function Header(props) {
  const { classes } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Button color="inherit">
          <Link to="/mainlayout">
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/signin">
            Sign In
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/">
            Market
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/user">
            Profile
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/createnewaccount">
            Sign Up
          </Link>
        </Button>
        <Button color="inherit">Log Out</Button>
      </Toolbar>
    </AppBar>
  ); 
};

export default withStyles(styles)(Header);