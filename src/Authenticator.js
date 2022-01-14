import firebase from 'firebase';
import {StyledFirebaseAuth} from "react-firebaseui";

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: "/",
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
}

function Authenticator() {
    return (
        <div>
            <h1>Sign In</h1>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    );
}

export default Authenticator;