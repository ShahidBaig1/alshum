import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import NoEncryptionIcon from '@material-ui/icons/NoEncryption';
import useStyles from "./style";

function Foter() {
    const classes = useStyles();
    return (
        <div className={classes.mainco}>
            <div >
                <h5 className={classes.headings}>2021 SLOTHz</h5>
                <h6 className={classes.hed2}>Made with love by the SLOTHz team!</h6>
            </div>
            <div className={classes.icns}>
            <TwitterIcon/>
            <NoEncryptionIcon/>

            </div>
        </div>
    )
}

export default Foter
