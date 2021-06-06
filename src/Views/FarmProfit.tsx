import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
	Grid,
	Table,
	TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";
import { BigNumber } from "@ethersproject/bignumber";
import { useWeb3React } from "@web3-react/core";
import { Label } from "@material-ui/icons";
import { BN, TokenMap } from "../Utils/Tokens";

const columns = [
	{ name: "id", title: "ID" },
	{ name: "product", title: "Product" },
	{ name: "owner", title: "Owner" },
];
const rows = [
	{ id: 0, product: "DevExtreme", owner: "DevExpress" },
	{ id: 1, product: "DevExtreme Reactive", owner: "DevExpress" },
];

export const FarmProfit = () => {
	const [price, setPrice] = useState<BN>(new BN(0));
	const { account, chainId, library } = useWeb3React();

	React.useEffect(() => {
		const cakeToken = TokenMap("cake");
		if (chainId && cakeToken && cakeToken.price) {
			cakeToken.price(library).then((val: React.SetStateAction<BN>) => {
				setPrice(val);
				return val;
			});
		}
	}, []);

	return (
		<Paper>
			<>{price.toFormat(2)}</>
			<Grid rows={rows} columns={columns}>
				<Table />
				<TableHeaderRow />
			</Grid>
		</Paper>
	);
};
