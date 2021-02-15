import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWindowInfo } from '../../features/windowSlice';
import { setChannelInfo } from '../../features/channelSlice';
import './SidebarChannel.css';
import { useSelector } from 'react-redux';
import {
	selectChannelId,
	selectChannelName
} from '../../features/channelSlice';
import { selectOpenChannelSettings } from '../../features/windowSlice';
import SettingsIcon from '@material-ui/icons/Settings';
import ChannelSettings from '../ChannelSettings/ChannelSettings';

const SideBarChannel = ({ id, channelData }) => {
	const dispatch = useDispatch();
	const channelId = useSelector(selectChannelId);
	const channelName = useSelector(selectChannelName);
	// const currChannelConfiguring = useSelector(selectCurrChannelConfiguring);

	// console.log(currChannelConfiguring);
	const openChannelSettings = useSelector(selectOpenChannelSettings);
	// const [openChannelSettings, setOpenChannelSettings] = useState(false);

	useEffect(() => {
		localStorage.setItem('lastVisitedChannelId', channelId);
	});

	const handleClickOpenSettings = (e) => {
		e.stopPropagation();
		// setOpenChannelSettings(true);
		dispatch(setWindowInfo({ openChannelSettings: id }));

		dispatch(
			setChannelInfo({
				channelId: channelId,
				channelName: channelName,
				currChannelConfiguring: id
			})
		);
	};

	const handleCloseSettings = (e) => {
		e.stopPropagation();
		// setOpenChannelSettings(false);
		dispatch(setWindowInfo({ openChannelSettings: null }));
		dispatch(
			setChannelInfo({
				channelId: channelId,
				channelName: channelName,
				currChannelConfiguring: null
			})
		);
	};

	return (
		<>
			<div
				className={
					channelId === id ? 'sidebarChannel sidebarCurr' : 'sidebarChannel'
				}
				onClick={() =>
					dispatch(
						setChannelInfo({
							channelId: id,
							channelName: channelData.channelName,
							currChannelConfiguring: null
						})
					)
				}>
				<div
					className={
						channelId === id ? 'curr_channel' : 'sidebarChannel__wrap'
					}>
					<span className="sidebarChannel__hash">#</span>
					<span className="sidebarChannel__name">
						{channelData.channelName}
					</span>
					<span className="sidebar__channelIcons">
						<SettingsIcon onClick={handleClickOpenSettings} />
					</span>
				</div>
			</div>

			<div>
				{openChannelSettings === id ? (
					<ChannelSettings
						// isOpen={openChannelSettings}
						// checked={true}
						channelData={channelData}
						channelId={id}
						closeSettings={handleCloseSettings}
					/>
				) : null}
			</div>
		</>
	);
};

export default SideBarChannel;
