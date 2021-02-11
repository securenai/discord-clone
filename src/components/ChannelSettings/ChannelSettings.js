import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import './ChannelSettings.css';
import Zoom from '@material-ui/core/Zoom';
import Overview from './Overview';
import Permissions from './Permissions';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Zoom ref={ref} {...props} style={{ transitionDelay: '0ms' }} />;
});

const ChannelSettings = ({ closeSettings, channelData }) => {
	const [tab, setTab] = useState(1);

	const getTab = () => {
		switch (tab) {
			case 1:
				return <Overview channelData={channelData} />;
			case 2:
				return <Permissions />;
			case 3:
				return null; // todo
			case 4:
				return null; // todo
			default:
				return null;
		}
	};

	return (
		<div className="channel__settings_container">
			<Dialog
				fullScreen
				open={true}
				onClose={closeSettings}
				TransitionComponent={Transition}>
				<div className="channel__settings_dialog">
					<div className="channel__settings_sidebar_container">
						<nav className="channel__settings_sidebar_nav">
							<div className="channel__settings_sidebar_nav_side">
								<div className="channel__settings_sidebar_nav_side_header">
									<span>
										# channel name_
										<span className="channel__settings_sidebar_nav_side_category">
											Text Channels
										</span>
									</span>
								</div>
								<div
									className="channel__settings_sidebar_nav_side_item"
									onClick={() => setTab(1)}>
									Overview
								</div>
								<div
									className="channel__settings_sidebar_nav_side_item"
									onClick={() => setTab(2)}>
									Permissions
								</div>
								<div
									className="channel__settings_sidebar_nav_side_item"
									onClick={() => setTab(3)}>
									Invites
								</div>
								<div
									className="channel__settings_sidebar_nav_side_item"
									onClick={() => setTab(4)}>
									Integrations
								</div>
								<div className="channel__settings_sidebar_nav_side_separator"></div>
								<div className="channel__settings_sidebar_nav_side_item item_del">
									Delete Channel
								</div>
							</div>
						</nav>
					</div>
					<div className="channel__settings_main_container">
						<div className="channel__settings_main_region">
							<div className="channel__settings_scroller">
								<div className="channel__settings_main">
									<div className="channel__settings_overview">{getTab()}</div>
								</div>
								<div className="channel__settings_tools">
									<div
										className="channel__settings_close_button"
										onClick={closeSettings}>
										<svg
											className="close_svg"
											aria-hidden="true"
											width="18"
											height="18"
											viewBox="0 0 24 24">
											<path
												fill="#dcddde"
												d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
										</svg>
									</div>
									<div className="channel__settings_close_button_keybind">
										ESC
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default ChannelSettings;
