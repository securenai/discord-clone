// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';
import channelReducer from '../features/channelSlice';
import messageReducer from '../features/messageSlice';
import memberReducer from '../features/memberSlice';
import windowReducer from '../features/windowSlice';

// const serializableMiddleware = getDefaultMiddleware({
// 	serializableCheck: false
// });

export default configureStore({
	reducer: {
		user: userReducer,
		app: appReducer,
		channel: channelReducer,
		message: messageReducer,
		member: memberReducer,
		window: windowReducer
	} //,
	//middleware: serializableMiddleware
});
