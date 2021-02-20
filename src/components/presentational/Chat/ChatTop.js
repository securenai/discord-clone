import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { setWindowInfo } from '../../../features/windowSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const ChatTopContainer = styled.div`
	margin: 15px;
	margin-top: 230px;
	border-bottom: 1px solid #494c53;
	& > h1 {
		font-size: 32px;
		font-weight: 700;
		line-height: 40px;
		margin: 8px 0;
		color: white;
	}
	& > p {
		color: #b9bbbe;
	}
`;
const EmptyChannelIcon = styled.div`
	width: 68px;
	height: 68px;
	margin-top: 16px;
	border-radius: 50%;
	background-color: #4f545c;
	background-repeat: no-repeat;
	background-position: 50%;
	font-size: 50px;
	color: white;
	& > span {
		margin-left: 25%;
	}
`;
const EditChannelBtn = styled.button`
	color: #00b0f4;
	margin-top: 5px;
	margin-right: 8px;
	padding: 6px;
	border: 0;
	outline: 0;
	cursor: pointer;
	background: transparent;
	& :hover {
		background-color: #3f4147;
	}
	& > div {
		padding: 3px;
		margin: 0px 5px 5px 5px;
		display: flex;
		flex-direction: row;
		flex: 1 1 auto;
		border-radius: 3px;
		& > .editChannelBtn__icon {
			align-self: center;
		}
		& > .editChannelBtn__text {
			font-size: 16px;
			line-height: 20px;
			padding: 4px;
		}
	}
`;

const ChatTop = ({ channelId, channelName }) => {
	const dispatch = useDispatch();
	const handleChannelEdit = () => {
		dispatch(setWindowInfo({ openChannelSettings: channelId }));
	};

	return (
		<ChatTopContainer>
			<EmptyChannelIcon>
				<span>#</span>
			</EmptyChannelIcon>
			<h1>Welcome to #{channelName}!</h1>
			<p>this is the start of the #{channelName} channel.</p>
			<EditChannelBtn onClick={handleChannelEdit}>
				<div>
					<div className="editChannelBtn__icon">
						<EditIcon fontSize="small" />
					</div>
					<div className="editChannelBtn__text">Edit Channel</div>
				</div>
			</EditChannelBtn>
		</ChatTopContainer>
	);
};

export default ChatTop;
