import { Avatar } from '@material-ui/core';
import React, { useState, useRef } from 'react';
import {
	Msg,
	MsgInfo,
	MsgTimeStamp,
	MsgIsEdited,
	MsgDisplayName,
	MsgContent
} from './style';
import MessageOptions from './MessageOptions';
import db from '../../firebase';
import MessageEdit from './MessageEdit';
import MessageDelete from './MessageDelete';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCurrMsgEditing,
	setMessageInfo
} from '../../features/messageSlice';
import { timeStampConversion } from '../../utils/util';
import { decode } from 'html-entities';

const Message = ({ timestamp, user, message, id, isEdited, channelId }) => {
	const dispatch = useDispatch();
	const currEditingMsg = useSelector(selectCurrMsgEditing);
	const [openEdit, setOpenEdit] = useState(false);
	const [openDelete, setOpenDelete] = useState(false);
	const text = useRef('');
	// const [editInput, setEditInput] = useState('');
	const [showMsgOpt, setShowMsgOpt] = useState(false);
	// const d = new Date(timestamp.toDate());
	// debugger;
	const handleOpenMsgEdit = (msgId) => {
		dispatch(
			setMessageInfo({
				currMsgEditing: msgId
			})
		);
		setOpenEdit(true);
		text.current = message.trim();
	};

	const handleOpenMsgDelete = (msgId) => {
		setShowMsgOpt(false);
		setOpenDelete(true);
	};

	const handleChangeMessage = (e) => {
		text.current = decode(e.target.value);
	};

	const handleSaveEditedMessage = (msgId) => {
		if (text.current.trim() === '') return;
		const notEdited = message === text.current.trim();
		const sendData =
			notEdited === true
				? { message: text.current.trim() }
				: { message: text.current.trim(), isEdited: true };
		db.collection('channels')
			.doc(channelId)
			.collection('messages')
			.doc(msgId)
			.set(sendData, { merge: true });
		setOpenEdit(false);
		setShowMsgOpt(false);
		handleCloseEditingMode();
	};

	const handleCloseEditingMode = () => {
		dispatch(
			setMessageInfo({
				currMsgEditing: null
			})
		);
		setOpenEdit(false);
		setShowMsgOpt(false);
	};

	const handleCloseDeletePopup = (e) => {
		setOpenDelete(false);
		setShowMsgOpt(false);
	};

	return (
		<Msg
			onMouseEnter={() => setShowMsgOpt(true)}
			onMouseLeave={() => setShowMsgOpt(false)}>
			<Avatar src={user.photo} />

			<MsgInfo>
				<div>
					<MsgDisplayName>{user.displayName}</MsgDisplayName>
					<MsgTimeStamp>
						{/* {new Date(timestamp?.toDate()).toLocaleString()} */}
						{timestamp !== null ? timeStampConversion(timestamp) : ''}
					</MsgTimeStamp>
				</div>
				{currEditingMsg === id && openEdit === true ? (
					<MessageEdit
						editInput={text.current}
						editMessage={handleChangeMessage}
						closeEdit={handleCloseEditingMode}
						saveEdit={() => handleSaveEditedMessage(id)}
						messageId={id}
					/>
				) : (
					<div>
						<MsgContent>{message}</MsgContent>
						{isEdited === true ? (
							<MsgIsEdited>
								<span>(edited)</span>
							</MsgIsEdited>
						) : null}
					</div>
				)}
			</MsgInfo>

			<div>
				{currEditingMsg !== id && showMsgOpt === true ? (
					<MessageOptions
						msgId={id}
						user={user}
						openMsgEdit={handleOpenMsgEdit}
						openMsgDelete={handleOpenMsgDelete}
					/>
				) : null}
			</div>

			<div>
				{openDelete === true ? (
					<MessageDelete
						closeDelete={handleCloseDeletePopup}
						channelId={channelId}
						user={user}
						msgId={id}
						timestamp={timestamp}
						message={message}
					/>
				) : null}
			</div>
		</Msg>
	);
};

export default Message;
