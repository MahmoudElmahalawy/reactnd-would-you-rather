import React, { useEffect } from "react";

import { connect } from "react-redux";
import { loadUsersData } from "../redux/actions/shared";

import Navbar from "./Navbar";
import Login from "./Login";

import LoadingBar from "react-redux-loading";

function App({ dispatch, users, loadingBar }) {
	useEffect(() => {
		dispatch(loadUsersData());
	}, [dispatch]);

	return (
		<>
			<Navbar />
			{loadingBar.default === 1 ? (
				<LoadingBar
					style={{ backgroundColor: "#1976d2", position: "absolute" }}
					updateTime={10}
					maxProgress={99}
					progressIncrease={10}
				/>
			) : (
				<Login />
			)}
		</>
	);
}

export default connect(({ authedUser, users, loadingBar }) => ({
	authedUser,
	users,
	loadingBar,
}))(App);
