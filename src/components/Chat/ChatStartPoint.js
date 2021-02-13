import React from 'react';
import './ChatStartPoint.css';
import EditIcon from '@material-ui/icons/Edit';
import { setWindowInfo } from '../../features/windowSlice';
import { useSelector, useDispatch } from 'react-redux';

const ChatStartPoint = ({ channelId, channelName }) => {
	const dispatch = useDispatch();
	const handleChannelEdit = () => {
		console.log('ddd');
		dispatch(setWindowInfo({ openChannelSettings: channelId }));
	};

	return (
		<div className="chatStartPoint__container">
			<div className="chatStartPoint__empty_channel_icon">
				<span className="chatStartPoint__empty_channel_icon_hash">#</span>
			</div>
			<h1 className="chatStartPoint__main">Welcome to #{channelName}!</h1>
			<p className="chatStartPoint__secondary">
				this is the start of the #{channelName} channel.
			</p>
			<button className="chatStartPoint__edit_btn" onClick={handleChannelEdit}>
				<div className="chatStartPoint__btn_wrap">
					<div className="chatStartPoint__edit_btn_icon">
						<EditIcon fontSize="small" />
					</div>
					<div className="chatStartPoint__edit_btn_txt">Edit Channel</div>
				</div>
			</button>
		</div>
	);
};

export default ChatStartPoint;
