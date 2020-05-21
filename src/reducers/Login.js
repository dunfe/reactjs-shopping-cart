import {types} from "../action/login"

const initialState = {
    loading: false,
    loggedIn: false,
    user: null,
}

function loginReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.LOGIN.REQUEST:
        case types.LOGOUT.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.LOGIN.SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                user: action.user,
            }
        case types.LOGIN.FAILURE:
            return {
                ...state,
                loading: false,
            }
        case types.LOGOUT.SUCCESS:
            return initialState
        case types.LOGOUT.FAILURE:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export const getUser = state => state.loginReducer.user;
export const getLoggedIn = state => state.loginReducer.loggedIn;

export default loginReducer;
