import { LOAD_QUESTIONS } from "../actions/questions";
import { CREATE_QUESTION, SUBMIT_ANSWER } from "../actions/shared";

export const questions = (state = {}, action) => {
	switch (action.type) {
		case LOAD_QUESTIONS:
			return {
				...state,
				...action.questions,
			};
		case CREATE_QUESTION:
			return {
				...state,
				[action.question.id]: action.question,
			};
		case SUBMIT_ANSWER:
			const { qid, answer, authedUser } = action;
			return {
				...state,
				[qid]: {
					...state[qid],
					[answer]: {
						...state[qid][answer],
						votes: state[qid][answer].votes.concat([authedUser]),
					},
				},
			};
		default:
			return state;
	}
};
