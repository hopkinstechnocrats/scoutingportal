import Typography from "@mui/material/Typography";
import {Box, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import {useState} from "react";

function TeamNumberEntry(props) {
  let [teamNumber, changeTeamNumber] = useState(null);
  console.log(teamNumber);
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'center'}}>
      <Typography variant="h10" component="div" sx={{ flexGrow: 1, margin: 1}}>
        Enter Team Number to Begin Scouting:
      </Typography>
      <TextField id="outlined-basic" label="Team Number" variant="outlined" sx={{margin: 1}} onChange={(event) => changeTeamNumber(event.target.value)}/>
      <Button onClick={() => props.startScouting(teamNumber)} variant="contained" sx={{margin: 1}}>Scout</Button>
    </Box>
  );
}

export default TeamNumberEntry;