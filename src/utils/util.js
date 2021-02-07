import firebase from 'firebase';

export const timeStampConversion = (timestamp) => {
	const isToday =
		new Date().toDateString() === timestamp.toDate().toDateString();
	const d2 = new Date();
	d2.setDate(d2.getDate() - 1);
	const isYest = d2.toDateString() === timestamp.toDate().toDateString();
	const d = new Date(timestamp?.toDate()).toLocaleString();
	const arr = d.split(' ');
	// console.log(arr);
	if (isToday) {
		return `今天 ${arr[1]}`;
	} else if (isYest) {
		return `昨天 ${arr[1]}`;
	}
	return arr[0];
};

export const rtdb_and_local_fs_presence = (authUser) => {
	// var uid = firebase.auth().currentUser.uid;
	var userStatusDatabaseRef = firebase.database().ref('/users/' + authUser.uid);

	var isOfflineForDatabase = {
		uid: authUser.uid,
		photo: authUser.photoURL,
		email: authUser.email,
		displayName: authUser.displayName,
		state: 'offline',
		last_changed: firebase.database.ServerValue.TIMESTAMP
	};

	var isOnlineForDatabase = {
		uid: authUser.uid,
		photo: authUser.photoURL,
		email: authUser.email,
		displayName: authUser.displayName,
		state: 'online',
		last_changed: firebase.database.ServerValue.TIMESTAMP
	};

	// [END_EXCLUDE]
	var userStatusFirestoreRef = firebase
		.firestore()
		.doc('/users/' + authUser.uid);

	// Firestore uses a different server timestamp value, so we'll
	// create two more constants for Firestore state.
	var isOfflineForFirestore = {
		uid: authUser.uid,
		photo: authUser.photoURL,
		email: authUser.email,
		displayName: authUser.displayName,
		state: 'offline',
		last_changed: firebase.firestore.FieldValue.serverTimestamp()
	};

	var isOnlineForFirestore = {
		uid: authUser.uid,
		photo: authUser.photoURL,
		email: authUser.email,
		displayName: authUser.displayName,
		state: 'online',
		last_changed: firebase.firestore.FieldValue.serverTimestamp()
	};

	firebase
		.database()
		.ref('.info/connected')
		.on('value', function (snapshot) {
			if (snapshot.val() === false) {
				// Instead of simply returning, we'll also set Firestore's state
				// to 'offline'. This ensures that our Firestore cache is aware
				// of the switch to 'offline.'
				userStatusFirestoreRef.set(isOfflineForFirestore);
				return;
			}

			userStatusDatabaseRef
				.onDisconnect()
				.set(isOfflineForDatabase)
				.then(function () {
					userStatusDatabaseRef.set(isOnlineForDatabase);

					// We'll also add Firestore set here for when we come online.
					userStatusFirestoreRef.set(isOnlineForFirestore);
				});
		});
};

export const fs_listen = (uid) => {
	var userStatusFirestoreRef = firebase.firestore().doc('/users/' + uid);
	if (userStatusFirestoreRef) {
		userStatusFirestoreRef.onSnapshot(function (doc) {
			if (doc.data() === null) {
				var isOnline = doc.data().state === 'online';
				console.log(isOnline);
			}
		});
	}
};
