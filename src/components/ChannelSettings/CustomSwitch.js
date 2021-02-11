import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function CustomSwitch() {
	const [state, setState] = React.useState({
		checkedA: false
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	return (
		<div>
			<Switch
				checked={state.checkedA}
				onChange={handleChange}
				name="checkedA"
				color="default"
				inputProps={{ 'aria-label': 'secondary checkbox' }}
			/>
		</div>
	);
}
