import {Component} from "react";
import {Box, Grid} from "@mui/material";
import CargoController from "./CargoController";

class AutoScout extends Component {
  render() {
    return (
      <Box sx={{ flex: 1, margin: 2}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <CargoController initialNumCargo={1} onIntakeBall={() => {}} onScoreBall={() => {}}/>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default AutoScout;