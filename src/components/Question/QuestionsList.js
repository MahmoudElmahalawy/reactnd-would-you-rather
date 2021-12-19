import React from "react";

import { connect } from "react-redux";

import QuestionCard from "./QuestionCard";

const QuestionsList = ({ users, questions }) => {
	return (
		<>
			{questions?.map((question) => (
				<QuestionCard key={question.id} question={question} author={users[question.author]} />
			))}
		</>
	);
};

export default connect(({ users }) => ({ users }))(QuestionsList);
