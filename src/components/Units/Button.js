import React from 'react'
import Button from '@material-ui/core/Button'
import useStyles from "./style.js"

function Button1() {
    const classes = useStyles();
    return (
        <div>
            <Button className={classes.butt}>mint now</Button>
        </div>
    )
}

export default Button1
