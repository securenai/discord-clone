import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import './SlowmodeSlider.css';

const useStyles = makeStyles({
	root: {
		color: '#dcddde',
		width: 650
	}
});

const marks = [
	{
		value: 0,
		label: 'off'
	},
	{
		value: 7.69,
		label: '5s'
	},
	{
		value: 15.38,
		label: '10s'
	},
	{
		value: 23.07,
		label: '15s'
	},
	{
		value: 30.76,
		label: '30s'
	},
	{
		value: 38.45,
		label: '1m'
	},
	{
		value: 46.14,
		label: '2s'
	},
	{
		value: 53.83,
		label: '5s'
	},
	{
		value: 61.52,
		label: '10m'
	},
	{
		value: 69.21,
		label: '15m'
	},
	{
		value: 76.9,
		label: '30m'
	},
	{
		value: 84.59,
		label: '1h'
	},
	{
		value: 92.28,
		label: '2h'
	},
	{
		value: 99.9,
		label: '6h'
	}
];

function valuetext(value) {
	return `${value}°C`;
}

function valueLabelFormat(value) {
	return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function SlowmodeSlider({ slowmodeValue, changeSlowmode }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Slider
				// defaultValue={sliderValue} for uncontrolled component
				value={slowmodeValue}
				valueLabelFormat={valueLabelFormat}
				getAriaValueText={valuetext}
				aria-labelledby="discrete-slider-restrict"
				step={null}
				valueLabelDisplay="off"
				marks={marks}
				onChange={(event, newValue) => changeSlowmode(newValue)}
			/>
		</div>
	);
}
