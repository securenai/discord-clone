import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		channels: [],
		members: null,
		openChannelSettings: false
	},
	reducers: {
		setAppInfo: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.channels = action.payload.channels;
			state.members = action.payload.members;
			state.openChannelSettings = action.payload.openChannelSettings;
		}
	}
});

export const { setAppInfo } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.app.value)`
export const selectChannels = (state) => state.app.channels;
export const selectMembers = (state) => state.app.members;
export const selectOpenChannelSettings = (state) =>
	state.app.openChannelSettings;

export default appSlice.reducer;
