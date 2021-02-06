import { createSlice } from '@reduxjs/toolkit';
import { defaultChannelId, defaultChannelName } from '../config';

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		channelId: localStorage.getItem('lastVisitedChannelId') || defaultChannelId,
		channelName:
			localStorage.getItem('lastVisitedChannelName') || defaultChannelName,
		currMsgEditing: null,
		currMsgDeleting: null
	},
	reducers: {
		setChannelInfo: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.channelId = action.payload.channelId;
			state.channelName = action.payload.channelName;
		},
		setMessageInfo: (state, action) => {
			state.currMsgEditing = action.payload.currMsgEditing;
			state.currMsgDeleting = action.payload.currMsgDeleting;
		}
	}
});

export const { setChannelInfo, setMessageInfo } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.app.value)`
export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;
export const selectCurrMsgEditing = (state) => state.app.currMsgEditing;
export const selectCurrMsgDeleting = (state) => state.app.currMsgDeleting;

export default appSlice.reducer;
