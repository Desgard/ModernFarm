import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FarmNavbar } from "./Components/FarmNavbar";
import { Container } from "@material-ui/core";
import { FarmProfit } from "./Views/FarmProfit";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

const getLibrary = (provider: any) => {
	return new ethers.providers.Web3Provider(provider);
};

function App() {
	return (
		<div className="App">
			<Web3ReactProvider getLibrary={getLibrary}>
				<FarmNavbar />
				<Container
					maxWidth="xl"
					style={{
						paddingTop: "30px",
					}}
				>
					<FarmProfit />
				</Container>
			</Web3ReactProvider>
		</div>
	);
}

export default App;
