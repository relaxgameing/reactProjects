// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// const analytics = getAnalytics(app);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfkxBaL7av7XD7DJiM5tsw55Q3sSwhKd8",
  authDomain: "crwn-clothing-1fa57.firebaseapp.com",
  projectId: "crwn-clothing-1fa57",
  storageBucket: "crwn-clothing-1fa57.appspot.com",
  messagingSenderId: "534114311323",
  appId: "1:534114311323:web:54b119f28bd75de4bbfa3e",
  measurementId: "G-C5QC48BJHW",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);

export const signinUserWithGooglePopup = () => signInWithPopup(auth, provider);
export const signinUserWithEmailAndPasswords = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};

const db = getFirestore();

export const storeUsers = async (userInfo) => {
  if (!userInfo) return;

  const userRef = doc(db, "users", userInfo.uid);

  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    const dateOfCreation = new Date();

    try {
      setDoc(userRef, {
        displayName: userInfo.displayName,
        email: userInfo.email,
        createdAt: dateOfCreation,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};

/*
doc() function "document" ka reference leke deta hai or 
getDoc() mai humlog ye reference dalke uss referenced doc ka value late hai 
or setDoc() mai humlog jo reference dalte hai uss reference mai data put ho jata hai 
*/

// export const addCollectionsAndDocuments = async (
//   collectionKey,
//   objectToAdd
// ) => {
//   const collectionRef = collection(db, collectionKey);

//   const batch = writeBatch(db);

//   objectToAdd.forEach((object) => {
//     const docRef = doc(collectionRef, object.title.toLowerCase());
//     batch.set(docRef, object);
//   });

//   await batch.commit();
//   console.log("done");
// };

//ye help kiya tha shop data fire store mai add karne ke liye

export const getCategoriesAndDocument = async () => {
  const collectionRef = collection(db, "category");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const signUpByEmailAndPassword = async (
  email,
  password,
  displayName
) => {
  if (!auth || !email || !password) return;

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    response.user.displayName = displayName;
    storeUsers(response.user);
  } catch (error) {
    switch (error.code) {
      case "(auth/email-already-in-use)":
        alert("email is already in use");
        break;
      default:
        alert("error", error);
    }
  }
};

export const signinUser = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert(error.code);
  }
};

export const signOutUser = () => {
  signOut(auth);
};

export const userOnAuthChangeListner = (callback) => {
  onAuthStateChanged(auth, callback);
};
