import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "./types";

export const getItems = () => {
    return {
        type: GET_ITEMS
    };
};

export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
};

export const addItem = item => {
    return {
        type: ADD_ITEM,
        payload: item
    };
};

export const UpdateItem = name => {
    return {
        type: UPDATE_ITEM,
        payload: name
    };
};