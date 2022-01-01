import React from 'react'
import useStyles from "./style.js"



function MintSection(props) {
    const classes = useStyles();
    return (
        <>
        <div className={classes.container}>
            
            <img className={classes.imgcont} src={props.imag}/>  
        </div>
        
       </>
    )
}

export default MintSection
