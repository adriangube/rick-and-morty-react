import {applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";


const composeEnhancers = (typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ == "function" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({name: `${document.title} - BBVA Dashboard`})) || compose;

export const enhancers =  composeEnhancers(applyMiddleware(thunk));
