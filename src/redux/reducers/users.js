import { LOAD_USERS } from "../actions/users";
import { CREATE_QUESTION, SUBMIT_ANSWER } from "../actions/shared";

export default function users(state = {}, action) {
	switch (action.type) {
		case LOAD_USERS:
			return {
				...state,
				...action.users,
			};
		case CREATE_QUESTION:
			return {
				...state,
				[action.question.author]: {
					...state[action.question.author],
					questions: state[action.question.author].questions.concat([action.question.id]),
				},
			};
		case SUBMIT_ANSWER:
			const { qid, authedUser, answer } = action;
			return {
				...state,
				[authedUser]: {
					...state[authedUser],
					answers: {
						...state[authedUser].answers,
						[qid]: answer,
					},
				},
			};
		default:
			return state;
	}
}
