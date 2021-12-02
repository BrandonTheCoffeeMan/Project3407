import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import loginSchema from './loginSchema';
import { useNavigate } from 'react-router-dom';
import { login } from '../../utils/actions';
import { connect } from 'react-redux'
import PrimaryNav from '../../components/Nav/PrimaryNav'

import classes from '../../styles/Login.module.css'

const Login = (props) => {
    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })
    const [ error, setError ] = useState({
        email: '',
        password: ''
    })
    const [ disabled, setDisabled ] = useState(
        true
    );
    const navigate = useNavigate()

    const submitHandler = event => {
        event.preventDefault();
        const newUser = {
            email: user.email,
            password: user.password
        }
        props.login({newUser, navigate})
    }

    const setUserError = (name, value) => {
        yup
            .reach(loginSchema, name)
            .validate(value)
            .then(() => setError({ ...error, [name]: ''}))
            .catch((error) => {
                setError({ ...error, [name]: error.errors[0]})
            })
    }

    const change = event => {
        const { name, value } = event.target
        setUserError( name, value )
        setUser({ ...user, [name]: value})
    }

    useEffect(() => {
        loginSchema.isValid(user).then((valid) => {
            setDisabled(!valid)
        })
    }, [user])

    return (
        <>
        <PrimaryNav />
        <div className={classes.container}>
            <div className={classes.inner_container}>
                <div className={classes.frame}>
                    <form onSubmit={submitHandler} autoComplete='off'>
                        <h2>Login</h2>
                        <div className={classes.email_container}>
                            <input
                                type='text'
                                name='email'
                                onChange={change}
                                value={user.email}
                                placeholder='Email'
                            />
                        </div>
                        <div className={classes.password_container}>
                            <input
                                type='text'
                                name='password'
                                onChange={change}
                                value={user.password}
                                placeholder='password'
                            />
                        </div>
                        <div className={classes.error_conatiner}>
                            {error.email}
                            {error.password}
                        </div>
                        <button disabled={disabled}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {login})(Login)