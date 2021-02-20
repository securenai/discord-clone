import React, { useEffect, useRef } from 'react';
import Message from '../../Message/Message';

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

	return messages.map((message) => (
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
	));
};

export default ChatMessages;
