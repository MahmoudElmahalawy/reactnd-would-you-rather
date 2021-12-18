import React, { useState } from "react";

import { connect } from "react-redux";

import Navigation from "@mui/material/BottomNavigation";
import NavigationAction from "@mui/material/BottomNavigationAction";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";

import HomeIcon from "@mui/icons-material/Home";
import AddCommentIcon from "@mui/icons-material/AddComment";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

const Navbar = ({ authedUser }) => {
	const [value, setValue] = useState(0);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		console.log("menu click");
	};
	const handleClose = () => {
		setAnchorEl(null);
		console.log("close click");
	};
	const handleSignOut = () => {
		console.log("sign out");
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
				<NavigationAction sx={{ minWidth: "fit-content" }} label="Home" icon={<HomeIcon />} />
				<NavigationAction sx={{ minWidth: "fit-content" }} label="New Question" icon={<AddCommentIcon />} />
				<NavigationAction sx={{ minWidth: "fit-content" }} label="Leader Board" icon={<LeaderboardIcon />} />
			</Navigation>
			{authedUser && (
				<div style={{ display: "flex", alignSelf: "center" }}>
					<Button
						sx={{ textTransform: "capitalize" }}
						id="demo-positioned-button"
						aria-controls="demo-positioned-menu"
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}
					>
						<Avatar />
						<span className="authed-user-name">{authedUser.name}</span>
					</Button>
					<Menu
						id="demo-positioned-menu"
						aria-labelledby="demo-positioned-button"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						transformOrigin={{ horizontal: "right", vertical: "top" }}
						anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
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
