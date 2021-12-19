import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { connect } from "react-redux";
import { loadUsersData } from "../redux/actions/shared";

import Navbar from "./Navbar";
import Login from "../screens/Login";
import Home from "../screens/Home";

import LoadingBar from "react-redux-loading";

function App({ dispatch, authedUser, users, loadingBar }) {
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
				<BrowserRouter>
					<Routes>
						<Route exact path="/" element={authedUser ? <Home /> : <Login />} />
						{/* <Route exact path="/search" element={<Search />} /> */}
					</Routes>
				</BrowserRouter>
			)}
		</>
	);
}

export default connect(({ authedUser, loadingBar }) => ({
	authedUser,
	loadingBar,
}))(App);
