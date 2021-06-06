import {
	AppBar,
	Button,
	IconButton,
	Toolbar,
	Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";

import { useWeb3React } from "@web3-react/core";
import { injected } from "../Utils/Web3";

const useStyle = makeStyles({
	root: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		border: 0,
		borderRadius: 3,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "white",
		height: 48,
		padding: "0 30px",
	},
});

export const FarmNavbar = () => {
	const wallet = useWeb3React();
	React.useEffect(() => {
		setTimeout(() => {
			wallet.activate(injected);
		}, 500);
	}, []);

	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
					onClick={() => {
						wallet.activate(injected);
					}}
				>
					<Menu />
				</IconButton>
				<Typography variant="h6">现代农场收益</Typography>
			</Toolbar>
		</AppBar>
	);
};
