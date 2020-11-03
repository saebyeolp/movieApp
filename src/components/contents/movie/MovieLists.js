import React from 'react'
import { makeStyles, Typography, Grid } from '@material-ui/core/';
import bgImg from './../../../img/noImg.jpg'


const getStyles = makeStyles(theme => ({
    listBox: {
        marginBottom: 10
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
        minHeight: 180,
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center'
    }
}))



const MovieLists = (props) => {

    const classes = getStyles()

    return (
            <Grid container spacing={3} className={classes.listBox}>

                <Grid item xs={12} sm={2}>
                    {
                        props.poster_path == null ? <div className='noImg'></div> : 
                        <img className={classes.posterImg} src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt={`${props.title}`}/>
                    }
                </Grid>

                <Grid item xs={12} sm={10}>
                    <div className={classes.listTitle}>
                        <Typography color='primary' variant='h5'>{props.title}</Typography>
                    </div>
                    <div style={{paddingTop:5, color:'#555'}}>
                        <span className={classes.spanTag}>Release Date : {props.release_date}</span> 
                        <span>/ Popularity : {props.popularity}</span>
                    </div>
                    <p className={classes.overView}>{props.overview}</p>
                </Grid>
            </Grid>
    )
}

export default MovieLists