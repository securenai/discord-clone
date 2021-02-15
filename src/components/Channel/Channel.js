import React, { useState } from 'react';
import Chat from '../Chat/Chat';
import Members from '../Members/Members';
import Sidebar from '../Sidebar/Sidebar';
import './Channel.css';
import ChatHeader from '../Chat/ChatHeader';

const Channel = () => {
	const [showMembers, toggleShowMembers] = useState(true);

	const handleToggleShowMembers = () => {
		toggleShowMembers(!showMembers);
	};

	return (
		<div className="channel__container">
			<div className="channel__main">
				<>
					<Sidebar />
					<div className="main">
						<ChatHeader toggleShowMembers={handleToggleShowMembers} />
						<div className="test">
							<Chat />
							{showMembers === true ? <Members /> : null}
						</div>
					</div>
				</>
			</div>
		</div>
	);
};

export default Channel;
