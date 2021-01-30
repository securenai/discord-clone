import {Avatar} from '@material-ui/core';
import React, {useState} from 'react';
import './Message.css';
import MessageOptions from './MessageOptions';
import db from '../../firebase';
import MessageEdit from './MessageEdit';
import MessageDelete from './MessageDelete';
import {useDispatch, useSelector} from 'react-redux';
import {
	selectCurrMsgEditing,
	setMessageInfo,
} from '../../features/appSlice';

const Message = ({timestamp, user, message, id, isEdited, channelId}) => {
	const dispatch = useDispatch();
	const currEditingMsg = useSelector(selectCurrMsgEditing);
	const [openEdit, setOpenEdit] = useState(false);
	const [openDelete, setOpenDelete] = useState(false);
	const [editInput, setEditInput] = useState('');
	const [showMsgOpt, setShowMsgOpt] = useState(false);

	const handleOpenMsgEdit = (msgId) => {
		dispatch(
			setMessageInfo({
				currMsgEditing: msgId,
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
				? {message: editInput.trim()}
				: {message: editInput.trim(), isEdited: true};
		db.collection('channels')
			.doc(channelId)
			.collection('messages')
			.doc(msgId)
			.set(sendData, {merge: true});
		setOpenEdit(false);
		setShowMsgOpt(false);
		handleCloseEditingMode();
	};

	const handleCloseEditingMode = () => {
		dispatch(
			setMessageInfo({
				currMsgEditing: null,
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
		<div
			className="message"
			onMouseEnter={() => setShowMsgOpt(true)}
			onMouseLeave={() => setShowMsgOpt(false)}>
			<Avatar src={user.photo} />
			<div className="message__info">
				<h4>
					<span>{user.displayName}</span>
					<span className="message__timestamp">
						{new Date(timestamp?.toDate()).toUTCString()}
					</span>
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
							<span className="is_message_edited">(edited)</span>
						) : null}
					</p>
				)}
			</div>

			<div>
				{currEditingMsg !== id && showMsgOpt === true ? (
					<MessageOptions
						msgId={id}
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
		</div>
	);
};

export default Message;
