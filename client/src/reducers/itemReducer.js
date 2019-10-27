import uuid from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "../actions/types";

const initialState = {
    items: [
        { id: uuid(), name: "Cookies"},
        { id: uuid(), name: "Chocolate"},
        { id: uuid(), name: "Brownies"},
        { id: uuid(), name: "Coxinha"}
    ]
};

export default function(state = initialState, action) {
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}