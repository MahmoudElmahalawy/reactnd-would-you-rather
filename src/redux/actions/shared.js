import { _getQuestions, _saveQuestion, _saveQuestionAnswer, _getUsers } from "../../utils/_DATA";
import { loadQuestions } from "./questions";
import { loadUsers } from "./users";
import { setAuthedUser } from "./authedUser";

import { showLoading, hideLoading } from "react-redux-loading";

export const CREATE_QUESTION = "CREATE_QUESTION";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";

export function loadQuestionsData() {
	return (dispatch) => {
		dispatch(showLoading());
		_getQuestions().then((questions) => {
			dispatch(loadQuestions(questions));
			dispatch(hideLoading());
		});
	};
}

export function loadUsersData() {
	return (dispatch) => {
		dispatch(showLoading());
		_getUsers().then((users) => {
			dispatch(loadUsers(users));
			dispatch(hideLoading());
		});
	};
}

export function createQuestion(question) {
	return {
		type: CREATE_QUESTION,
		question,
	};
}

export function handleCreateQuestion(question) {
	return (dispatch) => {
		dispatch(showLoading());
		_saveQuestion(question).then((savedQuestion) => {
			dispatch(createQuestion(savedQuestion));
			dispatch(hideLoading());
		});
	};
}

export function submitAnswer(authedUser, qid, answer) {
	return {
		type: SUBMIT_ANSWER,
		authedUser,
		qid,
		answer,
	};
}

export function handleSubmitAnswer(authedUser, qid, answer) {
	return (dispatch, getState) => {
		dispatch(showLoading());
		_saveQuestionAnswer({ authedUser, qid, answer }).then((savedAnswer) => {
			dispatch(submitAnswer(authedUser, qid, answer));
			const { users } = getState();
			dispatch(setAuthedUser(users[authedUser]));
			dispatch(hideLoading());
		});
	};
}
