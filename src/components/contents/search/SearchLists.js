import React from 'react'
import { makeStyles, Typography } from '@material-ui/core/';

const getStyles = makeStyles(theme => ({
    SearchList: {
        width: '24%',
        boxSizing: 'border-box',
        padding: '1%',
        float: 'left'
    },
    posterImg: {
      maxWidth: '100%',
    },
    searchListBox: {
        width: '100%',
        height: 'auto',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '150px auto',
        paddingBottom: 10,
        
    },
    moviePic: {
        width: 150,
    },
    movieDetail: {
        boxSizing: 'border-box',
        padding: 30,
        paddingTop: 0
    },
    overView: {
        wordBreak: 'normal',
        paddingTop: 15,
        lineHeight: '140%'
    }
}))


const SearchLists = (props) => {

    const classes = getStyles()

    return (

        <div className={classes.searchListBox}>

            <div className={classes.moviePic}>
                {
                    props.poster_path == null ? <img src={`https://via.placeholder.com/150x225/cccccc/333333/?text=No Image`} alt="no image" /> : <img className={classes.posterImg} src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt={`poster image of ${props.title}`}/>
                }
            </div>

            <div className={classes.movieDetail}>
                <div className={classes.listTitle}>
                    {
                        props.title == null ? <Typography color='primary' variant='h5'>{props.name}</Typography> : <Typography color='primary' variant='h5'>{props.title}</Typography>
                    }
                </div>
                <div style={{paddingTop:5, color:'#555'}}>
                    {
                       props.release_date? <span style={{paddingRight: 10}}>Release Date : {props.release_date}</span> : ''
                    }  
                    <span>Popularity : {props.popularity}</span>
                </div>
                <p className={classes.overView}>{props.overview}</p>
            </div>
        </div>
    )
}

export default SearchLists