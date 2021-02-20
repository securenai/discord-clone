import React, { useEffect, useRef } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';
import ContentEditable from 'react-contenteditable';
import { decode } from 'html-entities';
import firebase from 'firebase';
import db from '../../firebase';

const ChatTextArea = ({
	channelId,
	channelName,
	user,
	openEmojiPicker,
	emojiSelected
}) => {
	const text = useRef('');
	const formRef = useRef(null);
	const btnRef = useRef(null);

	useEffect(() => {
		console.log(text.current);
		console.log(emojiSelected.native);
		text.current = text.current + emojiSelected.native;
	}, [emojiSelected]);

	useEffect(() => {
		formRef.current.children[0].focus();
	}, [channelId]);

	useEffect(() => {
		const draftStore = localStorage.getItem('DraftStore');
		if (draftStore) {
			if (channelId in JSON.parse(draftStore).state) {
				text.current = JSON.parse(draftStore).state[channelId].draft;
			} else {
				text.current = '';
			}
		}
	}, [channelId]);

	const handleKeyPress = (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			btnRef.current.click();
		}
	};

	const handleChange = (e) => {
		text.current = decode(e.target.value);
		const draftStore = localStorage.getItem('DraftStore');
		if (draftStore) {
			const updatedStore = (JSON.parse(draftStore).state.channelId = {
				draft: decode(e.target.value)
			});
			const tmp = JSON.parse(draftStore);
			tmp.state[channelId] = updatedStore;
			localStorage.setItem('DraftStore', JSON.stringify(tmp));
		} else {
			localStorage.setItem(
				'DraftStore',
				JSON.stringify({
					state: { [channelId]: { draft: decode(e.target.value) } }
				})
			);
		}
	};

	const submit = (e) => {
		e.preventDefault();
		db.collection('channels').doc(channelId).collection('messages').add({
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			message: text.current,
			isEdited: false,
			user: user
		});
		text.current = '';

		const draftStore = localStorage.getItem('DraftStore');
		if (draftStore) {
			if (channelId in JSON.parse(draftStore).state) {
				const tmp = JSON.parse(draftStore);
				delete tmp.state[channelId];
				localStorage.setItem('DraftStore', JSON.stringify(tmp));
			}
		}
	};

	return (
		<div className="chat__input">
			<AddCircleIcon fontSize="default" />
			<form ref={formRef}>
				<ContentEditable
					html={text.current}
					disabled={false}
					onChange={(e) => handleChange(e)}
					onKeyPress={handleKeyPress}
					placeholder={`Message`}>
					{/* <span
						contentEditable={false}
						dangerouslySetInnerHTML={{
							__html: emojiSelected
						}}></span> */}
				</ContentEditable>
				<button className="msg_submit" onClick={submit} ref={btnRef}>
					submit
				</button>
			</form>
			<div className="chat__inputIcons">
				<CardGiftcardIcon />
				<GifIcon />
				<EmojiEmotionsIcon onClick={openEmojiPicker} />
			</div>
		</div>
	);
};

export default ChatTextArea;
