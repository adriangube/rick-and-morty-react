import {AsyncState, State} from "../domain";

export const shouldFetch = (state: State, selector: any): boolean => {
    const asyncState: AsyncState<any> = selector(state);
    if(!asyncState?.state && !asyncState?.isFetching){
        return true;
    }else{
        return asyncState?.didInvalidate || false
    }
}
