import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setChannelInfo } from '../../features/channelSlice';
import { selectChannels } from '../../features/appSlice';
import {
	selectChannelId,
	selectChannelName,
	selectCurrChannelConfiguring
} from '../../features/channelSlice';
import db from '../../firebase';
import {
	ChnDelDialog,
	ChnDelDialogTitle,
	ChnDelDialogPromptQues,
	ChnDelBtnActions,
	ChnDelBtn
} from './style';

const ChannelDelete = ({ channelId, channelName, closeDelete }) => {
	const channels = useSelector(selectChannels);
	const currentChattingChannel = useSelector(selectChannelId);
	const currentChattingName = useSelector(selectChannelName);
	const currChannelConfiguring = useSelector(selectCurrChannelConfiguring);
	const dispatch = useDispatch();
	const handleMessageDelete = () => {
		console.log(channels);
		db.collection('channels').doc(channelId).delete();
		if (currentChattingChannel === currChannelConfiguring) {
			dispatch(
				setChannelInfo({
					channelId: 'sMTsPYTqynkMsllXqSHU',
					channelName: 'general',
					currChannelConfiguring: null
				})
			);
		} else {
			dispatch(
				setChannelInfo({
					channelId: currentChattingChannel,
					channelName: currentChattingName,
					currChannelConfiguring: null
				})
			);
		}
	};
	return (
		<Dialog
			open={true}
			onClose={closeDelete}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description">
			<ChnDelDialog>
				<DialogTitle>
					<ChnDelDialogTitle>{'DELETE CHANNEL'}</ChnDelDialogTitle>
				</DialogTitle>

				<DialogContent>
					<ChnDelDialogPromptQues>
						<div>Are you sure you want to delete #{channelName} channel?</div>
						<div>This cannot be undone.</div>
					</ChnDelDialogPromptQues>
				</DialogContent>

				<ChnDelBtnActions>
					<DialogActions>
						<Button onClick={closeDelete} color="primary">
							<ChnDelBtn>Cancel</ChnDelBtn>
						</Button>
						<Button onClick={handleMessageDelete} color="primary" autoFocus>
							<ChnDelBtn>Delete</ChnDelBtn>
						</Button>
					</DialogActions>
				</ChnDelBtnActions>
			</ChnDelDialog>
		</Dialog>
	);
};

export default ChannelDelete;
