import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDj8xLHRDF5o6hTDZZeNJulBP_SW6IP9ds',
	authDomain: 'discord-clone-e8de0.firebaseapp.com',
	projectId: 'discord-clone-e8de0',
	storageBucket: 'discord-clone-e8de0.appspot.com',
	messagingSenderId: '1078599046174',
	appId: '1:1078599046174:web:8998d797ebfd4ac6a4ca0f',
	measurementId: 'G-6EJE9KTGRH',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
