import React from "react";

import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function UserCard({ userInfo, rankStyle }) {
	const { name, avatar, answersCount, questionsCount } = userInfo;

	return (
		<Grid
			sx={{ maxWidth: 600, margin: "2rem auto 1.5rem", border: "1px solid #7772", borderRadius: "5px" }}
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			container
		>
			<Grid sx={{ borderRight: "1px solid #7772", padding: "0.5rem 0" }} align="center" item xs={3} md={3}>
				<Avatar sx={{ minWidth: 100, minHeight: 100 }} src={avatar}></Avatar>
			</Grid>
			<Grid sx={{ padding: "0.5rem" }} item xs={6} md={6}>
				<Typography sx={{ fontWeight: "bold", marginBottom: "1rem" }} component="div">
					{name}
				</Typography>
				<Typography component="div">
					Answered Questions: <span style={{ float: "right" }}>{answersCount}</span>
				</Typography>
				<Typography component="div">
					Created Questions: <span style={{ float: "right" }}>{questionsCount}</span>
				</Typography>
			</Grid>
			<Grid sx={{ borderRight: "1px solid #7772", padding: "0.5rem 0" }} align="center" item xs={3} md={3}>
				<Typography component="div">Score</Typography>
				<Typography component="div" className={rankStyle}>
					{answersCount + questionsCount}
				</Typography>
			</Grid>
		</Grid>
	);
}
