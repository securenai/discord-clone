import { createSlice } from '@reduxjs/toolkit';
import { defaultChannelId, defaultChannelName } from '../config';

export const channelSlice = createSlice({
	name: 'channel',
	initialState: {
		channelId: localStorage.getItem('lastVisitedChannelId') || defaultChannelId,
		channelName:
			localStorage.getItem('lastVisitedChannelName') || defaultChannelName,
		currChannelConfiguring: null
	},
	reducers: {
		setChannelInfo: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.channelId = action.payload.channelId;
			state.channelName = action.payload.channelName;
			state.currChannelConfiguring = action.payload.currChannelConfiguring;
		}
	}
});

export const { setChannelInfo, setMessageInfo } = channelSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.app.value)`
export const selectChannelId = (state) => state.channel.channelId;
export const selectChannelName = (state) => state.channel.channelName;
export const selectCurrChannelConfiguring = (state) =>
	state.channel.currChannelConfiguring;

export default channelSlice.reducer;
