import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

const LinearProgressWithLabel = (props) => {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Box sx={{ width: "100%", mr: 1 }}>
				<LinearProgress variant="determinate" {...props} />
			</Box>
			<Box sx={{ minWidth: 35 }}>
				<Typography variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
			</Box>
		</Box>
	);
};

const AnsweredQuestion = ({ question, author, userId }) => {
	const optionOneVotesCount = question.optionOne.votes.length;
	const optionTwoVotesCount = question.optionTwo.votes.length;
	const totalVotesCount = optionOneVotesCount + optionTwoVotesCount;

	return (
		<Grid
			sx={{ maxWidth: 600, margin: "2rem auto", border: "1px solid #7772", borderRadius: "5px" }}
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			container
		>
			<Grid
				sx={{ padding: "0.5rem 0", backgroundColor: "#7771", borderBottom: "1px solid #7772" }}
				item
				xs={12}
				md={12}
				align="center"
			>
				<Typography component="div">
					Asked by <span style={{ fontWeight: "bold" }}>{author.name}</span>
				</Typography>
			</Grid>
			<Grid sx={{ borderRight: "1px solid #7772" }} item xs={4} md={4} align="center">
				<Avatar sx={{ minWidth: 100, minHeight: 100 }} src={author?.avatarURL}></Avatar>
			</Grid>
			<Grid item xs={8} md={8} p={3}>
				<Typography component="h1" variant="h6">
					Results:
				</Typography>

				<Box className={"option " + (question.optionOne.votes.includes(userId) ? "selected-option" : "")}>
					<Typography sx={{ fontWeight: "bold" }}>Would you rather {question.optionOne.text}?</Typography>
					<LinearProgressWithLabel value={(optionOneVotesCount / totalVotesCount) * 100} />
					<Typography component="div" align="center">
						{optionOneVotesCount} out of {totalVotesCount} votes
					</Typography>
				</Box>
				<Box className={"option " + (question.optionTwo.votes.includes(userId) ? "selected-option" : "")}>
					<Typography sx={{ fontWeight: "bold" }}>Would you rather {question.optionTwo.text}?</Typography>
					<LinearProgressWithLabel value={(optionTwoVotesCount / totalVotesCount) * 100} />
					<Typography component="div" align="center">
						{optionTwoVotesCount} out of {totalVotesCount} votes
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default AnsweredQuestion;
