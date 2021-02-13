import React from 'react';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './ChannelSettingsSave.css';

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
	channelData
}) {
	const classes = useStyles();

	console.log(channelData);

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
								onClick={closeSave}>
								Reset
							</Button>
							<Button
								variant="contained"
								size="small"
								className="notify_change_btn"
								onClick={closeSave}>
								Save Changes
							</Button>
						</div>
					</Paper>
				</Slide>
			</div>
		</div>
	);
}
