import React from 'react';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import db from '../../firebase';
import {
	MsgDelDialog,
	MsgDelDialogTitle,
	MsgDelDialogPromptQues,
	MsgDelTarget,
	MsgDelTargetContainer,
	MsgDelTargetContent,
	MsgDelTargetContentName,
	MsgDelTargetContentDate,
	MsgDelTargetContentMsg,
	MsgDelBtnActions,
	MsgDelBtn
} from './style';

const MessageDelete = ({
	msgId,
	closeDelete,
	channelId,
	user,
	timestamp,
	message
}) => {
	const handleMessageDelete = () => {
		db.collection('channels')
			.doc(channelId)
			.collection('messages')
			.doc(msgId)
			.delete();
		closeDelete();
	};
	return (
		<Dialog
			open={true}
			onClose={closeDelete}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description">
			<MsgDelDialog>
				<DialogTitle>
					<MsgDelDialogTitle>{'DELETE MESSAGE'}</MsgDelDialogTitle>
				</DialogTitle>

				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						<MsgDelDialogPromptQues>
							Are you sure you want to delete this message?
						</MsgDelDialogPromptQues>
						<MsgDelTarget>
							<MsgDelTargetContainer>
								<Avatar src={user.photo} />
								<MsgDelTargetContent>
									<div>
										<MsgDelTargetContentName>
											{user.displayName}
										</MsgDelTargetContentName>
										<MsgDelTargetContentDate>
											{new Date(timestamp?.toDate()).toUTCString()}
										</MsgDelTargetContentDate>
									</div>
									<MsgDelTargetContentMsg>{message}</MsgDelTargetContentMsg>
								</MsgDelTargetContent>
							</MsgDelTargetContainer>
						</MsgDelTarget>
					</DialogContentText>
				</DialogContent>

				<MsgDelBtnActions>
					<DialogActions>
						<Button onClick={closeDelete} color="primary">
							<MsgDelBtn>Cancel</MsgDelBtn>
						</Button>
						<Button onClick={handleMessageDelete} color="primary" autoFocus>
							<MsgDelBtn>Delete</MsgDelBtn>
						</Button>
					</DialogActions>
				</MsgDelBtnActions>
			</MsgDelDialog>
		</Dialog>
	);
};

export default MessageDelete;
