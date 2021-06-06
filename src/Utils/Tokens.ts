import { BigNumber, ethers } from "ethers";
import BN from "bignumber.js";
import { getPair } from "./Web3";

export { BN };

export interface Token {
	symbol: string;
	address: string;
	decimals: number;
	price?: (provider: ethers.providers.Provider) => Promise<BN>;
}

export const pairToPrice: {
	(provider: ethers.providers.Provider, address: string): Promise<BN>;
} = async (provider, address: string) => {
	const pair = getPair(provider, address);
	const reserves = await pair.getReserves();
	const rev1 = new BN(reserves[1].toString());
	const rev0 = new BN(reserves[0].toString());
	return rev1.div(rev0);
};

export function TokenMap(symbol: string): Token | undefined {
	if (symbol === "busd") {
		return {
			symbol: "BUSD",
			address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
			decimals: 18,
		};
	} else if (symbol === "cake") {
		return {
			symbol: "CAKE",
			address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
			decimals: 18,
			price: async (provider: ethers.providers.Provider) =>
				pairToPrice(provider, "0x804678fa97d91B974ec2af3c843270886528a9E6"),
		};
	} else if (symbol === "banana") {
		return {
			symbol: "BANANA",
			address: "0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95",
			decimals: 18,
		};
	}
	return undefined;
}
