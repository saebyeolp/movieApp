import React from 'react'
import { makeStyles, FormControl, Select, MenuItem, Button, TextField } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';

/* import components */
import SearchLists from './SearchLists'
import Initiation from '../Initiation';
import Noresult from '../Noresult';


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
    }
}))


const SearchForm = (props) => {

    const classes = getStyles()

    return (
        <div className={classes.optionBox}>
            <FormControl variant="outlined" className={classes.formControl} >

                <TextField 
                    style={{width: 200, marginRight: 10}} 
                    id="outlined-basic" 
                    label="Search..." 
                    variant="outlined" 
                    onChange={props.handleChangeQuery}
                />

                <Select
                    defaultValue="None"
                    onChange={props.handleChangeOption}
                    style={{width: 100, marginRight: 10}}
                >
                    <MenuItem value="None">None</MenuItem>
                    <MenuItem value="tv">TV</MenuItem>
                    <MenuItem value="movie">movie</MenuItem>
                    <MenuItem value="multi">multi</MenuItem>
                </Select>
                <Button
                    variant="contained"
                    color="primary"
                    className="button"
                    onClick={props.handleSearchFetch}
                >
                    <SearchIcon/>
                </Button>

            </FormControl>

            <div style={{width:'100%', paddingTop:30, paddingBottom: 60, display:'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                { props.noData === false && props.searchResults.length == 0 ? <Initiation /> :
                  props.noData === true ? <Noresult /> :
                  props.searchResults.map((search, i) => {
                    return (
                        <SearchLists 
                            key={i}
                            title={search.title}
                            name={search.name}
                            release_date={search.release_date}
                            popularity={search.popularity}
                            overview={search.overview}
                            poster_path={search.poster_path}
                        />
                    )
                  })


                }
            </div>
        </div>
    )
}

export default SearchForm