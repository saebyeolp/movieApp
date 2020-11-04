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
    },
    btnColor: {
        backgroundColor: '#FEE510',
        color: 'black'
    }
}))


const Pagination = (props) => {
    const classes = getStyles()
    

    return (
        <div className={classes.pageBox}>
            <Button 
                disabled={props.page <= 1 ? true : false}
                variant="contained" 
                className={classes.btnColor}
                style={{marginRight: 10}}
                onClick={()=> props.handlePageNumber(props.page - 1)}
            >
                    prev
            </Button>
            <span className={classes.pageNum}>{props.page} / {props.totalPages}</span>
            <Button 
                disabled={props.page >= props.totalPages? true : false}
                variant="contained" 
                className={classes.btnColor}
                style={{marginLeft: 10}}
                onClick={()=> props.handlePageNumber(props.page + 1)}
            >
                    next
            </Button>
        </div>
    )
}

export default Pagination 