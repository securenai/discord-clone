import React, { useEffect } from 'react';
import './ChatHeader.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import InboxIcon from '@material-ui/icons/Inbox';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import { useSelector } from 'react-redux';
import { selectChannelName } from '../../features/channelSlice';

const ChatHeader = () => {
	const channelName = useSelector(selectChannelName);

	useEffect(() => {
		localStorage.setItem('lastVisitedChannelName', channelName);
	}, [channelName]);

	return (
		<div className="chatHeader">
			<div className="chatHeader__left">
				<h3>
					<span className="chatHeader__hash">#</span>
					<span className="chatHeader__channel_name">{channelName}</span>
				</h3>
			</div>
			<div className="chatHeader__right">
				<NotificationsIcon />
				<EditLocationIcon />
				<PeopleAltIcon />
				<div className="chatHeader__search">
					<input placeholder="Search" />
					<SearchRoundedIcon />
				</div>
				<InboxIcon />
				<HelpRoundedIcon />
			</div>
		</div>
	);
};

export default ChatHeader;
