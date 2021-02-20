import React, { useEffect } from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import InboxIcon from '@material-ui/icons/Inbox';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import { useSelector } from 'react-redux';
import { selectChannelName } from '../../../features/channelSlice';
import styled from 'styled-components';

const ChatHeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	color: gray;
	padding: 2px 10px;
	border-bottom: 2px solid #313235;
	background-color: #36393f;
`;
const Hash = styled.span`
	color: gray;
	font-size: 30px;
`;
const ChatHeaderName = styled.span`
	margin-left: 10px;
	font-size: 16px;
`;
const ChatHeaderTitle = styled.div`
	& > h3 {
		display: flex;
		align-items: center;
		color: white;
	}
`;
const ChatHeaderWidgets = styled.div`
	display: flex;
	align-items: center;
	flex: 0.4;
	justify-content: space-between;
	& > .MuiSvgIcon-root {
		padding: 5px;
		font-size: 20px;
		cursor: pointer;
	}
	& > .MuiSvgIcon-root:hover {
		color: white;
	}
`;
const ChatHeaderSearchWidget = styled.div`
	display: flex;
	align-items: center;
	color: gray;
	border-radius: 5px;
	padding: 3px;
	background: #202225;
	& > .MuiSvgIcon-root {
		font-size: 20px;
	}
	& > input {
		background: transparent;
		outline-width: 0;
		color: white;
		border: none;
	}
`;

const ChatHeader = ({ toggleShowMembers }) => {
	const channelName = useSelector(selectChannelName);

	useEffect(() => {
		localStorage.setItem('lastVisitedChannelName', channelName);
	}, [channelName]);

	return (
		<ChatHeaderContainer>
			<ChatHeaderTitle>
				<h3>
					<Hash>#</Hash>
					<ChatHeaderName>{channelName}</ChatHeaderName>
				</h3>
			</ChatHeaderTitle>

			<ChatHeaderWidgets>
				<NotificationsIcon />
				<EditLocationIcon />
				<PeopleAltIcon onClick={toggleShowMembers} />
				<ChatHeaderSearchWidget>
					<input placeholder="Search" />
					<SearchRoundedIcon />
				</ChatHeaderSearchWidget>
				<InboxIcon />
				<HelpRoundedIcon />
			</ChatHeaderWidgets>
		</ChatHeaderContainer>
	);
};

export default ChatHeader;
