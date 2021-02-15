import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import './ChatEmojiPicker.css';

const ChatEmojiPicker = ({ setEmojiSelected }) => {
	return (
		<div>
			<Picker
				set="apple"
				style={{ position: 'absolute', bottom: '90px', right: '280px' }}
				theme="dark"
				onSelect={(emoji) => {
					// console.log(emoji);
					setEmojiSelected(emoji);
				}}
			/>
			{/* <Picker onSelect={this.addEmoji} />
			<Picker title="Pick your emoji…" emoji="point_up" />
			<Picker style={{ position: 'absolute', bottom: '20px', right: '20px' }} />
			<Picker
				i18n={{
					search: 'Recherche',
					categories: { search: 'Résultats de recherche', recent: 'Récents' }
				}}
			/> */}
		</div>
	);
};

export default ChatEmojiPicker;
