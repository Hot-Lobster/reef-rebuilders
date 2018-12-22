import React from "react";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import {
  Grid,
  Paper,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  withStyles,
  Avatar,
} from "@material-ui/core";
import PropTypes from 'prop-types';
import CoralForm from '../Components/CoralForm';
import defaultpic from '../Images/defaultpic.png'

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 5, marginLeft: 10, marginRight: 10 },
  profilePaper: { padding: 20, marginTop: 10, marginBottom: 5, marginLeft: 10, marginRight: 5, height: 350 },
  coralForm: { padding: 20, marginTop: 10, marginBottom: 5, marginRight: 5, height: 350},
  avatar: {margin: 10, width: 100, height: 100}, 
  cardGrid: {
    padding: 10
  },
  grid: {
    marginTop: 20,
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
  imgPaper: { 
    padding: 20,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 5, 
    height: 350,
    backgroundImage: `url(https://images.pexels.com/photos/920160/pexels-photo-920160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

};


function Aquarist(props) {
  const { classes } = props;
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <React.Fragment>
      <div>
        <Header />

      {/* This is the profile information */}
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <Paper style={style.profilePaper}>
              <Avatar alt="Profile pic" src={defaultpic} className={classes.avatar} />
              <Typography variant="h6">Aquarist1</Typography>
              <Typography variant="p">email@gmail.com</Typography>
              <Typography variant="p">paypal name</Typography>
            </Paper>
          </Grid>
      {/* End of profile information */}

      {/* This is the add coral form */}
          <Grid item xs={4}>
            <Paper style={style.coralForm}>
              <Typography variant="h4">Post New Fragments!</Typography>
              <Typography variant="subtitle1">
                Fill out the form to offer new fragments for buyers to view:
              </Typography>
              <CoralForm />
              <label htmlFor="contained-button-file">
                <Button variant="contained" component="span" className="">
                  Upload Image
                </Button>
              </label>
            </Paper>
          </Grid>
        {/* End of add coral form */}
        <Grid item xs={4}>
            <Paper style={style.imgPaper}>
            
            </Paper>
          </Grid>
        </Grid>

        <Paper style={style.Paper}>
        <Grid container spacing={25} style={style.cardGrid}>
              {cards.map(card => (
                <Grid item style={style.grid} xs={12} key={card} sm={6} md={4} lg={3}>
                <Card style={style.card}>
                  <CardMedia style={style.cardMedia}
                    image="https://images.pexels.com/photos/920160/pexels-photo-920160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    title="Image title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Coral Type
                    </Typography>
                  </CardContent>
                </Card>
              
            
          </Grid>
          
          ))}
        </Grid>
        </Paper>
        <Footer />
      </div>
    </React.Fragment>
)};

Aquarist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Aquarist)
