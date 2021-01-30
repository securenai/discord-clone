import React from 'react';
import './MessageEdit.css';

const MessageEdit = ({
	editInput,
	editMessage,
	closeEdit,
	saveEdit,
	id,
}) => {
	return (
		<div>
			<div className="message__edit__input__container">
				<form>
					<input
						autoFocus
						className="message__edit__input"
						value={editInput}
						onChange={(e) => editMessage(e)}
						onKeyDown={(e) => {
							if (e.keyCode === 27) {
								closeEdit(e);
							}
						}}
					/>
					<button
						className="message__edit__inputButton"
						type="submit"
						onClick={() => {
							saveEdit(id);
						}}></button>
				</form>
			</div>
			<div className="message__edit__desc">
				escape to{' '}
				<span
					className="message__edit__canc"
					onClick={(e) => {
						closeEdit(e);
					}}>
					cancel
				</span>{' '}
				• enter to{' '}
				<span
					className="message__edit__save"
					onClick={() => {
						saveEdit(id);
					}}>
					save
				</span>
			</div>
		</div>
	);
};

export default MessageEdit;
