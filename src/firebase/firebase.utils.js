import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyB7lxZCT0hOD_FJe_RufBxT7jPukGSiU9o",
  authDomain: "crwn-db-b920d.firebaseapp.com",
  databaseURL: "https://crwn-db-b920d.firebaseio.com",
  projectId: "crwn-db-b920d",
  storageBucket: "crwn-db-b920d.appspot.com",
  messagingSenderId: "770935975873",
  appId: "1:770935975873:web:45cec32af42768a0c10940"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firetore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase