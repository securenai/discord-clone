import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function CustomSwitch({ toggledSwitch, changeNsfw }) {
	const handleChange = (event) => {
		changeNsfw();
	};

	return (
		<div>
			<Switch
				checked={toggledSwitch}
				onChange={handleChange}
				name="checked"
				color="default"
				inputProps={{ 'aria-label': 'secondary checkbox' }}
			/>
		</div>
	);
}
