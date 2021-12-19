import React, { useState } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { unsetAuthedUser } from "../redux/actions/authedUser";

import Navigation from "@mui/material/BottomNavigation";
import NavigationAction from "@mui/material/BottomNavigationAction";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import HomeIcon from "@mui/icons-material/Home";
import AddCommentIcon from "@mui/icons-material/AddComment";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";

const Navbar = ({ dispatch, authedUser }) => {
	const [value, setValue] = useState(0);
	const [anchorEl, setAnchorEl] = useState(null);

	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleSignOut = (e) => {
		e.stopPropagation();
		dispatch(unsetAuthedUser());
		handleClose();
	};

	return (
		<nav
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: 50,
				borderBottom: "1px solid #7772",
			}}
		>
			<Navigation
				style={{ flexGrow: 0.5, justifyContent: authedUser ? "start" : "center" }}
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				showLabels
			>
				<NavigationAction
					sx={{ minWidth: "fit-content" }}
					component={Link}
					to="/"
					label="Home"
					icon={<HomeIcon />}
				/>
				<NavigationAction
					sx={{ minWidth: "fit-content" }}
					component={Link}
					to="/questions/create"
					label="New Question"
					icon={<AddCommentIcon />}
				/>
				<NavigationAction
					sx={{ minWidth: "fit-content" }}
					component={Link}
					to="/leaderboard"
					label="Leader Board"
					icon={<LeaderboardIcon />}
				/>
			</Navigation>
			{authedUser && (
				<div style={{ display: "flex", alignSelf: "center" }}>
					<Button
						sx={{ textTransform: "capitalize" }}
						id="authed-user-panel-button"
						aria-controls="authed-user-panel-menu"
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}
					>
						<Avatar src={authedUser?.avatarURL} />
						<span className="authed-user-name">{authedUser.name}</span>
					</Button>
					<Menu
						id="authed-user-panel-menu"
						aria-labelledby="authed-user-panel-button"
						anchorEl={anchorEl}
						open={open}
						transformOrigin={{ horizontal: "right", vertical: "top" }}
						anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
						onClose={handleClose}
					>
						<MenuItem className="authed-user-name-menu" disabled>
							<span>{authedUser.name}</span>
						</MenuItem>
						<MenuItem onClick={handleSignOut}>
							<ListItemIcon>
								<Logout fontSize="small" />
							</ListItemIcon>
							Sign out
						</MenuItem>
					</Menu>
				</div>
			)}
		</nav>
	);
};

export default connect(({ authedUser }) => ({
	authedUser,
}))(Navbar);
