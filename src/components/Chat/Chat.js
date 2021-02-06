import React, { useState, useEffect } from 'react';
import './Chat.css';
import ChatTextArea from './ChatTextArea';
import ChatHeader from './ChatHeader';
import { selectChannelId, selectChannelName } from '../../features/appSlice';
import { selectUser } from '../../features/userSlice';

import { useSelector } from 'react-redux';
import db from '../../firebase';

import ChatMessages from './ChatMessages';

const Chat = () => {
	const user = useSelector(selectUser);
	const channelId = useSelector(selectChannelId);
	const channelName = useSelector(selectChannelName);
	// const [input, setInput] = useState('');
	const [messages, setMessages] = useState([]);

	// useEffect(() => {
	// 	const draftStore = localStorage.getItem('DraftStore');
	// 	if (draftStore) {
	// 		if (channelId in JSON.parse(draftStore).state) {
	// 			text.current = JSON.parse(draftStore).state[channelId].draft;
	// 		} else {
	// 			text.current = '';
	// 		}
	// 	}
	// }, [channelId]);

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

	// const sendMessage = (text, e) => {
	// 	console.log(channelId);
	// 	if (e.key === 'Enter' && !e.shiftKey) {
	// 		e.preventDefault();
	// 		// sendMessage(text);
	// 		db.collection('channels').doc(channelId).collection('messages').add({
	// 			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
	// 			message: text.current,
	// 			isEdited: false,
	// 			user: user
	// 		});
	// 		text.current = '';
	// 	}

	// 	const draftStore = localStorage.getItem('DraftStore');
	// 	if (draftStore) {
	// 		if (channelId in JSON.parse(draftStore).state) {
	// 			const tmp = JSON.parse(draftStore);
	// 			delete tmp.state[channelId];
	// 			localStorage.setItem('DraftStore', JSON.stringify(tmp));
	// 		}
	// 	}
	// };

	// const handleChange = (e) => {
	// text.current = decode(e.target.value);
	// const draftStore = localStorage.getItem('DraftStore');
	// if (draftStore) {
	// 	const updatedStore = (JSON.parse(draftStore).state.channelId = {
	// 		draft: decode(e.target.value)
	// 	});
	// 	const tmp = JSON.parse(draftStore);
	// 	tmp.state[channelId] = updatedStore;
	// 	localStorage.setItem('DraftStore', JSON.stringify(tmp));
	// 	// console.log('done');
	// } else {
	// 	localStorage.setItem(
	// 		'DraftStore',
	// 		JSON.stringify({
	// 			state: { [channelId]: { draft: decode(e.target.value) } }
	// 		})
	// 	);
	// }
	// };
	const clickMe = () => {
		console.log(channelId);
	};

	return (
		<div className="chat">
			<ChatHeader channelName={channelName} channelId={channelId} />
			<ChatMessages
				channelName={channelName}
				messages={messages}
				channelId={channelId}
			/>
			<ChatTextArea
				channelName={channelName}
				channelId={channelId}
				user={user}
			/>
		</div>
	);
};

export default Chat;
