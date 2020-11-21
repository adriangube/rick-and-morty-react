import {State} from "../../domain";

export const selectedPageSelector = (state: State) => state?.selectedPage || 1;
