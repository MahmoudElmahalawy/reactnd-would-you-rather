import React from "react";

import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const QuestionCard = ({ question, author }) => {
	return (
		<Grid
			sx={{ maxWidth: 600, margin: "0.5rem auto 1.5rem", border: "1px solid #7772", borderRadius: "5px" }}
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
			>
				<Typography component="div">
					<span style={{ fontWeight: "bold" }}>{author?.name}</span> asks:
				</Typography>
			</Grid>
			<Grid sx={{ borderRight: "1px solid #7772", padding: "0.5rem 0" }} align="center" item xs={4} md={4}>
				<Avatar sx={{ minWidth: 100, minHeight: 100 }} src={author?.avatarURL}></Avatar>
			</Grid>
			<Grid sx={{ padding: "0.5rem" }} item xs={8} md={8}>
				<Typography style={{ fontWeight: "bold" }} component="div">
					Would you rather
				</Typography>
				<Typography mb={2} component="div">{`${question?.optionOne.text.substring(0, 10)}...`}</Typography>
				<Button
					component={Link}
					to={`/questions/${question?.id}`}
					fullWidth={true}
					variant="contained"
					color="primary"
				>
					View Poll
				</Button>
			</Grid>
		</Grid>
	);
};

export default QuestionCard;
