import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import UserCard from "../../components/UserCard";

const Leaderboard = ({ users }) => {
	const [usersInfo, setUsersInfo] = useState([]);

	useEffect(() => {
		setUsersInfo(
			Object.keys(users)
				.map((user) => ({
					name: users[user].name,
					avatar: users[user].avatarURL,
					answersCount: Object.keys(users[user].answers).length,
					questionsCount: users[user].questions.length,
				}))
				.sort((a, b) => b.answersCount + b.questionsCount - (a.answersCount + a.questionsCount))
		);
	}, [users]);

	return (
		<>
			{Object.keys(usersInfo).map((user, index) => (
				<UserCard key={user} userInfo={usersInfo[user]} rankStyle={`rank rank-${index + 1}`} />
			))}
		</>
	);
};

export default connect(({ users }) => ({
	users,
}))(Leaderboard);
