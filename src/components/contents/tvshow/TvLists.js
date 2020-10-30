import React from 'react'
import { makeStyles, Typography } from '@material-ui/core/';

const getStyles = makeStyles(theme => ({
    listBox: {
        width: '100%',
        height: 'auto',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '150px auto',
        paddingBottom: 10,
    },
    posterImg: {
        maxWidth: '100%',
    },
    listPic: {
        width: 150,
    },
    listDetail: {
        boxSizing: 'border-box',
        padding: 30,
        paddingTop: 0
    },
    overView: {
        wordBreak: 'normal',
        paddingTop: 15,
        lineHeight: '140%'
    },
    spanTag: {
        paddingRight: 10
    }
}))


const TvLists = (props) => {

    const classes = getStyles()

    return (
        <div className={classes.listBox}>

            <div className={classes.listPic}>
                {
                    props.poster_path == null ? <img src={`https://via.placeholder.com/150x225/cccccc/333333/?text=No Image`} alt="blank" /> : 
                    <img className={classes.posterImg} src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt={`${props.title}`}/>
                }
            </div>

            <div className={classes.listDetail}>
                <div className={classes.listTitle}>
                    <Typography color='primary' variant='h5'>{props.name}</Typography> 
                </div>
                <div style={{paddingTop:5, color:'#555'}}>
                    <span className={classes.spanTag}>First Air Date : {props.first_air_date}</span> 
                    <span>/ Popularity : {props.popularity}</span>
                </div>
                <p className={classes.overView}>{props.overview}</p>
            </div>
        </div>
    )
}

export default TvLists