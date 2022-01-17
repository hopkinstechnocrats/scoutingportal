import {firebase, StyledFirebaseAuth} from './firebase.js';
import React from "react";
import {Box, Paper} from "@mui/material";


function Authenticator() {
    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: "/",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
    };
    return (
        <div>
            <Paper elevation={20} sx={{padding: 1, alignItems: 'center'}}>
                <Box sx={{color: 'text.primary', textAlign: 'center', fontSize: 30}}>Sign In</Box>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </Paper>
        </div>
    );
}

export default Authenticator;