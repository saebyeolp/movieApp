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
    button: {
        display: 'inline-block',
        width: '10%',
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
                    classNamePrefix='filter2'
                    options={options}
                    onChange={props.handleChangeOption}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className="button"
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
                  props.searchResults.map((search, i) => {
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

            {   props.searchResults.length === 0 ? '' :
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