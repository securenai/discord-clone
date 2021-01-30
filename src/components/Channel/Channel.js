import React from 'react';
import Chat from '../Chat/Chat';
import Sidebar from '../Sidebar/Sidebar';
import './Channel.css';

const Channel = () => {
	return (
		<div className="channel__container">
			<div className="channel__main">
				<>
					<Sidebar />
					<Chat />
				</>
			</div>
		</div>
	);
};

export default Channel;
