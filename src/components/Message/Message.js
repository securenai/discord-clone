import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { Msg, MsgInfo, MsgTimeStamp, MsgIsEdited } from './style';
import MessageOptions from './MessageOptions';
import db from '../../firebase';
import MessageEdit from './MessageEdit';
import MessageDelete from './MessageDelete';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrMsgEditing, setMessageInfo } from '../../features/appSlice';

const Message = ({ timestamp, user, message, id, isEdited, channelId }) => {
	const dispatch = useDispatch();
	const currEditingMsg = useSelector(selectCurrMsgEditing);
	const [openEdit, setOpenEdit] = useState(false);
	const [openDelete, setOpenDelete] = useState(false);
	const [editInput, setEditInput] = useState('');
	const [showMsgOpt, setShowMsgOpt] = useState(false);

	const handleOpenMsgEdit = (msgId) => {
		dispatch(
			setMessageInfo({
				currMsgEditing: msgId
			})
		);
		setOpenEdit(true);
		setEditInput(message.trim());
	};

	const handleOpenMsgDelete = (msgId) => {
		setShowMsgOpt(false);
		setOpenDelete(true);
	};

	const handleChangeMessage = (e) => {
		setEditInput(e.target.value);
	};

	const handleSaveEditedMessage = (msgId) => {
		const notEdited = message === editInput.trim();
		const sendData =
			notEdited === true
				? { message: editInput.trim() }
				: { message: editInput.trim(), isEdited: true };
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
				<h4>
					<span>{user.displayName}</span>
					<MsgTimeStamp>
						{new Date(timestamp?.toDate()).toUTCString()}
					</MsgTimeStamp>
				</h4>
				{currEditingMsg === id && openEdit === true ? (
					<MessageEdit
						editInput={editInput}
						editMessage={handleChangeMessage}
						closeEdit={handleCloseEditingMode}
						saveEdit={() => handleSaveEditedMessage(id)}
						messageId={id}
					/>
				) : (
					<p>
						{message}
						{isEdited === true ? (
							<MsgIsEdited>
								<span>(edited)</span>
							</MsgIsEdited>
						) : null}
					</p>
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
