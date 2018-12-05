import React from 'react'
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

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10, height: 350 }
};

export default props => (
  <Grid container spacing={8}>
    <Grid item xs={4}>
      <Paper style={style.Paper}>
        <img
          src="https://lh3.googleusercontent.com/bGHzUDV3HVhudXA7mNWQkDcpn4SwgIWlRjBxrhahcR0kgsjWPEIr90D7zvJj3G9wVLARHns=s85"
          alt="Profile pic"
        />
        <Typography variant="h6">Aquarist1</Typography>
        <Typography variant="p">email@gmail.com</Typography>
        <Typography variant="p">paypal name</Typography>
      </Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper style={style.Paper}>
        <Typography variant="h4">Your Fragments</Typography>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Aplysina Fistularis</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <img
              style={{ maxHeight: 100 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt4GJU40PbHF6-Y4Gqs655smkFEzG4lqMYNUMo6qPU0A-ZVCpGMg"
              alt="Coral example"
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Acropora</Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Porites</Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Galaxea</Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Fungia</Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper style={style.Paper}>
        <Typography variant="h4">Add Coral Fragments!</Typography>
        <Typography variant="subtitle1">
          Fill out the form to offer new fragments for conservationists to
          request.
        </Typography>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Add Coral</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Coral Genus"
              className=""
              margin="normal"
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span" className="">
                Upload Image
              </Button>
            </label>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
    </Grid>
  </Grid>
);