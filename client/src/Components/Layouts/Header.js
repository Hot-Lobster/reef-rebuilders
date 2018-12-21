import React from "react";
import { AppBar, withStyles, Toolbar, Button, IconButton } from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';

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
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  },
  list: {
    width: 250,
    paddingLeft: 12, 
  },
  fullList: {
    width: 'auto',
  },
  nav: {
    width: 250,

  },
  //This will make the app bar appear below the bar
  paper: {
    height: 'calc(100% - 64px)',
    top: 64,
  }
  //Add this to <drawer/>
  //classes={{paper: classes.paper}}
});

class Header extends React.Component {

  state = {
    left: false,
  };

  toggleDrawer(side, open){
    this.setState({
      [side]: open,
    });
  }

  // sideList(classes){
  //   return (
  //   <div className={classes.list}>
  //     <List>
  //     <Divider />
  //       {['Sign In', 'Sign Up', 'Marketplace', 'Profile', 'Logout'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //   </div>
  // )}

  render(){
    const { classes } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
        <Button onClick={() => this.toggleDrawer('left', true)}>Open Left</Button>
        <Drawer classes={{ paper: classes.paper }} open={this.state.left} onClose={() => this.toggleDrawer('left', false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={() => this.toggleDrawer('left', false)}
              onKeyDown={() => this.toggleDrawer('left', false)}
            >
              {/* {this.sideList(classes)} */}
              <List className={classes.nav}>
                <ListItem button>
                  <Link to="/mainlayout">
                    <ListItemText primary="Home" />
                  </Link>
                    <ListItemIcon>
                    </ListItemIcon>
                
                </ListItem>

              </List>

            </div>
          </Drawer>
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
}
export default withStyles(styles)(Header);