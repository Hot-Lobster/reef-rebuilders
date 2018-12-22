import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import gnips from '../Images/gnips.jpg';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  mainFeaturedPost: {
    // backgroundImage: `url(https://cdn.pixabay.com/photo/2017/09/13/15/50/coral-2745956_960_720.jpg)`,
    backgroundImage: `url(${gnips})`,
    height: '500px', 
    backgroundColor: theme.palette.grey[800],
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
    marginTop: 20, 
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  missionStatementContent: {
    padding: 20,
    height: 350,
    marginTop: 20,
    marginBottom: 20
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
    marginBottom: 20,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
}});

const featuredPosts = [
  {
    title: 'The Basics Of Coral',
    // date: 'Nov 12',
    description:
      'Coral resembles a rock or a plant but is actually an animal. Most coral reefs are formed by a symbiosis between corals and algae that live inside their tissues.',
  },
  {
    title: 'Coral Colors and Shapes',
    date: 'Nov 11',
    description:
      'Corals can come in all different colors, shapes, and sizes. The color is determined by the exact mix of zooxanthellae algae present within their tissues.',
  },
];

function Blog(props) {
  const { classes } = props;

  return (
    <React.Fragment>
       <Header />
      <CssBaseline />
      <div className={classes.layout}>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Featured Coral:
                  </Typography>
                  <Typography variant="h1" color="inherit" paragraph>
                    "Gorilla Nipple Zoanthids"
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={40} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      {/* <Typography variant="subtitle1" color="textSecondary">
                        {post.date}
                      </Typography> */}
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      {/* <Typography variant="subtitle1" color="primary">
                        Click here for additional info
                      </Typography> */}
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image={require('../Images/coralpolypdiagram.jpg')}
                      // image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                      title="Image title"
                    />
                  </Hidden>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={40}>
            <Grid item xs={12}>
              <Paper style={styles.missionStatementContent}>
                  <Typography variant="h6">
                      Reef Rebuilders was created with the goal of connecting aquarists and conservationists
                      and create a hub where coral fragments can be traded and displayed. There are plenty of
                      coral enthusiasts accross the world looking for specific kinds of coral and with the help
                      of this app, they can easily browse a marketplace full of user-submitted coral fragmentss.
                      Reef Rebuilders makes finding or offering coral fragments easy, granting users the information
                      needed to connect and agree on pricing and logistics. This app creates a useful environment
                      for sharing coral while at the same time supporting the environmental cause of protecting coral 
                      reefs from extinction.
                  </Typography>
              </Paper>
            </Grid>
          </Grid>
          {/* End sub featured posts */}
          
          {/* <Grid container spacing={40} className={classes.mainGrid}> */}
            {/* Main content */}
            {/* <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                Put the main content here.
              </Typography>
              <Divider />
            </Grid> */}
            {/* End main content */}
          {/* </Grid> */}
        </main>
      </div>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);