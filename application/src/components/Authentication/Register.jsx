import React, {useEffect, useState} from 'react'
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import formSchema from './formSchema'
import classes from '../../styles/Register.module.css'
import PrimaryNav from '../Nav/PrimaryNav'
import { register } from '../../utils/actions'
import { connect } from 'react-redux'



// Register - Needs to be passed register action once created!
const Register = ({register}) => {

    // Initial state declarations

    // State to set the user state for form submission.
    const [ user, setUser ] = useState({
        username: '',
        email: '',
        tag: '',
        password: ''
    });

    // State to set errors for hostile insert attempts.
    const [ error, setError ] = useState({
        username: '',
        email: '',
        tag: '',
        password: ''
    })

    // State to disable the form until all validators are met.
    const [ disabled, setDisabled ] = useState(
        true
    );

    // End Initial state declarations

    // Pulled from react-router-dom to redirect user to the login page when successfully registering.
    const navigate = useNavigate()

    // Handles the submit event
    const submitHandler = event => {
        event.preventDefault()
        const newUser = {
            username: user.username,
            email: user.email,
            tag: user.tag,
            password: user.password
        }
        register(newUser)
        navigate('/Project3407-Login')
    }
        // register(newUser) - Once action is created un-comment this to allow the newUser to be passed to the register action!
        // navigate.push('/') This will redirect to the login page - be sure to update this! The axios request underneath this is used until I get the redux store setup.
    //     axios.post('http://localhost:5000/api/register', newUser)
    //         .then(() => {
    //             navigate.push('/')
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }
    // I will setup yup validation here:
    //
    //
    //

    // handling Errors
    const setUserError = ( name, value ) => {
        yup
            .reach(formSchema, name)
            .validate(value)

            .then(() => setError({
                ...error,
                [name]: ''
            }))
            .catch((error) => {
                setError({
                    ...error,
                    [name]: error.errors[0]
                })
            })
    }

    // handling onChange
    const change = event => {
        const { name, value } = event.target
        setUserError(name, value)
        setUser({
            ...user,
            [name]: value
        })
    }

    useEffect(() => {
        formSchema.isValid(user).then((valid) => {
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
                        <h2>Register</h2>
                        <div className={classes.email_container}>
                            <input
                                type='text'
                                name='email'
                                placeholder='Email'
                                onChange={change}
                                value={user.email}
                            />
                        </div>
                        <div className={classes.username_conatiner}>
                            <input 
                                type='text' 
                                name='username' 
                                placeholder='Username' 
                                onChange={change} 
                                value={user.username}
                            />
                        </div>
                        <div className={classes.tag_container}>
                            <input
                                type='text'
                                name='tag'
                                placeholder='Handle'
                                onChange={change}
                                value={user.tag}
                            />
                        </div>
                        <div className={classes.password_container}>
                            <input
                                type='text'
                                name='password'
                                placeholder='Password'
                                onChange={change}
                                value={user.password}
                            />
                        </div>
                        <div className={classes.error_container}>
                            {error.email}
                            {error.username}
                            {error.tag}
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

export default connect(mapStateToProps, {register})(Register)