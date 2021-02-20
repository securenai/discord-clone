import React from 'react';
import { auth, provider } from '../../firebase';
import LoginPage from '../../components/presentational/LoginPage/LoginPage';

const LoginContainer = () => {
	const handleSignIn = () => {
		auth.signInWithPopup(provider).catch((error) => alert(error.message));
	};

	return <LoginPage signIn={handleSignIn} />;
};

export default LoginContainer;
