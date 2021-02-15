import React, { useState, useEffect } from 'react';
import './Chat.css';
import ChatTextArea from './ChatTextArea';
import { useSelector } from 'react-redux';
import {
	selectChannelId,
	selectChannelName
} from '../../features/channelSlice';
import { selectUser } from '../../features/userSlice';
import db from '../../firebase';
import ChatEmojiPicker from './ChatEmojiPicker';

import ChatMessages from './ChatMessages';

const Chat = () => {
	const user = useSelector(selectUser);
	const channelId = useSelector(selectChannelId);
	const channelName = useSelector(selectChannelName);
	const [messages, setMessages] = useState([]);
	const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
	const [emojiSelected, setEmojiSelected] = useState({});

	const handleOpenEmojiPicker = () => {
		setOpenEmojiPicker(!openEmojiPicker);
	};

	const handleSetEmojiSelected = (emoji) => {
		// console.log(emoji);
		setEmojiSelected(emoji);
	};

	useEffect(() => {
		if (channelId) {
			db.collection('channels')
				.doc(channelId)
				.collection('messages')
				.orderBy('timestamp', 'asc')
				.onSnapshot((snapshot) =>
					setMessages(
						snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
					)
				);
		}
	}, [channelId]);

	return (
		<div className="chat">
			{/* <ChatHeader channelName={channelName} channelId={channelId} /> */}
			<ChatMessages
				channelName={channelName}
				messages={messages}
				channelId={channelId}
			/>
			<ChatTextArea
				channelName={channelName}
				channelId={channelId}
				user={user}
				openEmojiPicker={handleOpenEmojiPicker}
				emojiSelected={emojiSelected}
			/>

			<div>
				{openEmojiPicker === true ? (
					<ChatEmojiPicker setEmojiSelected={handleSetEmojiSelected} />
				) : null}
			</div>
		</div>
	);
};

export default Chat;
