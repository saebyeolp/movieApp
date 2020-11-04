import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core/';
import bgImg from './../../../img/noImg.jpg'

const getStyles = makeStyles(theme => ({
    listBox: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#d2d2d2',
        borderStyle: 'dashed'
    },
    posterImg: {
        maxWidth: '100%',
    },
    overView: {
        wordBreak: 'normal',
        paddingTop: 15,
        lineHeight: '140%'
    },
    spanTag: {
        paddingRight: 10
    },
    noImg: {
        width: '100%',
        height: 180,
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center'       
    },
    listTitle : {
        color: '#032541',
        paddingTop: 5,
    }
}))


const TvLists = (props) => {

    const classes = getStyles()

    return (
        <Grid container spacing={3} className={classes.listBox}>

            <Grid item xs={12} sm={2}>
                {
                    props.poster_path == null ? <div className={classes.noImg}></div> : 
                    <img className={classes.posterImg} src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt={`${props.title}`}/>
                }
            </Grid>

            <Grid item xs={12} sm={10}>
                <div className={classes.listTitle}>
                    <Typography variant='h5'>{props.name}</Typography> 
                </div>
                <div style={{paddingTop:5, color:'#555'}}>
                    <span className={classes.spanTag}>First Air Date : {props.first_air_date}</span> 
                    <span>/ Popularity : {props.popularity}</span>
                </div>
                <p className={classes.overView}>{props.overview}</p>
            </Grid>

        </Grid>
    )
}

export default TvLists