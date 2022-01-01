import React from 'react'
import Slotsection from '../components/slotSection/index'
import Map from '../components/mintnow/Map'
import useStyles from "./style.js"

function Home() {
    const classes = useStyles();
    return (
        <div>
            <Slotsection/>
            <div className={classes.mapsec}>
            <Map/>
            </div>
        </div>
    )
}

export default Home
