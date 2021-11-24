import React from 'react'

// components

// styles
import classes from '../../styles/PrimaryNav.module.css'


function PrimaryNav() {
    return (
        <div className={classes.container}>
            <div className={classes.inner_container}>
                <div className={classes.grid_one}>
                    <div className={classes.grid_one_item}>
                        <a href='/' className={classes.grid_one_item_inner}>
                            Home
                        </a>
                    </div>
                    <div className={classes.grid_one_item}>
                        <a href='/' className={classes.grid_one_item_inner}>
                            Profile
                        </a>
                    </div>
                    <div className={classes.grid_one_item}>
                        <a href='/' className={classes.grid_one_item_inner}>
                            Connections
                        </a>
                    </div>
                    <div className={classes.grid_one_item}>
                        <a href='/' className={classes.grid_one_item_inner}>
                            Interests
                        </a>
                    </div>
                    <div className={classes.grid_one_item}>
                        <a href='/' className={classes.grid_one_item_inner}>
                            Communities
                        </a>
                    </div>
                </div>
                <div className={classes.grid_two}>
                    <div className={classes.grid_two_item}>
                        <button className={classes.grid_two_item_inner}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrimaryNav;