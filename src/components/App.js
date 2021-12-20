import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { connect } from "react-redux";
import { loadUsersData } from "../redux/actions/shared";

import Navbar from "./Navbar";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Leaderboard from "../screens/Leaderboard";
import NewQuestion from "../screens/NewQuestion";
import QuestionDetails from "../screens/QuestionDetails";
import NotFound from "../screens/NotFound";

import LoadingBar from "react-redux-loading";

function App({ dispatch, authedUser, loadingBar }) {
	useEffect(() => {
		dispatch(loadUsersData());
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Navbar />
			{loadingBar.default === 1 ? (
				<LoadingBar
					style={{ backgroundColor: "#1976d2", position: "absolute" }}
					updateTime={10}
					maxProgress={99}
					progressIncrease={10}
				/>
			) : (
				<Routes>
					<Route exact path="/" element={authedUser ? <Home /> : <Login />} />
					<Route exact path="/add" element={authedUser ? <NewQuestion /> : <Login />} />
					<Route exact path="/leaderboard" element={authedUser ? <Leaderboard /> : <Login />} />
					<Route exact path="/questions/:questionId" element={authedUser ? <QuestionDetails /> : <Login />} />
					<Route exact path="*" element={authedUser ? <NotFound /> : <Login />} />
				</Routes>
			)}
		</BrowserRouter>
	);
}

export default connect(({ authedUser, loadingBar }) => ({
	authedUser,
	loadingBar,
}))(App);
