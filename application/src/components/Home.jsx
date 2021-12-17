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
        <header style={{ backgroundImage: 'url(/img/CTreeCloseUp.jpg' }} className={classes.header_container}>
            <div className={classes.header_inner_shift}>
                <div className={classes.header_content_left}>
                    <h1 className={classes.header_content_left_title}>
                        SquadFeed
                    </h1>
                    <h2>

                    </h2>
                </div>
                <div className={classes.header_content_right}>

                </div>
            </div>
        </header>
        </>
    )
}

export default Home;