import React, { useEffect } from 'react';
import './App.css';
import { selectUser } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Login/Login';
import { auth } from '../../firebase';
import { login, logout } from '../../features/userSlice';
import Channel from '../Channel/Channel';
import { rtdb_and_local_fs_presence, fs_listen } from '../../utils/util';

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// the user is logged in
				dispatch(
					login({
						uid: authUser.uid,
						photo: authUser.photoURL,
						email: authUser.email,
						displayName: authUser.displayName
					})
				);
				rtdb_and_local_fs_presence(authUser);
				fs_listen(authUser.uid);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);

	return <div className="app">{user ? <Channel /> : <Login />}</div>;
}

export default App;
