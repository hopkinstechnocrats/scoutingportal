import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {firebase} from "./firebase.js";
import {Card} from "@mui/material";

function ScoutingDashboard(props) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Scouting Dashboard
            </Typography>
            <Button color="inherit" onClick={() => firebase.auth().signOut()}>Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Card>
        <Box>Hello, {props.user.displayName}</Box>
      </Card>

    </div>
  );
}

export default ScoutingDashboard