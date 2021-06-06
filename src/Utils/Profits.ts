import { action, computed, makeAutoObservable } from "mobx";
import React, { useContext } from "react";

export class ProfitsStore {
	totalProfits_BUSD: number = 0;

	merlinProfits_CAKE: number = 0;
	aperocketProfits_BANANA: number = 0;

	constructor() {
		makeAutoObservable(this);
	}

	@action changeTotalProfits(one: number) {
		this.totalProfits_BUSD = one;
	}

	@action updateProfits() {}
}

const ProfitsStoreContext = React.createContext(new ProfitsStore());

export const useProfitsStore = () => {
	const profitStore = useContext(ProfitsStoreContext);
	return profitStore;
};
