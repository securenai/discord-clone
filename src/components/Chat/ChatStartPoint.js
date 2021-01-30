import React from 'react';
import './ChatStartPoint.css';
import EditIcon from '@material-ui/icons/Edit';

const ChatStartPoint = ({channelName}) => {
	return (
		<div className="chatStartPoint__container">
			<div className="chatStartPoint__empty_channel_icon">
				<span className="chatStartPoint__empty_channel_icon_hash">#</span>
			</div>
			<h1 className="chatStartPoint__main">Welcome to #{channelName}!</h1>
			<p className="chatStartPoint__secondary">
				this is the start of the #{channelName} channel.
			</p>
			<button className="chatStartPoint__edit_btn">
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
