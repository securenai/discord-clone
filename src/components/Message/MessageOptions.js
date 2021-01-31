import React from 'react';
import { useSelector } from 'react-redux';
import { MsgOptionsContainer, BtnsWrapper, MsgBtns } from './style';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import EditIcon from '@material-ui/icons/Edit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { selectUser } from '../../features/userSlice';

const MessageOptions = ({ msgId, openMsgEdit, openMsgDelete, user }) => {
	const loginUser = useSelector(selectUser);
	return (
		<MsgOptionsContainer>
			<BtnsWrapper>
				<MsgBtns>
					<InsertEmoticonIcon />
				</MsgBtns>
				{loginUser.uid === user.uid ? (
					<MsgBtns>
						<EditIcon onClick={() => openMsgEdit(msgId)} />
					</MsgBtns>
				) : null}
				<MsgBtns>
					<MoreHorizIcon />
				</MsgBtns>
				<MsgBtns>
					<DeleteForeverIcon onClick={() => openMsgDelete(msgId)} />
				</MsgBtns>
			</BtnsWrapper>
		</MsgOptionsContainer>
	);
};

export default MessageOptions;
