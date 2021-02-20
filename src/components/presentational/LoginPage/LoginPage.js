import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

const LoginContainer = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	width: 100%;
	& > button {
		width: 300px;
		background-color: #738adb;
		color: #eff2f5;
		font-weight: 800;
	}
	& > button:hover {
		background-color: black;
		color: #738adb;
	}
	& > img {
		object-fit: contain;
		height: 150px;
	}
`;

const LoginPage = ({ signIn }) => {
	return (
		<LoginContainer>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/discord-clone-e8de0.appspot.com/o/app_images%2FDiscord-login-logo.png?alt=media&token=4ad1689e-98d1-47f2-9508-42e94742cffa"
				alt=""
			/>
			<Button onClick={signIn}>Sign in</Button>
		</LoginContainer>
	);
};

export default LoginPage;
