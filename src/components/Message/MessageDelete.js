import React from 'react';
import {Avatar} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import db from '../../firebase';
import './MessageDelete.css';

const MessageDelete = ({
	msgId,
	closeDelete,
	channelId,
	user,
	timestamp,
	message,
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
		<div>
			<Dialog
				open={true}
				onClose={closeDelete}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description">
				<div className="message__delete_dialog">
					<DialogTitle id="alert-dialog-title">
						<span className="message__delete_dialog_title">
							{'DELETE MESSAGE'}
						</span>
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							<div className="message__delete_dialog_content">
								Are you sure you want to delete this message?
							</div>
							<div className="message__delete_detail">
								<div className="message__delete_detail_container">
									<Avatar src={user.photo} />
									<div className="message__delete_detail_content">
										<div>
											<span className="message__delete_detail_content_name">
												{user.displayName}
											</span>
											<span className="message__delete_detail_content_date">
												{new Date(timestamp?.toDate()).toUTCString()}
											</span>
										</div>
										<div className="message__delete_detail_content_message">
											{message}
										</div>
									</div>
								</div>
							</div>
						</DialogContentText>
					</DialogContent>
					<div className="message__delete_actions">
						<DialogActions>
							<Button onClick={closeDelete} color="primary">
								<span className="message__delete_btn_color">Cancel</span>
							</Button>
							<Button
								onClick={handleMessageDelete}
								color="primary"
								autoFocus>
								<span className="message__delete_btn_color">Delete</span>
							</Button>
						</DialogActions>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default MessageDelete;
