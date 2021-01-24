import {Avatar} from '@material-ui/core';
import React, {useState, useRef, useEffect} from 'react';
import './Message.css';
import MessageOptions from './MessageOptions';
import {selectCurrMsgEditing} from '../../features/appSlice';
import {useSelector, useDispatch} from 'react-redux';
import {setMessageInfo, selectChannelId} from '../../features/appSlice';
import db from '../../firebase';

const Message = ({timestamp, user, message, id, isEdited}) => {
	const dispatch = useDispatch();
	const currEditingMsg = useSelector(selectCurrMsgEditing);
	const channelId = useSelector(selectChannelId);
	const [openEdit, setOpenEdit] = useState(false);
	const [editInput, setEditInput] = useState('');
	const [showMsgOpt, setShowMsgOpt] = useState(false);
	// const editMsgInputRef = useRef();

	const handleOpenMsgEdit = (msgId) => {
		dispatch(
			setMessageInfo({
				currMsgEditing: msgId,
			})
		);
		setOpenEdit(true);
		setEditInput(message.trim());
		// editMsgInputRef.current.focus();
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

	const handleCloseEditingMode = (e) => {
		dispatch(
			setMessageInfo({
				currMsgEditing: null,
			})
		);
		setOpenEdit(false);
		setShowMsgOpt(false);
	};

	// useEffect(() => {
	// 	console.log(editMsgInputRef);
	// }, [editInput]);

	return (
		<div
			className="message"
			onMouseEnter={() => setShowMsgOpt(true)}
			onMouseLeave={() => setShowMsgOpt(false)}>
			<Avatar src={user.photo} />
			{/* <div>
				<input ref={editMsgInputRef} className="test" />
			</div> */}
			<div className="message__info">
				<h4>
					<span>{user.displayName}</span>
					<span className="message__timestamp">
						{new Date(timestamp?.toDate()).toUTCString()}
					</span>
				</h4>
				{openEdit === true && currEditingMsg === id ? (
					<div>
						<div className="message__edit__input__container">
							<form>
								<input
									autoFocus
									// ref={editMsgInputRef}
									className="message__edit__input"
									value={editInput}
									onChange={(e) => handleChangeMessage(e)}
									onKeyDown={(e) => {
										if (e.keyCode === 27) {
											handleCloseEditingMode(e);
										}
									}}
								/>
								<button
									className="message__edit__inputButton"
									type="submit"
									onClick={() => {
										handleSaveEditedMessage(id);
									}}></button>
							</form>
						</div>
						<div className="message__edit__desc">
							escape to{' '}
							<span
								className="message__edit__canc"
								onClick={(e) => {
									handleCloseEditingMode(e);
								}}>
								cancel
							</span>
							, enter to{' '}
							<span
								className="message__edit__save"
								onClick={() => {
									handleSaveEditedMessage(id);
								}}>
								save
							</span>
						</div>
					</div>
				) : (
					<p>
						{message}
						{isEdited === true ? (
							<span className="is_message_edited">(edited)</span>
						) : null}
					</p>
				)}
			</div>
			{showMsgOpt === true && currEditingMsg !== id ? (
				<MessageOptions msgId={id} openMsgEdit={handleOpenMsgEdit} />
			) : null}
		</div>
	);
};

export default Message;
