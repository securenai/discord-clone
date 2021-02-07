import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../features/appSlice';
import './SidebarChannel.css';
import { useSelector } from 'react-redux';
import { selectChannelId } from '../../features/appSlice';

const SideBarChannel = ({ id, channelName }) => {
	const dispatch = useDispatch();
	const channelId = useSelector(selectChannelId);

	useEffect(() => {
		localStorage.setItem('lastVisitedChannelId', channelId);
	});

	return (
		<div
			className={
				channelId === id ? 'sidebarChannel sidebarCurr' : 'sidebarChannel'
			}
			onClick={() =>
				dispatch(
					setChannelInfo({
						channelId: id,
						channelName: channelName
					})
				)
			}>
			<div>
				<span className="sidebarChannel__hash">#</span>
				{channelName}
			</div>
		</div>
	);
};

export default SideBarChannel;
