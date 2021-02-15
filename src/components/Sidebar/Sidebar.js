import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SideBarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { selectChannels, setAppInfo } from '../../features/appSlice';
import db, { auth } from '../../firebase';
// import firebase from 'firebase';
import ChannelCreate from '../Channel/ChannelCreate';

const Sidebar = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const channels = useSelector(selectChannels);
	const [openChannelCreate, setOpenChannelCreate] = useState(false);
	// const [channels, setChannels] = useState([]);

	useEffect(() => {
		db.collection('channels')
			.orderBy('createdDateTime', 'asc')
			.onSnapshot((snapshot) =>
				dispatch(
					setAppInfo({
						channels: snapshot.docs.map((doc) => ({
							id: doc.id,
							// channel: doc.data()
							channel: {
								channelName: doc.data().channelName,
								channelTopic: doc.data().channelTopic,
								slowmode: doc.data().slowmode,
								nsfw: doc.data().nsfw
							}
						}))
					})
				)
			);
		// console.log(channels);
	}, []);

	// useEffect(() => {
	// 	db.collection('channels')
	// 		.orderBy('createdDateTime', 'asc')
	// 		.onSnapshot((snapshot) =>
	// 			setChannels(
	// 				snapshot.docs.map((doc) => ({
	// 					id: doc.id,
	// 					channel: doc.data()
	// 				}))
	// 			)
	// 		);
	// }, []);
	const handleCloseCreate = () => {
		setOpenChannelCreate(false);
	};

	const handleAddChannel = () => {
		setOpenChannelCreate(true);
		// const channelName = prompt('create channel name:');
		// if (channelName) {
		// 	db.collection('channels').add({
		// 		channelName: channelName,
		// 		channelTopic: '',
		// 		slowmode: 0,
		// 		nsfw: false,
		// 		createdDateTime: firebase.firestore.FieldValue.serverTimestamp()
		// 	});
		// }
	};

	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<h4>Nova's Lab</h4>
				<ExpandMoreIcon />
			</div>

			<div className="sidebar__channels">
				<div className="sidebar__channelsHeader">
					<div className="sidebar__header">
						<ExpandMoreIcon />
						<h4>Text channels</h4>
					</div>
					<AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
				</div>
				<div className="sidebar__channelsList">
					{channels.map(({ id, channel }) => (
						<SideBarChannel key={id} id={id} channelData={channel} />
					))}
				</div>
			</div>
			<div className="sidebar__voice">
				<SignalCellularAltIcon
					className="sidebar__voiceIcon"
					fontSize="large"
				/>
				<div className="sidebar__voiceInfo">
					<h3>voice connected</h3>
					<p>Stream</p>
				</div>
				<div className="sidebar__voiceIcons">
					<InfoOutlinedIcon />
					<CallIcon />
				</div>
			</div>
			<div className="sidebar__profile">
				<Avatar onClick={() => auth.signOut()} src={user.photo} />
				<div className="sidebar__profileInfo">
					<h3>{user.displayName}</h3>
					<p>#{user.uid.substring(0, 4)}</p>
				</div>
				<div className="sidebar__profileIcons">
					<MicIcon />
					<HeadsetIcon />
					<SettingsIcon />
				</div>
			</div>

			<div>
				{openChannelCreate === true ? (
					<ChannelCreate closeCreate={handleCloseCreate} />
				) : null}
			</div>
		</div>
	);
};

export default Sidebar;
