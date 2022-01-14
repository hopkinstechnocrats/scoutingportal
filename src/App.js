import logo from './logo.svg';
import './App.css';
import './DatabaseViewer';
import DatabaseViewer from "./DatabaseViewer";
import Authenticator from "./Authenticator";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCcq_zzJ4Y0jeUIDCqzmT4U0-1kBofkaps",
  authDomain: "frcscouter-2239.firebaseapp.com",
  projectId: "frcscouter-2239",
  storageBucket: "frcscouter-2239.appspot.com",
  messagingSenderId: "737522006626",
  appId: "1:737522006626:web:a0a0923ab7f33a70d8ef3b",
  measurementId: "G-9VVLR48SCP"
};

function App() {
  initializeApp(firebaseConfig);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Authenticator />
        <DatabaseViewer />
      </header>
    </div>
  );
}

export default App;
