import { LOADING, LOAD_USERS } from "../../actionTypes"
import { loadUsersAction, errorAction, loadingAction } from './../../actions';
import { ERROR } from './../../actionTypes';

const initialState = {
    users: [],
    loading: false,
    error: null

}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };

        case LOAD_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };

        case ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state
    }
}


export const loadUsers = () => {
    return async dispatch => {
        dispatch(loadingAction())
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const json = await response.json();
            dispatch(loadUsersAction(json))
        } catch (error) {
            dispatch(errorAction(error))
        }
    }

}