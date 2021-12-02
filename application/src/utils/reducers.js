import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './actions'

const initialState = {
    user: {},
    isLoading: true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
            return {
                ...state,
                isLoading: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        case LOGIN_START:
            return {
                ...state
            }
        case LOGIN_SUCCESS:
            return {
                ...state
            }
        case LOGIN_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
}

export default reducer;