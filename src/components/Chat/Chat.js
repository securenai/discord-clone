import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';
import React, {useState, useEffect, useRef} from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import {selectChannelId, selectChannelName} from '../../features/appSlice';
import {selectUser} from '../../features/userSlice';
import Message from '../Message/Message';
import {useSelector} from 'react-redux';
import db from '../../firebase';
import firebase from 'firebase';

const Chat = () => {
	const user = useSelector(selectUser);
	const channelId = useSelector(selectChannelId);
	const channelName = useSelector(selectChannelName);
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([]);
	const msgRef = useRef();

	useEffect(() => {
		if (msgRef.current) {
			msgRef.current.scrollIntoView({
				behavior: 'auto',
				block: 'end',
				inline: 'nearest',
			});
		}
	}, [messages]);

	useEffect(() => {
		if (channelId) {
			db.collection('channels')
				.doc(channelId)
				.collection('messages')
				.orderBy('timestamp', 'asc')
				.onSnapshot((snapshot) =>
					setMessages(
						snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()}))
					)
				);
		}
	}, [channelId]);

	const sendMessage = (e) => {
		e.preventDefault();
		db.collection('channels').doc(channelId).collection('messages').add({
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			message: input,
			isEdited: false,
			user: user,
		});
		console.log(msgRef.current);
		setInput('');
	};

	return (
		<div className="chat">
			<ChatHeader channelName={channelName} />

			<div className="chat__messages">
				{messages.map((message) => {
					return (
						<div ref={msgRef} key={message.id}>
							<Message
								id={message.id}
								timestamp={message.data.timestamp}
								message={message.data.message}
								user={message.data.user}
								isEdited={message.data.isEdited}
							/>
						</div>
					);
				})}
			</div>

			<div className="chat__input">
				<AddCircleIcon fontSize="large" />
				<form>
					<input
						value={input}
						disabled={!channelId}
						onChange={(e) => setInput(e.target.value)}
						placeholder={`Message #${channelName}`}
					/>
					<button
						className="chat__inputButton"
						type="submit"
						onClick={sendMessage}
						disabled={!channelId}>
						Send Message
					</button>
				</form>
				<div className="chat__inputIcons">
					<CardGiftcardIcon fontSize="large" />
					<GifIcon fontSize="large" />
					<EmojiEmotionsIcon fontSize="large" />
				</div>
			</div>
		</div>
	);
};

export default Chat;
