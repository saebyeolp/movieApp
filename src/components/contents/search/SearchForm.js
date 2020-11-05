import React from 'react'
import { makeStyles, FormControl, Button, TextField } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import Select from 'react-select'

/* import components */
import SearchLists from './SearchLists'
import Noquery from '../Noquery'
import Initiation from '../Initiation'
import Noresult from '../Noresult'
import Loading from '../Loading'
import Pagination from '../Pagination'


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
    searchBtn: {
        display: 'inline-block',
        width: '5%',
        backgroundColor: '#FEE510',
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


const SearchForm = (props) => {

    const classes = getStyles()

    const options =  [
        {label: 'TV', value: 'tv'},
        {label: 'Movie', value: 'movie'},
        {label: 'Multi', value: 'multi'},
    ] 

    return (
        <div className={classes.optionBox}>
            <FormControl variant="outlined" className={classes.formControl} >
                <TextField 
                    style={{width: 200, marginRight: 10}} 
                    id="outlined-basic" 
                    label="Search..." 
                    variant="outlined"
                    type="text"
                    value={props.query}
                    onChange={props.handleChangeQuery}
                />
                <Select 
                    placeholder={'TV'}
                    theme={theme => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            neutral50: '#333', 
                        },
                    })}
                    classNamePrefix='filter2'
                    options={options}
                    onChange={props.handleChangeOption}
                />
                <Button
                    variant="contained"
                    className={classes.searchBtn}
                    onClick={props.handleSearchFetch}
                >
                    <SearchIcon/>
                </Button>
            </FormControl>

            <div className={classes.listBox}>
               {  !props.query && !props.isLoading ? <Noquery /> : 
                  props.query && props.input ? <Initiation /> : 
                  !props.query && props.isLoading ? <Loading /> :
                  props.query && props.searchResults.length === 0 ? <Noresult /> :
                  !props.firstPage ? '' :
                  props.searchResults.slice(0,10).map((search, i) => {
                    return (
                            <SearchLists 
                                key={i}
                                title={search.title}
                                name={search.name}
                                release_date={search.release_date}
                                first_air_date={search.first_air_date}
                                popularity={search.popularity}
                                overview={search.overview}
                                poster_path={search.poster_path}
                            />
                    )
                  })
                }

                {  
                    props.firstPage ? '' :
                    props.searchResults.slice(10,20).map((search, i) => {
                        return (
                            <SearchLists 
                                key={i}
                                title={search.title}
                                name={search.name}
                                release_date={search.release_date}
                                first_air_date={search.first_air_date}
                                popularity={search.popularity}
                                overview={search.overview}
                                poster_path={search.poster_path}
                            />
                        )
                    })
                }
            </div>

            {   props.totalResults <= 10 ? '' :
                !props.query && !props.isLoading ? '' :
                 props.query && props.input ? '' :
                 props.query && props.searchResults.length === 0 ? '' :
                <div className={classes.btnBox}>
                    <Button
                        className={props.firstPage ? classes.btnStyleBlocked : classes.btnStyle}
                        style={{marginRight: 10}}
                        disabled={props.firstPage ? true : false}
                        onClick={props.handleFirstPage}
                    >
                        Go to the First Page
                    </Button>
                    <Button
                        className={props.firstPage ? classes.btnStyle : classes.btnStyleBlocked}
                        disabled={!props.firstPage ? true : false}
                        onClick={props.handleSecondPage}
                    >
                        Go to the Second Page
                    </Button>
                </div>
            }

            {   !props.query && !props.isLoading ? '' :
                 props.query && props.input ? '' :
                 props.query && props.searchResults.length === 0 ? '' :
                <Pagination 
                    page={props.page}
                    totalPages={props.totalPages}
                    handlePageNumber={props.handlePageNumber}
                />
            }

        </div>
    )
}

export default SearchForm