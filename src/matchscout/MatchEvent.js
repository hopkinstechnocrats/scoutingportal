import {getFirestore, addDoc, collection} from "../firebase.js";

async function onMatchEvent(event) {
  try {
    const docRef = await addDoc(collection(getFirestore(), "events"), event);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default onMatchEvent;