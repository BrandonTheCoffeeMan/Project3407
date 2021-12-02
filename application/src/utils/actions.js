import axios from 'axios'
import axiosWithAuth from '../components/Authentication/axiosWithAuth'

// Register Action
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const register = (user) => (dispatch) => {
    console.log('Ive made it to the action!!')
    dispatch({type: REGISTER_START})
    return axios
            .post('http://localhost:5000/api/register', user)
                .then((res) => {
                    console.log('inside the aciton', res)
                    dispatch({type: REGISTER_SUCCESS, payload: res.data})
                })
                .catch((error) => {
                    dispatch({type: REGISTER_FAILURE, payload: error.message})
                })
}

// Login Action
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = (action) => (dispatch) => {
    dispatch({type: LOGIN_START})
    return axiosWithAuth()
    .post('/api/login', action.newUser)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        dispatch({type: LOGIN_SUCCESS, payload: res.data})
        // I need to navigate the user to another page after successful login. Maybe home page or profile? Idk yet...
    })
    .catch((error) => {
        console.log(error)
        dispatch({type: LOGIN_FAILURE, payload: error.message})
    })
}