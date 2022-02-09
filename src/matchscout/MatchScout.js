import {Component} from "react";
import {Step, StepLabel, Stepper} from '@mui/material';
import Button from "@mui/material/Button";
import TeleopScout from "./TeleopScout";
import AutoScout from "./AutoScout";
import ClimbScout from "./ClimbScout";
import Typography from "@mui/material/Typography";


class MatchScout extends Component {
  constructor(props){
    super(props);
    this.state = {matchPeriod: 0}; //0: auto, 1: teleop, 2: climb
    this.backButton = <Button>Back</Button>;
    this.nextButton = <Button onClick={() => this.nextPeriod()}>Next</Button>;
    const metadata = {
      team: this.props.teamNumber,
      match: this.props.matchNumber
    }
    this.matchPeriods = [
      <AutoScout metadata={metadata}/>,
      <TeleopScout metadata={metadata}/>,
      <ClimbScout metadata={metadata}/>
    ]
  }

  nextPeriod() {
    this.setState((state) => ({matchPeriod: state.matchPeriod+1}))

  }

  render() {
    return (<div>
      <Typography sx={{textAlign: "center"}}>
        Scouting Team {this.props.teamNumber}, Match {this.props.matchNumber}
      </Typography>
      <Stepper steps="3" activeStep={this.state.matchPeriod} variant="text" backButton={this.backButton} nextButton={this.nextButton}>
        <Step key="Auto">
          <StepLabel>Auto</StepLabel>
        </Step>
        <Step key="Teleop">
          <StepLabel>Teleop</StepLabel>
        </Step>
        <Step key="Climb">
          <StepLabel>Climb</StepLabel>
        </Step>
      </Stepper>
      {this.matchPeriods[this.state.matchPeriod]}
      {this.backButton}
      {this.nextButton}
    </div>);
  }
}

export default MatchScout;