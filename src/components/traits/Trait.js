import React from 'react'
import useStyles from "./style.js"

function Trait() {
    
    const classes = useStyles();
    return (
        <div className={classes.maincon}>
            <div className={classes.inners}>
                <h1 className={classes.hedall}>9999</h1>
                <h4 className={classes.innerhed}>slothz</h4>
            </div>
            <div className={classes.inners}>
                <h1 className={classes.hedall}>156</h1>
                <h4 className={classes.innerhed}>trait</h4>
            </div>
            <div className={classes.inners}>
                <h1 className={classes.hedall}>10</h1>
                <h4 className={classes.innerhed}>community prizes</h4>
            </div>
            <div className={classes.inners}>
                <h1 className={classes.hedall}>20</h1>
                <h4 className={classes.innerhed}>exclusive slothz</h4>
            </div>
        </div>
    )
}

export default Trait
