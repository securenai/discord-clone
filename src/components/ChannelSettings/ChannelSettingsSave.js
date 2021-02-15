import React from 'react';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './ChannelSettingsSave.css';
import db from '../../firebase';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../features/channelSlice';

const useStyles = makeStyles((theme) => ({
	root: {
		height: 180
	},
	wrapper: {
		width: 100 + theme.spacing(2)
	},
	paper: {
		zIndex: 1,
		position: 'relative',
		margin: theme.spacing(1)
	}
}));

export default function ChannelSettingsSave({
	openSave,
	closeSave,
	dataToSave,
	channelData,
	channelId,
	resetData
}) {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleSave = () => {
		console.log('save');
		closeSave();
		db.collection('channels').doc(channelId).set(dataToSave, { merge: true });
		dispatch(
			setChannelInfo({
				channelName: dataToSave.channelName
			})
		);
	};

	const handleReset = () => {
		console.log('reset');

		closeSave();
		resetData();
		// db.collection('channels').doc(channelId).set(channelData, { merge: true });
	};

	return (
		<div className={classes.root}>
			<div className={classes.wrapper}>
				<Slide
					direction="up"
					in={openSave}
					mountOnEnter
					unmountOnExit
					style={{ transitionDelay: '500ms' }}>
					<Paper elevation={4} className="paper">
						<div className="notify_change">
							<div className="notify_change_text">
								Careful — you have unsaved changes!
							</div>
							<Button
								variant="contained"
								size="small"
								className="notify_change_btn"
								onClick={handleReset}>
								Reset
							</Button>
							<Button
								variant="contained"
								size="small"
								className="notify_change_btn"
								onClick={handleSave}>
								Save Changes
							</Button>
						</div>
					</Paper>
				</Slide>
			</div>
		</div>
	);
}
