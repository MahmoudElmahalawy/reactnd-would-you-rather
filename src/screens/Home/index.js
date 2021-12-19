import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import TabPanel from "./TabPanel";

import QuestionsList from "../../components/Question/QuestionsList";
import LoadingBar from "react-redux-loading";

const a11yProps = (index) => {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
};

const Home = ({ questions, authedUserAnswers, loadingBar }) => {
	const [value, setValue] = useState(0);
	const [unAnsweredQuestions, setUnAnsweredQuestions] = useState(null);
	const [answeredQuestions, setAnsweredQuestions] = useState(null);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	useEffect(() => {
		setUnAnsweredQuestions(
			Object.values(questions).filter((question) => !Object.keys(authedUserAnswers).includes(question.id))
		);
		setAnsweredQuestions(
			Object.values(questions).filter((question) => Object.keys(authedUserAnswers).includes(question.id))
		);
	}, [questions, authedUserAnswers]);
	return (
		<>
			{loadingBar.default === 1 ? (
				<LoadingBar
					style={{ backgroundColor: "#1976d2", position: "absolute" }}
					updateTime={10}
					maxProgress={99}
					progressIncrease={10}
				/>
			) : (
				<Box sx={{ width: "100%", textAlign: "center" }}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
							<Tab label="Unanswered Questions" {...a11yProps(0)} />
							<Tab label="Answered Questions" {...a11yProps(1)} />
						</Tabs>
					</Box>
					<TabPanel value={value} index={0}>
						<QuestionsList questions={unAnsweredQuestions} />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<QuestionsList questions={answeredQuestions} />
					</TabPanel>
				</Box>
			)}
		</>
	);
};

export default connect(({ questions, authedUser, loadingBar }) => ({
	questions,
	authedUserAnswers: authedUser?.answers,
	loadingBar,
}))(Home);
