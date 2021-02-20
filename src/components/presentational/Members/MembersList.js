import React from 'react';
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

const MemberContainer = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	width: 300px;
`;

const MemberCard = styled.div`
	margin-left: 5px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 150px !important;
	height: 50px;
	flex-wrap: wrap;
	color: white;
	& > div {
		width: 40px;
	}
	& > span {
		margin-left: 10px;
	}
`;

const MemberTitle = styled.div`
	height: 30px;
	font-size: 12px;
	color: gray;
	font-weight: 500;
`;

const MembersList = ({ members }) => {
	return (
		<MemberContainer>
			<MemberTitle>MEMBERS</MemberTitle>
			{members === null
				? ''
				: members.map((member) => (
						<MemberCard key={member.id}>
							<div>
								<Avatar src={member.data.photo} />
							</div>
							<span>{member.data.displayName}</span>
						</MemberCard>
				  ))}
		</MemberContainer>
	);
};

export default MembersList;
