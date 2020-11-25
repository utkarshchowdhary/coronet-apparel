import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDJCP5RYDd1obUf11iOSt-2w0HvDLHWB-U',
  authDomain: 'coronet-db.firebaseapp.com',
  databaseURL: 'https://coronet-db.firebaseio.com',
  projectId: 'coronet-db',
  storageBucket: 'coronet-db.appspot.com',
  messagingSenderId: '606295833630',
  appId: '1:606295833630:web:4248d8e0d78bd49ced420f',
  measurementId: 'G-LS8QZZW8FX',
};

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

const createUserProfileDocument = async (user, additionalData) => {
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return batch.commit();
};

const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export {
  auth,
  firestore,
  googleProvider,
  getCurrentUser,
  signInWithGoogle,
  createUserProfileDocument,
  addCollectionAndDocuments,
  convertCollectionsSnapshotToMap,
  firebase as default,
};
