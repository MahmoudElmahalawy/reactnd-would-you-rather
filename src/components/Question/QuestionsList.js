import React from "react";

import { connect } from "react-redux";

import QuestionCard from "./QuestionCard";

const QuestionsList = ({ users, questions }) => {
	return (
		<>
			{questions?.length > 0 ? (
				<>
					{questions?.map((question) => (
						<QuestionCard key={question.id} question={question} author={users[question.author]} />
					))}
				</>
			) : (
				<div style={{ color: "#7776", userSelect: "none" }}>No Questions</div>
			)}
		</>
	);
};

export default connect(({ users }) => ({ users }))(QuestionsList);
