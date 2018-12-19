import React from "react";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import {
  Grid,
  Paper,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  TextField,
  Button
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CoralForm from '../Components/CoralForm';

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 5, marginLeft: 10, marginRight: 10, height: 350 },
  profilePaper: { padding: 20, marginTop: 10, marginBottom: 5, marginLeft: 10, marginRight: 5, height: 350 },
  coralForm: { padding: 20, marginTop: 10, marginBottom: 5, marginRight: 5, height: 350}, 
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


export default props => (
  <div>
    <Header />

  {/* This is the profile information */}
    <Grid container spacing={8}>
      <Grid item xs={4}>
        <Paper style={style.profilePaper}>
          <img
            src="https://lh3.googleusercontent.com/bGHzUDV3HVhudXA7mNWQkDcpn4SwgIWlRjBxrhahcR0kgsjWPEIr90D7zvJj3G9wVLARHns=s85"
            alt="Profile pic"
          />
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
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Paper style={style.Paper}>
          <Typography variant="h1">
            
          </Typography>
        </Paper>
      </Grid>
    </Grid>


    <Footer />
  </div>
);
