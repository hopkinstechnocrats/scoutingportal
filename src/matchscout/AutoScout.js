import {Component} from "react";
import {Box, Grid} from "@mui/material";
import CargoController from "./CargoController";
import onMatchEvent from "./MatchEvent";
import {Timestamp} from "../firebase.js";

class AutoScout extends Component {
  onIntakeBall(location) {
    onMatchEvent({
      period: "auto",
      action: "intake",
      location: location,
      timestamp: Timestamp.now(),
      ...this.props.metadata
    });
  }

  onScoreBall(goal) {
    onMatchEvent({
      period: "auto",
      action: "score",
      goal: goal,
      timestamp: Timestamp.now(),
      ...this.props.metadata
    });
  }

  render() {
    return (
      <Box sx={{ flex: 1, margin: 2}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <CargoController initialNumCargo={1} onIntakeBall={(location) => this.onIntakeBall(location)} onScoreBall={(goal) => {this.onScoreBall(goal)}}/>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default AutoScout;