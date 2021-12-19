import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { handleCreateQuestion } from "../../redux/actions/shared";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CreateQuestion = ({ dispatch, authedUser }) => {
	const [optionOne, setOptionOne] = useState("");
	const [optionTwo, setOptionTwo] = useState("");

	const navigate = useNavigate();

	const createQuestion = () => {
		if (!(optionOne && optionTwo)) return;

		dispatch(
			handleCreateQuestion({
				optionOneText: optionOne,
				optionTwoText: optionTwo,
				author: authedUser.id,
			})
		);
		return navigate("/");
	};

	return (
		<Box sx={{ margin: "1rem auto", width: "fit-content", textAlign: "center" }}>
			<Box align="center" p={1} m={5} border="1px solid #7772" borderRadius="5px" width="400px">
				<Box borderBottom="1px solid #7772" p={1}>
					<Typography sx={{ fontSize: "1.25em" }} component="h1">
						Create New Question
					</Typography>
				</Box>

				<Box mt={2} mb={2}>
					<Typography component="p">Complete the question:</Typography>
					<Typography sx={{ fontWeight: "bold" }} component="h2">
						Would you rather...
					</Typography>
				</Box>

				<TextField
					fullWidth={true}
					id="outlined-basic"
					label="Option One"
					variant="outlined"
					onChange={(e) => setOptionOne(e.target.value)}
				/>
				<Typography sx={{ margin: "0.5rem auto" }}>OR</Typography>
				<TextField
					fullWidth={true}
					id="outlined-basic"
					label="Option Two"
					variant="outlined"
					onChange={(e) => setOptionTwo(e.target.value)}
				/>

				<Button
					sx={{ margin: "2rem 0 1rem", textTransform: "capitalize" }}
					fullWidth={true}
					onClick={createQuestion}
					variant="contained"
					color="primary"
				>
					Create
				</Button>
			</Box>
		</Box>
	);
};

export default connect(({ authedUser }) => ({
	authedUser,
}))(CreateQuestion);
