import React, { useState, useEffect } from 'react';
import { selectChannelId } from '../../features/channelSlice';
import { useSelector } from 'react-redux';
import MembersList from '../../components/presentational/Members/MembersList';
import db from '../../firebase';

const MembersContainer = () => {
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

	return <MembersList members={members} />;
};

export default MembersContainer;
