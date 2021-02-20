import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import styled from 'styled-components';

const EmojiPickerContainer = styled.div`
	& .emoji-mart-scroll::-webkit-scrollbar {
		width: 8px;
		background: #2e3338;
		border-radius: 10px;
	}
	& .emoji-mart-scroll::-webkit-scrollbar-thumb {
		background: #202225;
		border-radius: 10px;
	}
`;

const ChatEmojiPicker = ({ setEmojiSelected }) => {
	return (
		<EmojiPickerContainer>
			<Picker
				set="apple"
				style={{ position: 'absolute', bottom: '90px', right: '280px' }}
				theme="dark"
				onSelect={(emoji) => {
					setEmojiSelected(emoji);
				}}
			/>
		</EmojiPickerContainer>
	);
};

export default ChatEmojiPicker;
