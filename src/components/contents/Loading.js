import React from 'react'
import { makeStyles, CircularProgress } from '@material-ui/core/';

const getStyles = makeStyles(theme => ({
    loadingBox: {
        width: '100%'
    },
    loading: {
       width: 70,
       position: 'absolute',
       left: '50%',
       top: '50%',
       transform: 'translate(-50%, -50%)'
    },
}))


const Loading = () => {

    const classes = getStyles()

    return (
        <div className={classes.loadingBox}>
            <div className={classes.loading}>
                <CircularProgress />
                <div style={{paddingTop:10, marginLeft:-8}}>Loading...</div>
            </div>
       </div>
    )
}

export default Loading 