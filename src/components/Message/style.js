import styled from 'styled-components';

/************** Message  **************/
export const Msg = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;
	color: white;
	&:hover {
		background-color: #32353b;
	}
`;

export const MsgInfo = styled.div`
	margin-left: 20px;
`;

export const MsgTimeStamp = styled.span`
	color: gray;
	margin-left: 10px;
	font-size: x-small;
}
`;

export const MsgIsEdited = styled.span`
	font-size: x-small;
	color: gray;
	margin-left: 1%;
`;
/************** MessageDelete  **************/
export const MsgDelDialog = styled.div`
	background-color: #36393f;
	border-radius: 5px;
`;

export const MsgDelDialogTitle = styled.span`
	color: white;
	font-size: 15px;
	font-weight: 900;
`;

export const MsgDelDialogPromptQues = styled.span`
	color: #dcddde;
	font-size: 14px;
`;

export const MsgDelTarget = styled.div`
	border: 1px solid #2f3136;
	box-shadow: 0 0 0 1px rgb(32 34 37 / 60%), 0 2px 10px 0 rgb(0 0 0 / 20%);
	position: relative;
	border-radius: 3px;
	overflow: hidden;
	padding-top: 10px;
	padding-bottom: 10px;
	margin: 15px 0px;
`;

export const MsgDelTargetContainer = styled.div`
	padding: 10px;
	display: flex;
`;

export const MsgDelTargetContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0px 15px;
`;

export const MsgDelTargetContentName = styled.span`
	color: white;
	font-size: 15px;
`;

export const MsgDelTargetContentDate = styled.span`
	color: gray;
	margin-left: 10px;
	font-size: x-small;
`;

export const MsgDelTargetContentMsg = styled.div`
	color: white;
	font-size: 15px;
`;

export const MsgDelBtnActions = styled.div`
	background-color: #2f3136;
`;

export const MsgDelBtn = styled.div`
	color: white;
`;

/************** MessageEdit  **************/
export const MsgEditContainer = styled.div`
	border-radius: 8px;
	background-color: #40444b;
	margin: 10px 5px 0px 0px;
`;

// export const MsgEditInput = styled.div`
// 	padding: 10px;
// 	background: transparent;
// 	width: 600px;
// 	border: none;
// 	outline-width: 0;
// 	color: white;
// 	font-size: 15px;
// `;

export const MsgEditDescription = styled.div`
	color: gray;
	margin-top: 4px;
	font-size: 3px;
`;

export const MsgEditSubmitBtn = styled.button`
	display: none;
`;

export const MsgEditCancel = styled.span`
	color: #7289da;
	cursor: pointer;
`;

export const MsgEditSave = styled.span`
	color: #7289da;
	cursor: pointer;
`;

/************** MessageOptions  **************/
export const MsgOptionsContainer = styled.div`
	position: relative;
	right: 0;
	z-index: 1;
	top: -25px;
	padding: 0 14px 0 32px;
`;

export const BtnsWrapper = styled.div`
	color: rgb(216, 213, 213);
	background-color: #36393f;
	border: #3c3f36 1px solid;
	display: grid;
	grid-auto-flow: column;
	box-sizing: border-box;
	height: 32px;
	border-radius: 4px;
	align-items: center;
	justify-content: flex-start;
	padding: 2px 5px;
`;

export const MsgBtns = styled.div`
	cursor: pointer;
	padding: 0px 5px;
	&:hover {
		background-color: #424447;
		color: rgb(248, 244, 244);
	}
`;
