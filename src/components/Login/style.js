import styled from 'styled-components';

export const LoginContainer = styled.div`
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
	& > div > img {
		object-fit: contain;
		height: 150px;
	}
`;
