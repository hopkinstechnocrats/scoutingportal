import TeamNumberEntry from "../TeamNumberEntry";
import Box from "@mui/material/Box";
import * as React from "react";
import {Component} from "react";
import MatchScout from "./MatchScout";

class ActiveScout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: null,
    }
  }

  render() {
    let currentPage;
    if (this.state.team) {
      console.log(this.state.team);
      currentPage = <MatchScout teamNumber={this.state.team}/>;
    } else {
      currentPage = <TeamNumberEntry startScouting={(team) => this.setState({team: team})}/>;
    }

    return (
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center', margin: 1, spacing: 1}}>
        {currentPage}
      </Box>
    );
  }
}

export default ActiveScout;