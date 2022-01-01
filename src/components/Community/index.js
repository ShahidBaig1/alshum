import React from 'react'
import Button from '@material-ui/core/Button'
import useStyles from './style';

function Community() {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <h1 className={classes.h}>Join our Discord Community</h1>
            <h5 className={classes.p}>The best community in this space with +2,000 members,
                 with games, contests, giveaways, scholarships and more to come!</h5>
            <Button className={classes.btns}>join now !</Button>     
        </div>
    )
}

export default Community
