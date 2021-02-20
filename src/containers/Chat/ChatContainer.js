import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
	selectChannelId,
	selectChannelName
} from '../../features/channelSlice';
import { selectUser } from '../../features/userSlice';
import db from '../../firebase';
import Chat from '../../components/presentational/Chat/Chat';

const ChatContainer = () => {
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
		<Chat
			channelId={channelId}
			channelName={channelName}
			messages={messages}
			user={user}
			openEmojiPicker={openEmojiPicker}
			handleOpenEmojiPicker={handleOpenEmojiPicker}
			emojiSelected={emojiSelected}
			handleSetEmojiSelected={handleSetEmojiSelected}
		/>
	);
};

export default ChatContainer;
