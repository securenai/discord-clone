import React from 'react';
import ChatEmojiPicker from './ChatEmojiPicker';
import ChatTextArea from '../../Chat/ChatTextArea';
import ChatMessages from './ChatMessages';
import '../../Chat/Chat.css';
import styled from 'styled-components';
import ChatTop from './ChatTop';

const ChatContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 100%;
	background-color: #363a3f;
	height: 100vh;
	width: 75%;
`;
const ChatMain = styled.div`
	flex: 1;
	overflow-x: hidden;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		width: 8px;
		background: #2e3338;
		border-radius: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background: #202225;
		border-radius: 10px;
	}
`;

const Chat = ({
	channelId,
	channelName,
	messages,
	user,
	openEmojiPicker,
	handleOpenEmojiPicker,
	emojiSelected,
	handleSetEmojiSelected
}) => {
	return (
		<ChatContainer>
			<ChatMain>
				<ChatTop channelId={channelId} channelName={channelName} />
				<ChatMessages
					channelName={channelName}
					messages={messages}
					channelId={channelId}
				/>
			</ChatMain>
			<ChatTextArea
				channelName={channelName}
				channelId={channelId}
				user={user}
				openEmojiPicker={handleOpenEmojiPicker}
				emojiSelected={emojiSelected}
			/>

			{openEmojiPicker === true ? (
				<ChatEmojiPicker setEmojiSelected={handleSetEmojiSelected} />
			) : null}
		</ChatContainer>
	);
};

export default Chat;
