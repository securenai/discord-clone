import React from 'react';
import './MessageOptions.css';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import EditIcon from '@material-ui/icons/Edit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const MessageOptions = ({msgId, openMsgEdit, openMsgDelete}) => {
	return (
		<div className="msg_btn_container">
			<div className="msg_btn_wrapper">
				<div className="msg_btn">
					<InsertEmoticonIcon />
				</div>
				<div className="msg_btn">
					<EditIcon
						onClick={() => {
							openMsgEdit(msgId);
						}}
					/>
				</div>
				<div className="msg_btn">
					<MoreHorizIcon />
				</div>
				<div className="msg_btn">
					<DeleteForeverIcon
						onClick={() => {
							openMsgDelete(msgId);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default MessageOptions;
