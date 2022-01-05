import React, { useState } from 'react';
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');



function DatabaseViewer() {
    initializeApp({
        credential: applicationDefault()
    });
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