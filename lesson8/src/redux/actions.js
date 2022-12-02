
import { LOAD_USERS, ERROR, LOADING } from './actionTypes';


export const loadUsersAction = (data) => ({
    type: LOAD_USERS,
    payload: data
})

export const loadingAction = () => ({
    type: LOADING,
})

export const errorAction = (err) => ({
    type: ERROR,
    payload: err
})