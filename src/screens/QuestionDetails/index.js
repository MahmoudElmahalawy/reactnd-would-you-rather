import React from "react";

import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import AnsweredQuestion from "../../components/Question/AnsweredQuestion";
import UnansweredQuestion from "../../components/Question/UnansweredQuestion";

const QuestionDetails = ({ questions, users, authedUser }) => {
	const { questionId } = useParams();
	const question = questions[questionId];
	if (!question) return <div>error not found</div>;

	return (
		<>
			{Object.keys(authedUser.answers).includes(question.id) ? (
				<AnsweredQuestion question={question} author={users[question.author]} userId={authedUser.id} />
			) : (
				<UnansweredQuestion question={question} author={users[question.author]} userId={authedUser.id} />
			)}
		</>
	);
};

export default connect(({ questions, users, authedUser }) => ({
	questions,
	users,
	authedUser,
}))(QuestionDetails);
