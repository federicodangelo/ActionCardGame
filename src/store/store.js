//@flow

import {createStore} from "redux";
import {Store} from "redux"

interface ActionType {
    type: string
}

export const counter = (state: number = 0, action: ActionType) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return 0;
        default:
            return state;
    }
};

let store: Store<number> = createStore(counter);

export default store;
