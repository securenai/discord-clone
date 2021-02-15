import styled from 'styled-components';

export const MemberContainer = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	width: 300px;
`;

export const MemberCard = styled.div`
	margin-left: 5px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 150px !important;
	height: 50px;
	flex-wrap: wrap;
	color: white;
`;

export const ProfilePic = styled.div`
	width: 40px;
`;

export const MemberName = styled.div`
	margin-left: 10px;
`;

export const MemberTitle = styled.div`
	height: 30px;
	font-size: 12px;
	color: gray;
	font-weight: 500;
`;
