import {auth, StyledFirebaseAuth, googleProvider} from './firebase.js';


function Authenticator() {
    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: "/",
        signInOptions: [
            googleProvider.PROVIDER_ID
        ]
    };
    return (
        <div>
            <h1>Sign In</h1>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
    );
}

export default Authenticator;