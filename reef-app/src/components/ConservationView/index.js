import React from "react";

import {
    Grid,
    Paper,
    Typography,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    List,
    ListItem,
    ListItemText,
    Divider
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const style = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10, height: 350 }
};

export default props => (
    <Grid container spacing={8}>
      <Grid item xs={6}>
        <Paper style={style.Paper}>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Coral Family 1</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List component="nav">
                <ListItem button>
                  <ListItemText primary="Genus 1" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                  <ListItemText primary="Genus 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Genus 3" />
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemText primary="Genus 4" />
                </ListItem>
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Coral Family 2</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Coral Family 3</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Coral Family 4</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Coral Family 5</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Coral Family 6</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper style={style.Paper}>
          <Typography variant="h4">Welcome to Reef Rebuilders!</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Select a Coral Family and Genus to view available samples and get in
            touch with the aquarists offer them.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
);
  