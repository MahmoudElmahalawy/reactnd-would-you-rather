import React, { useState } from "react";
import { connect } from "react-redux";
import { handleSubmitAnswer } from "../../redux/actions/shared";

import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const UnansweredQuestion = ({ dispatch, question, author, authedUser }) => {
	const [value, setValue] = useState("optionOne");

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
					<span style={{ fontWeight: "bold", paddingLeft: "1rem" }}>{author.name}</span> asks:
				</Typography>
			</Grid>
			<Grid sx={{ borderRight: "1px solid #7772", padding: "0.5rem 0" }} align="center" item xs={4} md={4}>
				<Avatar sx={{ minWidth: 100, minHeight: 100 }} src={author?.avatarURL}></Avatar>
			</Grid>
			<Grid sx={{ padding: "0.5rem" }} item xs={8} md={8}>
				<Typography component="div" style={{ fontWeight: "bold" }} noWrap>
					Would you rather...
				</Typography>

				<RadioGroup aria-label="gender" name="gender1" value={value} onChange={(e) => setValue(e.target.value)}>
					<FormControlLabel
						value="optionOne"
						control={<Radio color="primary" />}
						label={question.optionOne.text}
					/>
					<FormControlLabel
						value="optionTwo"
						control={<Radio color="primary" />}
						label={question.optionTwo.text}
					/>
				</RadioGroup>

				<Button
					onClick={() => dispatch(handleSubmitAnswer(authedUser?.id, question.id, value))}
					fullWidth={true}
					variant="contained"
					color="primary"
				>
					Submit
				</Button>
			</Grid>
		</Grid>
	);
};

export default connect(({ authedUser }) => ({
	authedUser,
}))(UnansweredQuestion);
