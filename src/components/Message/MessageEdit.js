import React from 'react';
import {
	MsgEditContainer,
	MsgEditInput,
	MsgEditDescription,
	MsgEditSubmitBtn,
	MsgEditCancel,
	MsgEditSave
} from './style';

const MessageEdit = ({ editInput, editMessage, closeEdit, saveEdit, id }) => {
	return (
		<div>
			<MsgEditContainer>
				<form>
					<MsgEditInput
						autoFocus
						value={editInput}
						onChange={(e) => editMessage(e)}
						onKeyDown={(e) => {
							if (e.keyCode === 27) closeEdit(e);
						}}
					/>
					<MsgEditSubmitBtn
						type="submit"
						onClick={() => saveEdit(id)}></MsgEditSubmitBtn>
				</form>
			</MsgEditContainer>
			<MsgEditDescription>
				<span>escape to </span>
				<MsgEditCancel onClick={(e) => closeEdit(e)}>cancel</MsgEditCancel>
				<span> • enter to </span>
				<MsgEditSave onClick={() => saveEdit(id)}>save</MsgEditSave>
			</MsgEditDescription>
		</div>
	);
};

export default MessageEdit;
