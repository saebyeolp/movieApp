import React from 'react'
import { makeStyles, FormControl, Select, MenuItem, Button, TextField } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';


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
                />

                <Select
                    defaultValue="None"
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

        </div>
    )
}

export default SearchForm