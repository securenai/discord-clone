import React, { useRef, useState, useEffect } from 'react';
import ContentEditable from 'react-contenteditable';
import './style.css';
import {
	MsgEditContainer,
	MsgEditDescription,
	MsgEditCancel,
	MsgEditSave
} from './style';

const MessageEdit = ({
	editInput,
	editMessage,
	closeEdit,
	saveEdit,
	messageId
}) => {
	const formRef = useRef(null);
	const [editText, setEditText] = useState('');

	useEffect(() => {
		setEditText(editInput);
	}, [editInput]);

	useEffect(() => {
		formRef.current.children[0].focus();
	}, [formRef]);

	const handleKeyPress = (e) => {
		if (e.key === 'Escape') {
			closeEdit(e);
		}
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			saveEdit(messageId);
		}
	};

	return (
		<div>
			<MsgEditContainer>
				<form ref={formRef}>
					<ContentEditable
						html={editText}
						onChange={(e) => editMessage(e)}
						onKeyDown={handleKeyPress}
					/>
				</form>
			</MsgEditContainer>
			<MsgEditDescription>
				<span>escape to </span>
				<MsgEditCancel onClick={(e) => closeEdit(e)}>cancel</MsgEditCancel>
				<span> • enter to </span>
				<MsgEditSave onClick={() => saveEdit(messageId)}>save</MsgEditSave>
			</MsgEditDescription>
		</div>
	);
};

export default MessageEdit;
