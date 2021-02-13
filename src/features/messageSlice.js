import { createSlice } from '@reduxjs/toolkit';

export const messageSlice = createSlice({
	name: 'message',
	initialState: {
		currMsgEditing: null,
		currMsgDeleting: null
	},
	reducers: {
		setMessageInfo: (state, action) => {
			state.currMsgEditing = action.payload.currMsgEditing;
			state.currMsgDeleting = action.payload.currMsgDeleting;
		}
	}
});

export const { setMessageInfo } = messageSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.app.value)`

export const selectCurrMsgEditing = (state) => state.message.currMsgEditing;
export const selectCurrMsgDeleting = (state) => state.message.currMsgDeleting;

export default messageSlice.reducer;
