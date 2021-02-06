import React, { useEffect, useRef } from 'react';
import ChatStartPoint from './ChatStartPoint';
import Message from '../Message/Message';

const ChatMessages = ({ channelId, channelName, messages }) => {
	const msgRef = useRef(null);

	useEffect(() => {
		if (msgRef.current) {
			msgRef.current.scrollIntoView({
				behavior: 'auto',
				block: 'end',
				inline: 'nearest'
			});
		}
	}, [messages]);

	return (
		<div className="chat__messages">
			<div className="chat__chatStartPoint_section">
				<ChatStartPoint channelName={channelName} />
			</div>
			{messages.map((message) => {
				return (
					<div ref={msgRef} key={message.id}>
						<Message
							id={message.id}
							channelId={channelId}
							timestamp={message.data.timestamp}
							message={message.data.message}
							user={message.data.user}
							isEdited={message.data.isEdited}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ChatMessages;
