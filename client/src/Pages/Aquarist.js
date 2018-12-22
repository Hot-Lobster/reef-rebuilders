import React from "react";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import {
  Grid,
  Paper,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Button,
  withStyles,
  Avatar,
} from "@material-ui/core";
import PropTypes from 'prop-types';
import CoralForm from '../Components/CoralForm';
import defaultpic from '../Images/defaultpic.png';
import defaultCoral from '../Images/defaultCoral.jpeg';
import FilePondInput from '../Components/FilePondInput';
import Oops from '../Images/Oops.png';
import CardActions from "@material-ui/core/CardActions";


const style = {
  avatar: {
    margin: 10, 
    width: 250, 
    height: 250
  }, 
  cardGrid: {
    padding: 10
  },
  grid: {
    marginTop: 50,
    marginBottom: 20

  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 20
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9,
  },
  cardContent: {
    flexGrow: 1
  },
  Paper: { 
    padding: 20,
    marginTop: 10, 
    marginBottom: 5, 
    marginLeft: 10, 
    marginRight: 10, 
    height:'auto' 
  },
  profilePaper: { 
    padding: 20, 
    marginTop: 10, 
    marginBottom: 5, 
    marginLeft: 10, 
    marginRight: 5, 
    height: "100%"
  },
  coralPaper: { 
    padding: 20, 
    marginTop: 10, 
    marginBottom: 5, 
    marginRight: 5, 
    height: "100%"
  },
  recentCard: {
    padding: 20,
    marginTop: 10,
    marginRight: 5,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  recentPaper: { 
    padding: 20,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 5, 
    height: "100%",
  }

};


function Aquarist(props) {
  const { classes } = props;
  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <React.Fragment>
      <div>
        <Header />

      {/* This is the profile information */}
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <Paper style={style.profilePaper}>
              <Avatar alt="Profile pic" src={Oops} className={classes.avatar} />
              <Typography variant="h4">Aquarist1</Typography>
              <Typography variant="h5">email@gmail.com</Typography>
              {/* <Typography variant="h5">paypal name</Typography> */}
            </Paper>
          </Grid>
      {/* End of profile information */}

      {/* This is the add coral form */}
          <Grid item xs={4}>
            <Paper style={style.coralPaper}>
              <Typography variant="h4">Post New Fragments!</Typography>
              <Typography variant="subtitle1">
                Fill out the form to offer new fragments for buyers to view:
              </Typography>
              <CoralForm />
              <FilePondInput />
              <label htmlFor="contained-button-file">
                <Button variant="contained" type="submit" component="span" className="">
                  Submit Entry
                </Button>
              </label>
            </Paper>
          </Grid>
        {/* End of add coral form */}
          <Grid item xs={4}>
            {/* <Paper style={style.recentPaper}> */}
              <Card style={style.recentCard}>
                <CardHeader
                  title="Your most recently uploaded coral"
                />
                <CardMedia style={style.recentPaper}
                  image="https://cdn.bulbagarden.net/upload/thumb/3/38/346Cradily.png/1200px-346Cradily.png"
                  title="Image title"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cradily
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h2">
                   Frags: 99
                  </Typography>
                </CardContent>
              </Card>
            {/* </Paper> */}
          </Grid>
        </Grid>
        {/* <Grid spacing={12}>
          <Grid item sm={6} md={4} lg={3}>

          < Paper style={style.Paper}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://fishybusinessaquatics.com/wp-content/uploads/2017/10/Galaxia-650x650.webp"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Branching Acropora
                  </Typography>
                  <Typography></Typography>
                  <Typography>Waduhek</Typography>
                </CardContent>
                <CardContent>
                  <Typography>frags: 3</Typography>
                </CardContent>
              </Card>

            </Paper>
          </Grid>      
        </Grid> */}
        <Footer />
      </div>
    </React.Fragment>
)};

Aquarist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Aquarist)
