import {Component} from "react";
import ScoutingDashboard from "./ScoutingDashboard";
import Authenticator from "./Authenticator";
import {firebase} from "./firebase.js";
import Box from "@mui/material/Box";

class ScoutingPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {user: firebase.auth().currentUser};
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user
        })
      } else {
        this.setState({
          user: null
        })
      }
    });
  }

  render() {
    if (this.state.user) {
      return <ScoutingDashboard user={this.state.user}/>
    } else {
      return (
        <Box sx={{
          display: 'flex',
          height: '100vh',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'primary.dark',
          overflow: 'hidden',
          boxShadow: 1,
          fontWeight: 'bold',
        }}>
          <Authenticator />
        </Box>
      )
    }
  }
}

export default ScoutingPortal;