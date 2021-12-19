export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const UNSET_AUTHED_USER = "UNSET_AUTHED_USER";

export const setAuthedUser = (authedUser) => {
	return {
		type: SET_AUTHED_USER,
		authedUser,
	};
};

export const unsetAuthedUser = () => {
	return {
		type: UNSET_AUTHED_USER,
	};
};
