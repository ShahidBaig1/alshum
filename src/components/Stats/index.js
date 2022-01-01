import React from 'react'
import useStyles from './style'


function Statsec() {
    const classes = useStyles();
    return (
        <div className={classes.mainc}>
            <h1 className={classes.heading}>stats</h1>
            <h5 className={classes.comb}>
                Each SLOTHz is randomly generated with
                 a combination of more than 157 traits, 
                 but not only that, there are different types with different rarities.</h5>
        </div>
    )
}

export default Statsec;
