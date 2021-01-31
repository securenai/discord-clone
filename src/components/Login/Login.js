import React from 'react';
import { LoginContainer } from './style';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';

const Login = () => {
	const signIn = () => {
		// do login stuff...
		auth.signInWithPopup(provider).catch((error) => alert(error.message));
	};

	return (
		<LoginContainer>
			<div>
				<img
					src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png"
					alt=""
				/>
			</div>
			<Button onClick={signIn}>Sign in</Button>
		</LoginContainer>
	);
};

export default Login;
