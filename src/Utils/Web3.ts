import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";
import { MerlinCake__factory, PancakePair__factory } from "../Contracts";

export const injected = new InjectedConnector({ supportedChainIds: [56] });

export const getMerlinCakeVault = (
	provider: ethers.providers.Provider,
	address: string
) => {
	return MerlinCake__factory.connect(address, provider);
};

export const getPair = (
	provider: ethers.providers.Provider,
	address: string
) => {
	return PancakePair__factory.connect(address, provider);
};
