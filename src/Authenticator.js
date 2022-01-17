import {firebase, StyledFirebaseAuth} from './firebase.js';
import React, { useState } from "react";


function Authenticator() {
    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: "/",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
    };
    const [displayName, setDisplayName] = useState("");
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setDisplayName(user.displayName);
        } else {
            setDisplayName("");
        }
    });
    return (
        <div>
            <h1>Sign In</h1>
            <h2>Display Name: {displayName}</h2>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    );
}

export default Authenticator;