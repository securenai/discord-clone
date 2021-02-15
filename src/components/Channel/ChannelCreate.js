import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './style.css';
import {
	ChnCreateInput,
	ChnCreateTitle,
	ChnCreateDialogTitle,
	ChnCreateInputHash,
	ChnCreateInputField
} from './style';
import db from '../../firebase';
import {
	ChnDelDialog,
	ChnDelDialogPromptQues,
	ChnDelBtnActions,
	ChnDelBtn
} from './style';
import firebase from 'firebase';

const ChannelCreate = ({ closeCreate }) => {
	const [channelName, setChannelName] = useState('');
	// const channels = useSelector(selectChannels);
	// const currentChattingChannel = useSelector(selectChannelId);
	// const currentChattingName = useSelector(selectChannelName);
	// const currChannelConfiguring = useSelector(selectCurrChannelConfiguring);
	// const dispatch = useDispatch();
	const handleChannelCreate = () => {
		console.log('create');
		if (channelName && channelName.trim() !== '') {
			console.log(channelName);
			db.collection('channels').add({
				channelName: channelName,
				channelTopic: '',
				slowmode: 0,
				nsfw: false,
				createdDateTime: firebase.firestore.FieldValue.serverTimestamp()
			});
		}
		closeCreate();
	};
	return (
		<Dialog
			open={true}
			onClose={closeCreate}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description">
			<ChnDelDialog>
				<DialogTitle>
					<ChnCreateDialogTitle>{'Create Text Channel'}</ChnCreateDialogTitle>
				</DialogTitle>

				<DialogContent>
					<ChnDelDialogPromptQues>
						{/* <div>Are you sure you want to delete #{channelName} channel?</div> */}
						<ChnCreateTitle>channel Name</ChnCreateTitle>
						<ChnCreateInput>
							<ChnCreateInputHash>#</ChnCreateInputHash>
							<ChnCreateInputField
								autoFocus
								type="text"
								maxLength="999"
								value={channelName}
								onChange={(e) => {
									setChannelName(e.target.value);
								}}
							/>
						</ChnCreateInput>
					</ChnDelDialogPromptQues>
				</DialogContent>

				<ChnDelBtnActions>
					<DialogActions>
						<Button onClick={closeCreate} color="primary">
							<ChnDelBtn>Cancel</ChnDelBtn>
						</Button>
						<Button onClick={handleChannelCreate} color="primary" autoFocus>
							<ChnDelBtn>Create</ChnDelBtn>
						</Button>
					</DialogActions>
				</ChnDelBtnActions>
			</ChnDelDialog>
		</Dialog>
	);
};

export default ChannelCreate;
