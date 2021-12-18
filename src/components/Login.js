import React, { useState } from "react";

import { connect } from "react-redux";
import { setAuthedUser } from "../redux/actions/authedUser";
import { loadQuestionsData } from "../redux/actions/shared";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

const Login = ({ dispatch, users }) => {
	const [selectedUser, setSelectedUser] = useState("");

	const signIn = () => {
		dispatch(setAuthedUser(users[selectedUser]));
		dispatch(loadQuestionsData());
	};

	return (
		<Card sx={{ maxWidth: 500, margin: "1rem auto", border: "1px solid #7772" }}>
			<CardContent>
				<Box
					sx={{
						backgroundColor: "#EEE9",
						textAlign: "center",
						padding: 2,
						borderRadius: "5px 5px 0 0",
					}}
				>
					<Typography sx={{ fontWeight: "bold" }} gutterBottom>
						Welcome to the Would You Rather App!
					</Typography>

					<Typography color="textSecondary">Please sign in to continue</Typography>
				</Box>

				<Box sx={{ textAlign: "center", margin: "0.5rem 0" }}>
					<img width="300" src="/assets/images/misc/logo.png" alt="App Logo" loading="lazy" />
				</Box>

				{/* <SelectUser setSelectedUser={setSelectedUser} /> */}
				<FormControl fullWidth>
					<InputLabel id="user-select-label">Select User</InputLabel>
					<Select
						labelId="user-select-label"
						id="user-select"
						value={selectedUser}
						label="Select User"
						onChange={(e) => setSelectedUser(users[e.target.value].id)}
					>
						{Object.keys(users).map((user) => (
							<MenuItem key={users[user].id} value={users[user].id}>
								{users[user].name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</CardContent>
			<CardActions>
				<Button
					sx={{ padding: "0.75rem", fontSize: "1.05em", textTransform: "capitalize", fontWeight: "bold" }}
					fullWidth
					variant="contained"
					onClick={signIn}
				>
					Sign in
				</Button>
			</CardActions>
		</Card>
	);
};

export default connect(({ users }) => ({
	users,
}))(Login);
