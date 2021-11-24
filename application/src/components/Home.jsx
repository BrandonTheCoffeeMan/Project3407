import React from 'react'

// components
import PrimaryNav from './Nav/PrimaryNav'

// styles
import classes from '../styles/Home.module.css'

// icons

function Home() {
    return (
        <>
        <PrimaryNav />
        <div className={classes.container}>
            <h1 className={classes.welcome_title}>Welcome to Project3407</h1>
            <p className={classes.welcome_paragraph}>Please register or sign in to view your dashboard!</p>
        </div>
        </>
    )
}

export default Home;