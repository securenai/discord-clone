import React from 'react';
import Chat from '../Chat/Chat';
import Members from '../Members/Members';
import Sidebar from '../Sidebar/Sidebar';
import './Channel.css';
import ChatHeader from '../Chat/ChatHeader';

const Channel = () => {
	return (
		<div className="channel__container">
			<div className="channel__main">
				<>
					<Sidebar />
					<div className="main">
						<ChatHeader />
						<div className="test">
							<Chat />
							<Members />
						</div>
					</div>
				</>
			</div>
		</div>
	);
};

export default Channel;
