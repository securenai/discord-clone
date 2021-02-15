import React, { useState, useEffect } from 'react';
import './Overview.css';
import SlowmodeSlider from './SlowmodeSlider';
import overviewsvg from '../../images/overview_img.svg';
import CustomSwitch from './CustomSwitch';

const Overview = ({
	channelData,
	openSave,
	closeSave,
	saveData,
	resetData
}) => {
	const [channelName, setChannelName] = useState(channelData.channelName);
	const [channelTopic, setChannelTopic] = useState(channelData.channelTopic);
	const [slowmode, setSlowmode] = useState(channelData.slowmode);
	const [nsfw, setNsfw] = useState(channelData.nsfw);

	useEffect(() => {
		// console.log(channelData);
		if (resetData === true) {
			setChannelName(channelData.channelName);
			setChannelTopic(channelData.channelTopic);
			setSlowmode(channelData.slowmode);
			setNsfw(channelData.nsfw);
		}
		if (
			channelData.channelName !== channelName ||
			channelData.channelTopic !== channelTopic ||
			channelData.slowmode !== slowmode ||
			channelData.nsfw !== nsfw
		) {
			saveData({ channelName, channelTopic, slowmode, nsfw });
			openSave();
		} else {
			closeSave();
		}
		// console.log(overviewData);
	}, [channelName, channelTopic, slowmode, nsfw, resetData]);

	const handleChangeSlowmode = (val) => {
		setSlowmode(val);
	};

	const handleChangeNsfw = () => {
		setNsfw(!nsfw);
	};
	const checkOpenSave = () => {
		openSave();
	};

	// console.log(channelData);

	return (
		<div className="overview_container">
			<h2 className="overview_title">Overview</h2>
			<h5 className="overview_field_title">channel name</h5>
			<div className="overview_input_wrapper">
				<input
					className="overview_input_1"
					type="text"
					maxLength="999"
					value={channelName}
					onChange={(e) => {
						setChannelName(e.target.value);
					}}
					autoFocus
				/>
			</div>
			<h5 className="overview_field_title mt-20">channel topic</h5>
			<div className="overview_input_wrapper">
				<textarea
					className="overview_textarea_1"
					value={channelTopic}
					onChange={(e) => {
						setChannelTopic(e.target.value);
						checkOpenSave();
					}}
					type="text"
					placeholder="Let everyone know how to use this channel!"
					maxLength="1024"
					rows="3"
					autoCorrect="off"></textarea>
				{/* <div className="textarea_maxLength">1024</div> */}
			</div>
			<div className="overview_divider"></div>
			<h5 className="overview_field_title mt-20">slowmode</h5>
			<div className="overview_slowmode_slider">
				<SlowmodeSlider
					slowmodeValue={slowmode}
					changeSlowmode={handleChangeSlowmode}
				/>
			</div>
			<div className="overview_slowmode_description">
				Members will be restricted to sending one message per this interval,
				unless they have Manage Channel or Manage Messages permissions.
			</div>
			<div className="overview_divider"></div>
			<div className="overview_label">
				<label className="overview_label_title">NSFW Channel</label>
				<div className="overview_switch">
					<CustomSwitch toggledSwitch={nsfw} changeNsfw={handleChangeNsfw} />
				</div>
			</div>
			<div className="overview_label_description">
				Users will need to confirm they are of over legal age to view in the
				content in this channel. NSFW channels are exempt from the explicit
				content filter.
			</div>
			<div className="overview_image_wrapper">
				<div>
					<img src={overviewsvg} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Overview;
