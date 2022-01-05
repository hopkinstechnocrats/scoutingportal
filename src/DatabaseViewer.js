import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCcq_zzJ4Y0jeUIDCqzmT4U0-1kBofkaps",
    authDomain: "frcscouter-2239.firebaseapp.com",
    projectId: "frcscouter-2239",
    storageBucket: "frcscouter-2239.appspot.com",
    messagingSenderId: "737522006626",
    appId: "1:737522006626:web:a0a0923ab7f33a70d8ef3b",
    measurementId: "G-9VVLR48SCP"
};

function DatabaseViewer() {
    initializeApp(firebaseConfig);
    const db = getFirestore();
    const [values, setValues] = useState([]);
    const updateState = async () => {
        const snapshot = await db.collection('values').get();
        setValues(snapshot);
    };
    return (
        <div>
            <button onClick={() => updateState()}>
                Update Database Values
            </button>
            <ul>
                {values.map(value => (
                    <li>{value.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default DatabaseViewer;