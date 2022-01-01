import React from 'react'
import useStyles from "./style.js"

function Cards(props) {
    const classes = useStyles();
    return (
        <div>
            <img className={classes.imgcont} src={props.imags} alt='image here'/> 
        </div>
    )
}

export default Cards;
