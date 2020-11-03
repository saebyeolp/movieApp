import React from 'react'
import { makeStyles, Button } from '@material-ui/core/';

const getStyles = makeStyles(theme => ({
    pageBox: {
        width: '100%',
        marginBottom: 50,
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    pageNum: {
        display: 'inline-block',
        padding: 10
    }
}))


const Pagination = (props) => {
    const classes = getStyles()

    return (
        <div className={classes.pageBox}>
            <Button 
                variant="contained" 
                color="primary"
                style={{marginRight: 10}}
                onClick={()=> props.handlePageNumber(props.page - 1)}
            >
                    prev
            </Button>
            <span className={classes.pageNum}>{props.page}</span>
            <Button 
                variant="contained" 
                color="primary"
                style={{marginLeft: 10}}
                onClick={()=> props.handlePageNumber(props.page + 1)}
            >
                    next
            </Button>
        </div>
    )
}

export default Pagination 