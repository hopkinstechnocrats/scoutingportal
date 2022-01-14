import React, { useState } from 'react';
import { getFirestore, collection, getDocs } from "./firebase.js";



function DatabaseViewer() {
    const db = getFirestore();
    const [values, setValues] = useState([]);
    const updateState = async () => {
        const snapshot = await getDocs(collection(db, 'values'));
        const returnArray = [];
        snapshot.forEach((doc) => {
            returnArray.push(doc.data());
            console.log(doc.id, " => ", doc.data());
        });
        setValues(returnArray);
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