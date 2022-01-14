import {FirebaseAuth} from "react-firebaseui";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function Authenticator() {
    const uiConfig = {
        signInFlow: 'redirect',
        signInSuccessUrl: "/",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
    };
    return (
        <div>
            <h1>Sign In</h1>
            <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    );
}

export default Authenticator;