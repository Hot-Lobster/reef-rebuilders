import React from "react";
import { AppBar, withStyles, Toolbar, Button, IconButton } from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';


const styles = theme => ({
  appBar: {
    position: "relative"
  },
  drawer: {
    background: '#3f51b5'
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
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    flexGrow: 1,
    justifyContent: 'center',
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  },
  nav: {
    width: 175,
    display:'flex',
    flexDirection:'column',
    marginLeft: 20,
    paddingRight: 20, 
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  //This will make the app bar appear below the bar
  paper: {
    height: 'calc(100% - 64px)',
    top: 64,
  }
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class Header extends React.Component {

  state = {
    left: false,
  };

  toggleDrawer(side, open){
    this.setState({
      [side]: open,
    });
  }

  render(){
    const { classes } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
        <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => this.toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
        <Drawer classes={{ paper: classes.paper }} open={this.state.left} onClose={() => this.toggleDrawer('left', false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={() => this.toggleDrawer('left', false)}
              onKeyDown={() => this.toggleDrawer('left', false)}
            >
            {/* These are our NAV links */}
              <div>
                <List className={classes.nav}>
                  <ListItemLink href="/mainlayout">
                    <ListItemText className={classes.listItem} primary="Home" />
                  </ListItemLink>
                  <ListItemLink href="/signin">
                    <ListItemText primary="Sign In" />
                  </ListItemLink>                 
                  <ListItemLink href="/">
                    <ListItemText primary="Market" />
                  </ListItemLink>
                  <ListItemLink href="/user">
                    <ListItemText primary="Profile" />
                  </ListItemLink>
                  <ListItemLink href="/createnewaccount">
                    <ListItemText primary="Sign Up" />
                  </ListItemLink>
                  <ListItemLink href="/mainlayout">
                    <ListItemText primary="Logout" />
                  </ListItemLink>
                </List>
              </div>
            </div>
          </Drawer>
          {/* The title of our website */}
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Reef Rebuilders
          </Typography>
          {/* This is the search bar */}
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            
        </Toolbar>
      </AppBar>
      ); 
  };
}
export default withStyles(styles)(Header);