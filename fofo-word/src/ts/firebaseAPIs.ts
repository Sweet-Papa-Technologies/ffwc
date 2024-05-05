import {auth, analytics, db} from './firebase';
import {getAuth, signInAnonymously, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import {getFirestore, collection, getDocs, updateDoc, doc, setDoc, getDoc} from 'firebase/firestore';
import { useSessionStore } from 'src/stores/session-store';
import { PlayerStats, userDBObject } from './models';



// Authentication
export async function getCurrentAuthUser() {
  await checkAuthState()
  const user = auth.currentUser;
  return user;
}

export async function signOutUser() {
  try {
    await signOut(auth);
    console.log("User Signed Out")
  } catch (error) {
    console.error(error);
  }
}

export async function checkAuthState() {
  const store = useSessionStore();
  return new Promise((resolve, reject) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is signed in")
      store.setUserData({
        uid: user?.uid || "N/A",
        email: user?.email || "N/A",
        displayName: user?.displayName || "Anon Player",
        authToken: user?.refreshToken || "N/A"
      })
      resolve(user)
    } else {
      console.log("User is signed out")
      resolve(null)
      store.setUserData(null)
    }
  });
})
}

export async function signInAnon() {
  const store = useSessionStore();
  try {

    const user = await signInAnonymously(auth);
    console.log("Updating User Data in Store")
    store.setUserData({
      uid: user.user?.uid || "N/A",
      email: user.user?.email || "N/A",
      displayName: user.user?.displayName || "Anon Player",
      authToken: user.user?.refreshToken || "N/A"
    })
    return user;
  } catch (error) {
    console.error(error);
  }
}

// Firestore
export async function saveUserDataToFirestore(userData:userDBObject) {
  try {
    const uid = (await getCurrentAuthUser())?.uid || "N/A";
    const docRef = doc(db, "users", uid);
    console.log("Saving User Data to Firestore"

    )
    console.log(userData)

    userData.playerStats.userData.authToken = "OMITTED";
    await setDoc(docRef, userData, { merge: true });
    console.log("User Data Saved to Firestore")
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export async function getUserDataFromFirestore() {
  const uid = (await getCurrentAuthUser())?.uid || "N/A";
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data: FOUND");
      return docSnap.data();

    } else {
      console.log("No such document!");
      return null
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
}
