import {Box, Grid} from "@mui/material";
import React, {useState} from  'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CargoController(props) {
  const [currentNumCargo, setNumCargo] = useState(props.initialNumCargo);

  const intakeBall = (location) => {
    props.onIntakeBall(location);
    setNumCargo(currentNumCargo + 1);
  };

  const scoreBall = (goal) => {
    props.onScoreBall(goal);
    setNumCargo(currentNumCargo - 1);
  };

  return (
    <Box sx={{ flex: 1, margin: 2}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography sx={{textAlign: "center"}}>Current Cargo: {currentNumCargo}</Typography>
        </Grid>
        <Grid container xs={6}>
          <Grid item xs={12}>
            <Button onClick={() => intakeBall("ground")}>Intake From Ground</Button>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={() => intakeBall("terminal")}>Intake From Terminal</Button>
          </Grid>
        </Grid>
        <Grid container xs={6}>
          <Grid item xs={12}>
            <Button onClick={() => scoreBall("lowhub")}>Score Low Hub</Button>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={() => scoreBall("highhub")}>Score High Hub</Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CargoController;