import React from 'react'
import { makeStyles, FormControl, Select, MenuItem, Button } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';

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
    }
}))

const MovieOption = (props) => {

    const classes = getStyles()

    const options =  [
        {value: 'now_playing'},
        {value: 'popular'},
        {value: 'top_rated'},
        {value: 'upcoming'}
    ] 

    const optionItems = options.map((option) =>
        <option value={option.value}>{option.value}</option>
    );

    return (
        <div className={classes.optionBox}>
            <FormControl variant="outlined" className={classes.formControl}>

                <Select
                    native
                    defaultValue="now_playing"
                    onChange={props.handleChangeOption}
                    style={{width: 270, marginRight: 10}}
                >
                    {optionItems}
                </Select>

                <Button
                    variant="contained"
                    color="primary"
                    className="button"
                    onClick={props.handleMovieFetch}
                >
                    <SearchIcon/>
                </Button>

            </FormControl>

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