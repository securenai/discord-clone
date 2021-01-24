import React from 'react';
import {useSelector} from 'react-redux';
import './MessageOptions.css';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import EditIcon from '@material-ui/icons/Edit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {selectChannelId} from '../../features/appSlice';
import db from '../../firebase';

const MessageOptions = ({msgId, openMsgEdit}) => {
	const channelId = useSelector(selectChannelId);
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
				<div
					className="msg_btn"
					onClick={(e) =>
						db
							.collection('channels')
							.doc(channelId)
							.collection('messages')
							.doc(msgId)
							.delete()
					}>
					<DeleteForeverIcon />
				</div>
			</div>
		</div>
	);
};

export default MessageOptions;
