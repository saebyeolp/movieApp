import React from 'react'
import { makeStyles, Button } from '@material-ui/core/';
import Select from 'react-select'

/* import components */
import MovieLists from './MovieLists'
import Loading from '../Loading'
import Pagination from '../Pagination'

const getStyles = makeStyles(theme => ({
    optionBox: {
        width: '100%',
        marginTop: 20,
    },
    selectFlex: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        display: 'inline-block',
        width: '10%'
    },
    listBox: {
        width:'100%', 
        paddingTop: 40, 
        display:'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center'
    },
    btnBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20
    },
    btnStyle: {
        width: '49%',
        backgroundColor: '#FEE510',
        color: 'black',
    },
    btnStyleBlocked: {
        width: '49%',
        backgroundColor: '#EEE',
        color: '#555',
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

            <div className={classes.selectFlex}>
                <Select 
                    placeholder={'Now-Playing'}
                    theme={theme => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            neutral50: '#333', 
                        },
                    })}
                    options={options}
                    onChange={props.handleChange}
                    classNamePrefix='filter'
                />
            </div>

            <div className={classes.listBox}>
                {   
                    props.isLoading ? <Loading /> :
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

            {   props.isLoading ? '' :
                <Pagination 
                    page={props.page}
                    totalPages={props.totalPages}
                    handlePageNumber={props.handlePageNumber}
                />
            }   
                
        </div>

    )
}

export default MovieOption