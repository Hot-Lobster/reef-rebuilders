import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
//import mktbackground from "../Images/mktbackground.jpeg";
// import User from "../../../models/User";

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
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
    // background: "linear-gradient(to right bottom, #430089, #82ffa1)"
    height: 300,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(https://images.pexels.com/photos/1076887/pexels-photo-1076887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1078&w=1920)`
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 10}px 0 ${theme.spacing.unit * 8}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9,
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

let cards = [0,1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];

function Market(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Header />
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              component="h2"
              variant="display3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Coral Marketplace
            </Typography>
            {/* <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Featured Coral
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.pexels.com/photos/920160/pexels-photo-920160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Coral Specimen
                    </Typography>
                    <Typography>Coral description</Typography>
                    <Typography>frags: #</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Contact Seller
                    </Button>
                    {/* <Button size="small" color="primary">
                      Add to Cart
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}

Market.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Market);
