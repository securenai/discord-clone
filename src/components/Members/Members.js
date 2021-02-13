import React, { useState, useEffect } from 'react';
import {
	MemberContainer,
	MemberCard,
	ProfilePic,
	MemberName,
	MemberTitle
} from './style';
import { selectChannelId } from '../../features/channelSlice';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import db from '../../firebase';

const Members = () => {
	const channelId = useSelector(selectChannelId);
	const [members, setMembers] = useState(null);

	useEffect(() => {
		if (channelId) {
			db.collection('users').onSnapshot((snapshot) =>
				setMembers(
					snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
				)
			);
		}
	}, [channelId]);

	return (
		<MemberContainer>
			<MemberTitle>MEMBERS</MemberTitle>
			{members === null
				? ''
				: members.map((member) => (
						<MemberCard key={member.id}>
							<ProfilePic>
								<Avatar src={member.data.photo} />
							</ProfilePic>
							<MemberName>{member.data.displayName}</MemberName>
						</MemberCard>
				  ))}
		</MemberContainer>
	);
};

export default Members;
