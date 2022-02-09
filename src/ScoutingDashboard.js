import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {firebase} from "./firebase.js";
import ActiveScout from "./matchscout/ActiveScout";
import {useState} from "react";
import DataViewer from "./dataviewer/DataViewer";

function ScoutingDashboard() {
  const pages = {
    scout: <ActiveScout />,
    dataviewer: <DataViewer />
  };
  const [currentPage, setCurrentPage] = useState("scout");

  return (
      <Box sx={{ flexGrow: 1, height: '100%', width: '100%'}}>
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
            <Button color="inherit" onClick={() => setCurrentPage("scout")}>Scout</Button>
            <Button color="inherit" onClick={() => setCurrentPage("dataviewer")}>Data</Button>
            <Button color="inherit" onClick={() => firebase.auth().signOut()}>Logout</Button>
          </Toolbar>
        </AppBar>
        {pages[currentPage]}
      </Box>
  );
}

export default ScoutingDashboard;