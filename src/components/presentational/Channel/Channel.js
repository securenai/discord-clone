import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../../Sidebar/Sidebar';
import ChatHeader from '../Channel/ChatHeader';
import ChatContainer from '../../../containers/Chat/ChatContainer';
import MembersContainer from '../../../containers/Members/MembersContainer';

const ChannelWrapper = styled.div`
	display: flex;
	overflow: hidden;
`;
const ChatMain = styled.div`
	width: 90%;
	height: 100vh;
`;
const ChatBody = styled.div`
	display: flex;
	flex-direction: row;
`;

const Channel = () => {
	const [showMemberSideBar, toggleMemberSideBar] = useState(true);

	const handleToggleMemberSideBar = () => {
		toggleMemberSideBar(!showMemberSideBar);
	};

	return (
		<ChannelWrapper>
			<Sidebar />

			<ChatMain>
				<ChatHeader toggleShowMembers={handleToggleMemberSideBar} />
				<ChatBody>
					<ChatContainer />
					{showMemberSideBar === true ? <MembersContainer /> : null}
				</ChatBody>
			</ChatMain>
		</ChannelWrapper>
	);
};

export default Channel;
