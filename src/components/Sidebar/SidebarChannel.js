import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../features/appSlice';
import './SidebarChannel.css';
import { useSelector } from 'react-redux';
import { selectChannelId } from '../../features/appSlice';
import SettingsIcon from '@material-ui/icons/Settings';
import ChannelSettings from '../ChannelSettings/ChannelSettings';

const SideBarChannel = ({ id, channelData }) => {
	const dispatch = useDispatch();
	const channelId = useSelector(selectChannelId);
	const [openChannelSettings, setOpenChannelSettings] = useState(false);

	useEffect(() => {
		localStorage.setItem('lastVisitedChannelId', channelId);
	});

	const handleClickOpenSettings = (e) => {
		e.stopPropagation();
		setOpenChannelSettings(true);
	};

	const handleCloseSettings = (e) => {
		e.stopPropagation();
		setOpenChannelSettings(false);
	};

	return (
		<div
			className={
				channelId === id ? 'sidebarChannel sidebarCurr' : 'sidebarChannel'
			}
			onClick={() =>
				dispatch(
					setChannelInfo({
						channelId: id,
						channelName: channelData.channelName
					})
				)
			}>
			<div className="sidebarChannel__wrap">
				<span className="sidebarChannel__hash">#</span>
				<span className="sidebarChannel__name">{channelData.channelName}</span>
				<span className="sidebar__channelIcons">
					<SettingsIcon onClick={handleClickOpenSettings} />
				</span>
			</div>

			<div>
				{openChannelSettings === true ? (
					<ChannelSettings
						// isOpen={openChannelSettings}
						// checked={true}
						channelData={channelData}
						channelId={id}
						closeSettings={handleCloseSettings}
					/>
				) : null}
			</div>
		</div>
	);
};

export default SideBarChannel;
