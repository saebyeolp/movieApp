import React from 'react'
import { makeStyles } from '@material-ui/core/';
import Select from 'react-select'

import MovieLists from './MovieLists'
import Loading from '../Loading'


const getStyles = makeStyles(theme => ({
    optionBox: {
        width: '100%',
        marginTop: 20,
    },
    formControl: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button: {
        display: 'inline-block',
        width: '10%'
    },
    listBox: {
        width:'100%', 
        paddingTop:30, 
        paddingBottom: 60, 
        display:'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center'
    },
    selectBox : {
        height: 56,
    }
}))

const MovieOption = (props) => {

    const classes = getStyles()

    const options =  [
        {label: 'Now-Playing', value: 'now_playing'},
        {label: 'Popular', value: 'popular'},
        {label: 'Top-Rated', value: 'top_rated'},
        {label: 'Upcoming', value: 'upcoming'}
    ] 

    return (
        <div className={classes.optionBox}>

            <Select 
                placeholder={'Now-Playing'}
                options={options}
                onChange={props.handleChange}
            />

            <div className={classes.listBox}>
                    {   props.isLoading ? <Loading /> :
                        props.movies.map((movie, i) => {
                            return (
                                <MovieLists 
                                    key={i}
                                    title={movie.title}
                                    poster_path={movie.poster_path}
                                    release_date={movie.release_date}
                                    popularity={movie.popularity}
                                    overview={movie.overview}
                                />
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default MovieOption