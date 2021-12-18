import React from "react";

import Navigation from "@mui/material/BottomNavigation";
import NavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from "@mui/icons-material/Home";
import AddCommentIcon from "@mui/icons-material/AddComment";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

const Navbar = (props) => {
	const [value, setValue] = React.useState(0);

	return (
		<Navigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			showLabels
		>
			<NavigationAction label="Home" icon={<HomeIcon />} />
			<NavigationAction label="New Question" icon={<AddCommentIcon />} />
			<NavigationAction label="Leader Board" icon={<LeaderboardIcon />} />
		</Navigation>
	);
};

export default Navbar;
