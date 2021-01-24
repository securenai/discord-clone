import React, {useEffect} from 'react';
import './App.css';
import Chat from '../Chat/Chat';
import Sidebar from '../Sidebar/Sidebar';
import {selectUser} from '../../features/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import Login from '../Login/Login';
import {auth} from '../../firebase';
import {login, logout} from '../../features/userSlice';

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
						displayName: authUser.displayName,
					})
				);
			} else {
				console.log('huhuhuhuhu');
				dispatch(logout());
			}
		});
	}, [dispatch]);

	return (
		<div className="app">
			{user ? (
				<>
					<Sidebar />
					<Chat />
				</>
			) : (
				<Login />
			)}
		</div>
	);
}

export default App;
