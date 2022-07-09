import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

firebase.initializeApp(config)

const auth = firebase.auth()

const firestore = firebase.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()

const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

const createUserProfileDocument = async (user, additionalData) => {
  const userRef = firestore.doc(`users/${user.uid}`)
  const snapShot = await userRef.get()

  if (snapShot.exists) return userRef

  const { displayName, email } = user
  const createdAt = new Date()

  await userRef.set({
    displayName,
    email,
    createdAt,
    ...additionalData
  })
}

const addCollectionAndDocuments = (collectionKey, data) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()

  data.forEach((item) => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, item)
  })

  return batch.commit()
}

const convertCollectionsSnapshotToMap = (collections) => {
  return collections.docs
    .map((doc) => {
      const { title, items } = doc.data()

      return {
        id: doc.id,
        routeName: encodeURI(title.toLowerCase()),
        title,
        items
      }
    })
    .reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection
      return accumulator
    }, {})
}

export {
  auth,
  firestore,
  googleProvider,
  getCurrentUser,
  signInWithGoogle,
  createUserProfileDocument,
  addCollectionAndDocuments,
  convertCollectionsSnapshotToMap,
  firebase as default
}
