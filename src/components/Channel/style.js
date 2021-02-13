import styled from 'styled-components';

/************** MessageDelete  **************/
export const ChnDelDialog = styled.div`
	background-color: #36393f;
	border-radius: 5px;
`;

export const ChnDelDialogTitle = styled.span`
	color: white;
	font-size: 15px;
	font-weight: 900;
`;

export const ChnDelDialogPromptQues = styled.span`
	color: #dcddde;
	font-size: 14px;
`;

export const ChnDelTarget = styled.div`
	border: 1px solid #2f3136;
	box-shadow: 0 0 0 1px rgb(32 34 37 / 60%), 0 2px 10px 0 rgb(0 0 0 / 20%);
	position: relative;
	border-radius: 3px;
	overflow: hidden;
	padding-top: 10px;
	padding-bottom: 10px;
	margin: 15px 0px;
`;

export const ChnDelTargetContainer = styled.div`
	padding: 10px;
	display: flex;
`;

export const ChnDelTargetContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0px 15px;
`;

export const ChnDelTargetContentName = styled.span`
	color: white;
	font-size: 15px;
`;

export const ChnDelTargetContentDate = styled.span`
	color: gray;
	margin-left: 10px;
	font-size: x-small;
`;

export const ChnDelTargetContentChn = styled.div`
	color: white;
	font-size: 15px;
`;

export const ChnDelBtnActions = styled.div`
	background-color: #2f3136;
`;

export const ChnDelBtn = styled.div`
	color: white;
`;
